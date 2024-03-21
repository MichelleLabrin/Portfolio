<template>
  <section>
    <h3>Añadir Profesor</h3>
    <div><label>Nombre:</label><input type="text" v-model="teacher.teacherName" /></div>
    <div><label>Apellidos:</label><input type="text" v-model="teacher.surname" /></div>
    <div><label>DNI / NIF:</label><input type="text" v-model="teacher.dni" /></div>
    <div><label>Materias:</label><input type="text" v-model="subject" /> <button @click="handleSubject()">Agregar</button>
    </div>
    <div>
      <ul>
        <li v-for="(elm, index) in teacher.subjects" :key="index">{{ elm }}</li>
      </ul>
    </div>
    <input type="checkbox" /> Documentación Entregrada
    <button @click="handleNewTeacher()"> Agregar</button>
  </section>

  <section>
    <h3>Listado de Profesores</h3>
    <table>
      <tr>
        <th>Nombre</th>
        <th>Apellidos</th>
        <th>DNI / NIF</th>
        <th>Materias</th>
        <th>Documentación Entregada</th>
      </tr>
      <tr v-for="elm in teachers" :key="elm.dni">
        <th>{{ elm.teacherName }}</th>
        <th>{{ elm.surname }}</th>
        <th>{{ elm.dni }}</th>
        <th>
          <ul>
            <li v-for="(item, index) in elm.subject" :key="index">
              {{ item }}
            </li>
          </ul>
        </th>
        <th v-if="elm.doc">Entregados</th>
        <th v-else>No entregado</th>
      </tr>
    </table>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const teacher = ref({
  teacherName: '',
  surname: '',
  dni: '',
  subjects: [],
  doc: false,
})

const teachers = ref([])
const subject = ref('')

const handleSubject = () => {
  teacher.value.subjects.push(subject.value)
  subject.value = ""
}

const handleNewTeacher = () => {
  teachers.value.push({
    teacherName: teacher.value.teacherName,
    surname: teacher.value.surname,
    dni: teacher.value.dni,
    subject: teacher.value.subjects,
    doc: teacher.value.doc,
  })
  teacherName: teacher.value.teacherName = ""
  surname: teacher.value.surname = ""
  dni: teacher.value.dni = ""
  subject: teacher.value.subjects = []
  doc: teacher.value.doc = false
}
</script>

<style scoped>
section {
  background-color: #f5f5f5;
  padding: 20px;
  margin: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

h3 {
  font-size: 1.5rem;
  margin-bottom: 15px;
}

label {
  font-weight: bold;
}

input[type="text"] {
  width: 100%;
  padding: 8px;
  margin: 6px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 5px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 15px;
}

th,
td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

tr:nth-child(odd) {
  background-color: #fff;
}

button {
  background-color: #007BFF;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 4px;
}

button:hover {
  background-color: #0056b3;
}

input[type="checkbox"] {
  margin-right: 5px;
}
</style>

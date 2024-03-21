<template>
    <div>
        <button class="button-extra" @click="navigateTo('/extrauno')">Extra Uno</button>
        <button class="button-extra" @click="navigateTo('/extrados')">Extra Dos</button>
        <button class="button-extra" @click="navigateTo('/extratres')">Extra Tres</button>
        <button class="button-extra" @click="navigateTo('/teacherform')">Teacher Form</button>
        <button class="button-extra" @click="navigateTo('/computada')">Computadas</button>
        <button class="button-extra" @click="navigateTo('/memoryGame')">Memory Game</button>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const navigateTo = (route) => {
    router.push(route);
};

const router = useRouter();

</script>

<style scoped>
.button-extra {
    background-color: #fdba00;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    margin: 5px;
}
</style>

<template>
    <hr>
    <h2>home</h2>
    <p> count: {{ counterStore.count}}</p>
    <button @click="countAddBtn">count+1</button>
    <p> {{ count }}</p>
</template>
<script setup>
    import useCounter from '@/stores/counter'
    import { toRefs } from 'vue'
    const counterStore = useCounter()
    //toRefs 使直接调用counterStore中的count变成响应式
    //或者使用  pinia中的方法  storeToRefs
    const { count } = toRefs(counterStore)
    //pinia可以直接在这里修改属性 不用像 vuex中必须使用 mutations 
    const countAddBtn = () => {
        counterStore.count++
    }
</script>
<style scoped>

</style>
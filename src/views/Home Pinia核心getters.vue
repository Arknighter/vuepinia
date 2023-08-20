<template>
    <hr>
    <h2>home</h2>
    <p> {{ countStore.count }}</p>
    <p> {{ countStore.doubleCount }}</p>
    <p> {{ countStore.doubleCountAddOne }}</p>
    <p>friend信息 {{ countStore.getFriendById(2) }}</p>
    <p>调用其他store  {{ countStore.showMsg }}</p>
</template>
<script setup>
    import useCount from '@/stores/counter'
    const countStore = useCount()

</script>
<style scoped>

</style>
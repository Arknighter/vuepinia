<template>
    <hr>
    <h2>Pinia_store</h2>
    <p> {{ countStore.count }}</p>
    <hr>
    <h2>getters</h2>
    <p> {{ countStore.doubleCount }}</p>
    <p> {{ countStore.doubleCountAddOne }}</p>
    <p>friend信息 {{ countStore.getFriendById(2) }}</p>
    <p>调用其他store  {{ countStore.showMsg }}</p>
    <hr>
    <h2>action</h2>
    <button @click="countBtn(5)"> count ++</button>
    <ul>
       <template v-for="item in homeStore.banners" :key="item.acmm">
            <li>{{  item.title  }}</li>
       </template>
    </ul>
</template>
<script setup>
    import useCount from '@/stores/counter'
    import useHome from '@/stores/home'

    const countStore = useCount()
    const homeStore = useHome()
    const countBtn = (num) => {
        countStore.increment(num)
    }
    homeStore.fetchHomeAction().then( res => {
        console.log("fetchHomeAction的action已经完成了" + res)
    })
</script>
<style scoped>

</style>
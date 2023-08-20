<template>
    <hr>
    <h2>home</h2>
    <p> name: {{ usersStore.name}}</p>
    <p> age: {{ age }}</p>
    <p> level: {{ level }}</p>
    <button @click="changeStateBtn">修改state</button>
    <button @click="ResetStateBtn">重置state</button>
</template>
<script setup>
    import useUsers from '@/stores/users'
    import { storeToRefs } from 'pinia'
    //useUsers 是函数 
    const usersStore = useUsers()
    const {age , level} = storeToRefs(usersStore)
    const changeStateBtn = () => {
        //一个一个修改
        // usersStore.name = "yjh pro max",
        // usersStore.age = 24 

        //一次性修改多个数据
        // usersStore.$patch({
        //     name: "yjh new",
        //     age: 28,
        //     level: 233
        // })

        //替换state为新对象
        usersStore.$state = {
            name: "curry",
            level: 325
        }
    }
    const ResetStateBtn = () =>{
        usersStore.$reset()
    }
        
    

    //pinia自带重置state
</script>
<style scoped>

</style>
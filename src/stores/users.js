import { defineStore } from "pinia"

const useUsers = defineStore("users",{
    state: () => ({
        name: "yjh",
        age: 23,
        level: 2,
        msg: "hhhhhhhh"
    }) 
})

export default useUsers
//第一步：定义一个关于counter的store
import { defineStore } from "pinia"


//第二步： 规范  返回函数名称   use + counter defineStore名称
//返回是个函数
const useCounter = defineStore("counter",{
    state:() => ({
        count:99
    })
})

//使用的话，调用函数（vue中）
// const counterStore =  useCounter()

export default useCounter
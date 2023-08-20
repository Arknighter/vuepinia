//第一步：定义一个关于counter的store
import { defineStore } from "pinia"

//引用其他store
import useUsers from "./users"


//第二步： 规范  返回函数名称   use + counter defineStore名称
//返回是个函数
const useCounter = defineStore("counter",{
    state:() => ({
        count:99,
        firends:[
            { id: 1 , name: "yjh"},
            { id: 2 , name: "yjh2"},
            { id: 3 , name: "yjh3"}
        ]
    }),
    getters: {
        //基本使用
        doubleCount(state){
            return state.count*2
        },
        //一个getter引用其他get
        doubleCountAddOne(state){
            //这里的是this是store实例
            return this.doubleCount + 1
            // return state.doubleCount + 3
        },
        //getters也支持返回一个函数
        getFriendById(state){
            return function(id){
                return state.firends.find(item => item.id == id)
            }
        },
        //getters 用到了其他store的数据
        showMsg(state){
            const UsersStore = useUsers()
            return `name:${UsersStore.msg}-count:${state.count}`
        }
    },
    actions: {
        increment(num){
            //通过this来访问本地的 store
            this.count += num
        },
        
    }
})

//使用的话，调用函数（vue中）
// const counterStore =  useCounter()

export default useCounter
import { defineStore } from "pinia"

const useHome  = defineStore("home",{
    state: () => ({
        banners: [],
        recommends: []
    }),
    actions: {
        //async
        async fetchHomeAction(){
            const res = await fetch("http://123.207.32.32:8000/home/multidata")
            const data = await res.json()
            // console.log(data)
            this.banners = data.data.banner.list
            //返回会被promise包裹
            return "ok"

            // return new Promise( async (resolve,reject) => {
            //     const res = await fetch("http://123.207.32.32:8000/home/multidata")
            //     const data = await res.json()
            //     this.banners = data.data.banner.list
            //     resolve("okBBB") 
            // })
        }
    }
}) 

export default useHome
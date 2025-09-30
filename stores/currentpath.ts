import { defineStore } from "pinia";

export const useCurrentpathStore=defineStore('currentpath',()=>{
    const path=ref<string>('/')
    return{
        path
    }
})
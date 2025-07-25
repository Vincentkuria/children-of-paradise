<template>
    <div>
        <div class="flex justify-center items-center align-middle my-10">
        <form @submit.prevent="login()"
            class="flex flex-col h-fit items-center w-full max-w-md mx-auto p-6 space-y-6 bg-white rounded-md shadow-md">
            <h2 class="text-3xl font-bold text-center">Login</h2>
            <div class="w-full">
                <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                <input @input="error=null" type="email" id="email" v-model="credentials.email" class="block w-full px-4 py-2 text-gray-700 bg-white border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-gray-400" required/>
            </div>
            <div class="w-full">
                <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                <input @input="error=null" type="password" id="password" v-model="credentials.password" class="block w-full px-4 py-2 text-gray-700 bg-white border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-gray-400" required/>
            </div>
            <button type="submit" class="w-full px-4 py-2 text-white bg-primary rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-gray-300">Login</button>
            <p v-if="error!=null" class="text-red-600 bg-white mt-1 text-center"><Icon name="bx:bxs-error"/>  {{ error }}</p>
        </form>
        </div>
        <NuxtLink class="text-blue-500 p-10" to="/" >back home</NuxtLink>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'adminlayout'
})

const credentials=reactive({
  email:'',
  password:''
})

const error=ref<string | null>(null)

onMounted(()=>{
    useCurrentpathStore().path=useRoute().path
})

const login=async()=>{
    if(credentials.email.trim()=='' || credentials.password.trim()=='' ){return}
    const res:any=await $fetch(useRuntimeConfig().public.baseUrl+"/auth/login",{
        method:'POST',
        params:credentials,
        onResponse({response,options}){
            if(response.status==200){
                localStorage.setItem("token", response._data.token)
                navigateTo("/admin/messages")
            }

            if(response.status==400){
                error.value="wrong email or password"
            }
        }
    })

}
</script>
<template>
    <div>
        <h1 class="text-primary text-center p-4 md:px-20 md:mt-10 font-bold text-3xl md:text-6xl">
            <div class="flex flex-row justify-self-center justify-items-center gap-3">
                <span><NuxtImg format="webp" src="/donate-pic1.jpg" class="h-[3rem] w-[8rem] md:h-[5rem] md:w-[10rem] rounded-full object-cover" /></span>
                <span class="text-secondary text-center">Donate</span>
                <span><NuxtImg format="webp" src="/donate-pic2.jpg" class="h-[3rem] w-[8rem] md:h-[5rem] md:w-[10rem] rounded-full object-cover" /></span>
            </div> Your Kindness Matters
        </h1>

        <div class="flex justify-center">
            <p class="text-center text-secondary md:w-[50%] p-5">
                Your donation will directly helping us create a brighter and more stable future for the children in our care. For goods donations and volunteer opportunities, please contuct us on the <span><NuxtLink class="text-primary" to="/contact">contact page</NuxtLink>.</span>
            </p>
        </div>
        

        <div class="w-full md:w-[50%] h-fit md:h-fit bg-primary p-10 flex justify-self-center justify-items-center">
        <div class="w-full h-fit flex flex-col justify-self-center">
            <h1 class="text-white font-bold text-2xl">Donate</h1>
            <form v-if="!donationReceived" @submit.prevent="handleSubmit()" class="flex flex-col bg-primary">
            
                <div class="flex flex-col my-3">
                    <label class="text-white " for="name">Name</label>
                    <input @input="error=null" class="bg-gray-100 p-2" v-model="data.name" name="name" id="name" placeholder="name" required>
                </div>
                <div class="flex flex-col my-3">
                    <label class="text-white " for="email">Email</label>
                    <input @input="error=null" class="bg-gray-100 p-2" v-model="data.email" name="email" id="email" placeholder="email@example.com" required>
                </div>
                <div class="flex flex-col my-3">
                    <label class="text-white " for="phone">Phone</label>
                    <input @input="error=null" class="bg-gray-100 p-2" v-model="data.phone" name="phone" id="phone" placeholder="+254 712 345 678" required>
                </div>
                <div class="flex flex-col my-3">
                    <label class="text-white " for="message">Amount</label>
                    <input @input="error=null" class="bg-gray-100 p-2" v-model="data.amount" type="number" name="amount" id="amount" placeholder="100" required>
                </div>
                <button type="submit" class="bg-secondary text-white p-3">Proceed</button>
                <p v-if="error!=null" class="text-red-600 pt-1 text-center text-shadow-xs text-shadow-red-400"><Icon name="bx:bxs-error"/>  {{ error }}</p>
            </form>
        
        
            <div v-else>
                <div class="w-full h-fit flex justify-center ">
                    <Icon name="material-symbols:check-circle-rounded" class="text-6xl text-white m-5"/>
                </div>
                <p class="justify-center text-white font-bold text-4xl text-center">Dontion received successfully.<br>We Apreciate Your Kindness</p>
            </div>
        
        
        </div>
        </div>
    </div>
</template>

<script setup lang="ts">

onMounted(()=>{
    useCurrentpathStore().path=useRoute().path
})


const donationReceived=ref(false);
const paymentInterval=ref();

onUnmounted(()=>{
    clearInterval(paymentInterval.value)
})

let error=ref<String | null>(null)
let emailRegexPertten="^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,6}$"

const data=reactive({
    name:'',
    email:'',
    phone:'',
    amount:null,
    
})

const handleSubmit=async()=>{
    if (!validate()) {return}
    const response=await $fetch(useRuntimeConfig().public.baseUrl+"/donate",{
        method: "POST",
        body:{
            name:data.name,
            email:data.email,
            phone:data.phone,
            amount:data.amount
        }
    })

    const accessCode:String= (response as {accessCode:String})['accessCode']
    openPopup(accessCode)

    const id=(response as {donation:{id:Number}})['donation']['id']
    console.log(id)

    clearInterval(paymentInterval.value)

    paymentInterval.value=setInterval(async() => {
        const responseStatus=await $fetch(useRuntimeConfig().public.baseUrl+"/webhook/paystack/"+id, {
            method:"GET",
            onResponse({response,options}){
                if (response.status==200 && response._data.status=="SUCCESS") {
                    donationReceived.value=true
                    clearInterval(paymentInterval.value)
                }else if(response.status==200 && (response._data.status=="FAILED" || response._data.status=="ABANDONED")){
                    clearInterval(paymentInterval.value)
                }
            }
        })
    },3000);

}

const validate=():Boolean=>{
    if (data.name.trim()=="" || data.name.trim()==null || data.name.length<3 || data.name==undefined){
        error.value= "please give a valid name"
        return false
    }

    if (data.email.trim()=="" || data.email.trim()==null || !data.email.match(emailRegexPertten) || data.email==undefined){
        error.value="please ensure you give a valid email address"
        return false
    }

    if (data.phone.trim()=="" || data.phone.trim()==null || data.phone.length<6 || data.phone.length>20){
        error.value="please ensure you give a valid phone number"
        return false
    }

    if(data.amount==null || data.amount<=0){
        error.value="please give a value on the amount"
        return false
    }

    return true

}

const openPopup=async(accessCode:String)=>{
    if (typeof window !== 'undefined') {
        const mod = await import('@paystack/inline-js')
        const PaystackPop=mod.default

        const popup=new PaystackPop()
        popup.resumeTransaction(accessCode)
    }
    }
    
</script>
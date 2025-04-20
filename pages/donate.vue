<template>
    <div>
        <h1 class="text-primary text-center p-4 md:px-20 md:mt-10 font-bold text-3xl md:text-6xl">
            <div class="flex flex-row justify-self-center justify-items-center gap-3">
                <span><NuxtImg  src="donate-pic1.jpg" class="h-[3rem] w-[8rem] md:h-[5rem] md:w-[10rem] rounded-full object-cover" /></span>
                <span class="text-secondary text-center">Donate</span>
                <span><NuxtImg src="donate-pic2.jpg" class="h-[3rem] w-[8rem] md:h-[5rem] md:w-[10rem] rounded-full object-cover" /></span>
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
                    <input class="bg-gray-100 p-2" v-model="data.name" name="name" id="name" placeholder="name" required>
                </div>
                <div class="flex flex-col my-3">
                    <label class="text-white " for="email">Email</label>
                    <input class="bg-gray-100 p-2" v-model="data.email" name="email" id="email" placeholder="email@example.com" required>
                </div>
                <div class="flex flex-col my-3">
                    <label class="text-white " for="phone">Phone</label>
                    <input class="bg-gray-100 p-2" v-model="data.phone" name="phone" id="phone" placeholder="+254 712 345 678" required>
                </div>
                <div class="flex flex-col my-3">
                    <label class="text-white " for="message">Amount</label>
                    <input class="bg-gray-100 p-2" v-model="data.amount" name="amount" id="amount" placeholder="100" required>
                </div>
                <button type="submit" class="bg-secondary text-white p-3">Proceed</button>
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

const data=reactive({
    name:'',
    email:'',
    phone:'',
    amount:null,
    
})

const handleSubmit=()=>{
    // TODO: validate
    // send to backend
    // get access tocken
    openPopup("access_code")
    // call the polling function every 3 seconds
    //then is success donationReceived.value=true


}

const openPopup=async(accessCode:string)=>{
    if (typeof window !== 'undefined') {
        const mod = await import('@paystack/inline-js')
        const PaystackPop=mod.default

        const popup=new PaystackPop()
        popup.resumeTransaction(accessCode)
    }
    }
    
</script>
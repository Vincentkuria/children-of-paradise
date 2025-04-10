<template>
    <div>
        <h1 class="text-primary text-center p-4 md:px-20 md:mt-10 font-bold text-3xl md:text-6xl">
            Contact Us
        </h1>
        <div class="w-[90dvw] h-fit flex flex-col md:flex-row justify-self-center">
            <div class="w-full md:w-[30%] h-fit md:h-full bg-secondary text-white px-2 md:ps-2">
                <div class="bg-white my-2">
                    <NuxtImg src="Logo.png" class="w-40"/>
                </div>
                <div>
                    <div class="flex flex-row items-center gap-3 m-5">
                        <Icon name="material-symbols:location-on" class="text-xl"/>
                        <span class="font-light">Kayole Junction, Nairobi.<br>100m from Obama office</span>
                    </div>
                    <div>
                        <div class="flex flex-row items-center gap-3 m-5">
                            <Icon name="material-symbols:mail-rounded" class="text-xl"/>
                            <span class="font-light"><a href="mailto:info@childrenofparadiseorphanage.org">info@childrenofparadiseorphanage.org</a></span>
                        </div>
                    </div>
                    <div>
                        <div class="flex flex-row items-center gap-3 m-5">
                            <Icon name="material-symbols:call-sharp" class="text-xl"/>
                            <span class="font-light"><a href="tel:+254712345678">+254712345678</a></span>
                        </div>
                    </div> 
                    <div>
                        <div class="flex flex-row items-center gap-3 m-5">
                            <Icon name="map:post-box" class="text-xl"/>
                            <span class="font-light">P.O Box 1234</span>
                        </div>
                    </div>         
                </div>
                
                
            </div>


            <div class="w-full md:w-[70%] h-fit md:h-fit bg-primary p-10">

                <div>
                    <h1 class="text-white font-bold text-2xl">Contact Us</h1>
                    <form v-if="!messagesent" @submit.prevent="handleSubmit()" class="flex flex-col bg-primary">
                    
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
                            <label class="text-white " for="message">Message</label>
                            <textarea class="bg-gray-100 p-2" v-model="data.message" name="message" id="message" placeholder="Please leave a message" rows="4" required></textarea>
                        </div>
                        <button type="submit" class="bg-secondary text-white p-3">Send</button>
                    </form>
                
                
                    <div v-else>
                        <div class="w-full h-fit flex justify-center ">
                            <Icon name="material-symbols:check-circle-rounded" class="text-6xl text-white m-5"/>
                        </div>
                        <p class="justify-center text-white font-bold text-4xl text-center">Message sent successfully.<br>Will get back to you within 48 hours</p>
                    </div>
                

                </div>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">

const messagesent=ref(false);

const data=reactive({
    name:'',
    email:'',
    phone:'',
    message:'',
    read:false,
    timestamp:Date.now()
})

onMounted(()=>{
    useCurrentpathStore().path=useRoute().path
})

const handleSubmit=()=>{

}
</script>
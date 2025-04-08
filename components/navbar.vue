<template>
    <div class="flex w-full items-center justify-center">
        <div class="w-[80%] flex flex-row justify-between h-20 md:h-24 bg-[#D9D9D9] mt-10">
            <NuxtLink to="/"><NuxtImg src="/Logo.png" class="w-20 md:w-24 md:h-24 p-2" /></NuxtLink>
            <div class="md:w-[50%] relative">
                <div class="w-24 md:w-full absolute md:static md:h-full top-5 right-0 bg-[#D9D9D9]">
                    <div class="md:hidden flex items-center justify-center p-3">
                        <Icon v-if="!menuOpen" @click="menuOpen = true" name="material-symbols:menu" size="30" class="text-primary"/>
                        <Icon v-else @click="menuOpen = false" name="material-symbols:close-rounded" size="30" class="text-primary"/>
                    </div>
                    <ul :class="menuOpen ? 'flex' : 'hidden'" class=" md:flex flex-col md:h-full md:flex-row justify-between items-center gap-3 md:gap-0 text-white md:text-black bg-secondary md:bg-[#D9D9D9] shadow-2xl shadow-gray-400 md:shadow-none pt-3 md:p-0">
                        <li class="font-thin hover:text-primary"><NuxtLink :class="currentRoute() == '/' ? 'after:bg-primary after:h-0.5 after:w-full after:block' : ''" to="/">Home</NuxtLink></li>
                        <li class="font-thin hover:text-primary"><NuxtLink :class="currentRoute() == '/about' ? 'after:bg-primary after:h-0.5 after:w-full after:block' : ''" to="/about">About Us</NuxtLink></li>
                        <li class="font-thin hover:text-primary"><NuxtLink :class="currentRoute() == '/gallery' ? 'after:bg-primary after:h-0.5 after:w-full after:block' : ''" to="/gallery">Gallery</NuxtLink></li>
                        <li class="font-thin hover:text-primary"><NuxtLink :class="currentRoute() == '/contact' ? 'after:bg-primary after:h-0.5 after:w-full after:block' : ''" to="/contact">Contact Us</NuxtLink></li>
                        <div class="bg-primary font-playwrite h-full p-5 flex items-center text-white"><NuxtLink :class="currentRoute() == '/donate' ? 'after:bg-white after:h-0.5 after:w-full after:block' : ''" to="/donate">Donate</NuxtLink></div>
                    </ul>
                </div>
                
            </div>
            
        </div>
    </div>
</template>

<script setup lang="ts">

const menuOpen = ref(false)
const currentRoute=()=>{
    return useCurrentpathStore().path
}
</script>
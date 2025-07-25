<template>
    <div :class="isFixed ? 'fixed top-0 bg-white/5 backdrop-blur-xl' : 'relative'" class="flex z-[100] w-full items-center justify-center transition-all duration-300 drop-shadow-[0_2px_10px_rgba(0,0,0,0.1)]">
        <div class="w-full flex flex-row justify-between h-20 md:h-24 bg-[#D9D9D9]">
            <div class="flex flex-col justify-center px-5">
                <h1 class="text-primary font-bold">ADMIN</h1>
                <p>Children of Paradise</p>
            </div>
            
            <div v-if="!(useCurrentpathStore().path=='/admin')" class="md:w-[60%] lg:w-[50%] relative">
                <div class="w-24 md:w-full absolute md:static md:h-full top-5 right-5 bg-[#D9D9D9]">
                    <div class="md:hidden flex items-center justify-center p-3">
                        <Icon v-if="!menuOpen" @click="menuOpen = true" name="material-symbols:menu" size="30" class="text-primary"/>
                        <Icon v-else @click="menuOpen = false" name="material-symbols:close-rounded" size="30" class="text-primary"/>
                    </div>
                    <ul :class="menuOpen ? 'flex' : 'hidden'" class=" md:flex flex-col md:h-full md:flex-row justify-around items-center gap-3 md:gap-0 text-white md:text-black bg-secondary md:bg-[#D9D9D9] shadow-2xl shadow-gray-400 md:shadow-none pt-3 md:p-0">
                        <li class="font-thin hover:text-primary"><NuxtLink @click="menuOpen=false" :class="currentRoute() == '/admin/messages' ? 'after:bg-primary after:h-0.5 after:w-full after:block' : ''" to="/admin/messages">Messages</NuxtLink></li>
                        <li class="font-thin hover:text-primary"><NuxtLink @click="menuOpen=false" :class="currentRoute() == '/admin/gallery' ? 'after:bg-primary after:h-0.5 after:w-full after:block' : ''" to="/admin/gallery">Gallery</NuxtLink></li>
                        <div class="bg-primary font-playwrite h-full md:h-fit hover:cursor-pointer p-3 flex items-center text-white text-nowrap"><NuxtLink @click="menuOpen=false; logOut()">Log Out</NuxtLink></div>
                    </ul>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
const menuOpen = ref(false)
const isFixed = ref(false)
const currentRoute=()=>{
    return useCurrentpathStore().path
}

const handleScroll = () => {
    isFixed.value = window.scrollY > 10
}

onMounted(()=>{
    window.addEventListener("scroll", handleScroll)
})

onBeforeUnmount(()=>{
    window.removeEventListener("scroll", handleScroll)
}) 

const logOut=()=>{
    localStorage.removeItem("token")
    navigateTo("/admin")
}

</script>
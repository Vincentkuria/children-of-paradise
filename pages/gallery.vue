<template>
    <div class="p-2">
        <h1 class="text-primary text-center p-4 md:px-20 md:mt-10 font-bold text-3xl md:text-6xl">
            Children Of Paradise <span class="text-secondary">Orphanage</span> Home<br/><span class="text-secondary">Gallery</span>
        </h1>
        <masonry-wall :items="items" :ssr-columns=2 :max-columns=6 :min-columns=2 :gap=10>
            <template #default="{ item, index }" >
              <NuxtImg :src="item" class="w-full h-full" />
              <p class="text-center bg-secondary font-bold text-white py-2 text-sm font-mono">At church in 1990</p>
            </template>
        </masonry-wall>
    </div>
</template>

<script setup lang="ts">
onMounted(()=>{
    useCurrentpathStore().path=useRoute().path
})

const items=<string[]>[
    "heropics/1.jpg",
    "heropics/2.jpg",
    "heropics/3.jpg",
    "heropics/4.jpg",
    "heropics/5.jpg",
    "heropics/6.jpg",
    "heropics/7.jpg",
    "heropics/8.jpg",
    "heropics/9.jpg",
    "heropics/10.jpg",
    "heropics/11.jpg",
    "heropics/12.jpg",
    "heropics/13.jpg",
    "heropics/14.jpg",
    "heropics/15.jpg",
    "heropics/16.jpg",
    "heropics/17.jpg",
    "heropics/18.jpg",
    "heropics/19.jpg",
    "heropics/20.jpg",

]
</script>
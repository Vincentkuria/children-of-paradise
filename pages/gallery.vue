<template>
    <div class="p-2">
        <h1 class="text-primary text-center p-4 md:px-20 md:mt-10 font-bold text-3xl md:text-6xl">
            Children Of Paradise <span class="text-secondary">Orphanage</span> Home<br/><span class="text-secondary">Gallery</span>
        </h1>
        <masonry-wall :items="images as Array<{id:number, image:string, title:string, createdAt:string}>" :ssr-columns=2 :max-columns=6 :min-columns=1 :gap=10>
            <template #default="{ item, index }" >
              <NuxtImg format="webp" :src="useRuntimeConfig().public.baseUrl+'/'+ item['image'] as string" class="w-full h-full" />
              <p class="text-center bg-secondary text-white py-2 text-xs md:text-sm font-mono">{{ item['title'] }}</p>
            </template>
        </masonry-wall>
    </div>
</template>

<script setup lang="ts">
onMounted(()=>{
    useCurrentpathStore().path=useRoute().path
    console.log(images.value)
})

const {data:images}=await useFetch(useRuntimeConfig().public.baseUrl+"/gallery",{
  method: 'GET'
})


</script>
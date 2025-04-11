<template>
    <div class="md:px-20">
      <div class="flex flex-row justify-end">
        <div class="px-3 py-2 bg-secondary text-white hover:cursor-pointer">Add to gallery</div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
<div v-for="i in 10" class="-z-50 p-2 relative md:p-5 flex flex-row bg-gray-200 shadow shadow-gray-300 m-3 md:m-5 items-center">
        <NuxtImg src="heropics/1.jpg" class="w-20 h-20 object-cover me-2"/>
        <p class="justify-center">tour tour tour ts   ddhsshhss shddhddhd d </p>
        <p class="w-52 text-center justify-center">2 march 2025</p>
        <Icon name="material-symbols:delete" class="text-red-500 text-xl absolute top-0 right-0"/>
      </div>
      </div>
      
    </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'adminlayout'
})

onMounted(()=>{
    useCurrentpathStore().path=useRoute().path
})
</script>
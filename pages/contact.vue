<template>
    <div>
        <h1 class="text-primary text-center p-4 md:px-20 md:mt-10 font-bold text-3xl md:text-6xl">
            Contact Us
        </h1>
    </div>
</template>

<script setup lang="ts">
onMounted(()=>{
    useCurrentpathStore().path=useRoute().path
})
</script>
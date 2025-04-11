<template>
    <div>Login</div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'adminlayout'
})

onMounted(()=>{
    useCurrentpathStore().path=useRoute().path
    console.log(useCurrentpathStore().path)
})
</script>
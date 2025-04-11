<template>
    <div>Donations</div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'adminlayout'
})

onMounted(()=>{
    useCurrentpathStore().path=useRoute().path
})
</script>
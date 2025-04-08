<template>
    <div>Donate</div>
</template>

<script setup lang="ts">
onMounted(()=>{
    useCurrentpathStore().path=useRoute().path
})
</script>
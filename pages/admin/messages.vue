<template>
    <div class="md:px-20">
      <div class="flex flex-row justify-end">
        <div @click="showingMessages=1" :class="showingMessages==1 ? 'bg-secondary' : 'bg-gray-600'" class="px-3 py-2 text-white hover:cursor-pointer">All</div>
        <div @click="showingMessages=2" :class="showingMessages==2 ? 'bg-secondary' : 'bg-gray-600'" class="px-3 py-2 text-white hover:cursor-pointer">Unread</div>
        <div @click="showingMessages=3" :class="showingMessages==3 ? 'bg-secondary' : 'bg-gray-600'" class="px-3 py-2 text-white hover:cursor-pointer">Read</div>
      </div>

      <div v-for="i in 10" class="m-3 md:m-5 -z-50 bg-gray-200 shadow shadow-gray-300 p-2 relative">
        <div class="bg-gray-200 absolute top-0 right-0 flex gap-5 ps-5 mx-5 my-3">
          <input type="checkbox">
          <Icon name="material-symbols:delete" class="text-red-500 text-xl"/>
        </div>
        <p><span class="font-semibold">Name:</span> Vincent Kuria Vincent Kuria</p>
        <p><span class="font-semibold">Email:</span> <a class="underline text-blue-500" href="mailto:8pV4t@example.com">8pV4t@example.com</a></p>
        <p><span class="font-semibold">Phone:</span><a class="underline text-blue-500" href="tel:+254712051540">+254712051540</a></p>
        <p>
          <span class="font-semibold">Message:</span> Paystack Popup is a Javascript library that allow developers to build a secure and convenient payment flow for their web applications
          <span class="flex justify-self-end text-xs font-mono text-gray-500">2 march 2025</span>
        </p>
      </div>


    </div>
</template>

<script setup lang="ts">

// 1=all, 2=unread, 3=read
const showingMessages=ref(2)

definePageMeta({
  layout: 'adminlayout'
})

onMounted(()=>{
    useCurrentpathStore().path=useRoute().path
})
</script>
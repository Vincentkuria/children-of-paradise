<template>
    <div class="md:px-20">
      <div class="flex flex-row justify-end">
        <div @click="showingMessages=1; allMessages()" :class="showingMessages==1 ? 'bg-secondary' : 'bg-gray-600'" class="px-3 py-2 text-white hover:cursor-pointer">All</div>
        <div @click="showingMessages=2; unreadMessages()" :class="showingMessages==2 ? 'bg-secondary' : 'bg-gray-600'" class="px-3 py-2 text-white hover:cursor-pointer">Unread</div>
        <div @click="showingMessages=3; readMessages()" :class="showingMessages==3 ? 'bg-secondary' : 'bg-gray-600'" class="px-3 py-2 text-white hover:cursor-pointer">Read</div>
      </div>

      <div v-for="message,index in messages" class="m-3 md:m-5 bg-gray-200 shadow shadow-gray-300 p-2 relative">
        <div class="bg-gray-200 absolute top-0 right-0 flex gap-5 ps-5 mx-5 my-3">
          <input @change="updateMarkRead(message['id'],!message['markRead'])"  type="checkbox" class="hover:cursor-pointer" :checked="message['markRead']">
          <Icon @click="deleteMessage(message['id'])" name="material-symbols:delete" class="text-red-500 text-xl hover:cursor-pointer"/>
        </div>
        <p><span class="font-semibold">Name:</span>{{ message["name"] }}</p>
        <p><span class="font-semibold">Email:</span> <a class="underline text-blue-500" href="mailto:8pV4t@example.com">{{ message["email"] }}</a></p>
        <p><span class="font-semibold">Phone:</span><a class="underline text-blue-500" href="tel:+254712051540">{{ message["phone"] }}</a></p>
        <p>
          <span class="font-semibold">Message:</span> {{ message["message"] }}
          <span class="flex justify-self-end text-xs font-mono text-gray-500">{{ formatTimeAgo(message["createdAt"]) }}</span>
        </p>
      </div>


    </div>
</template>

<script setup lang="ts">

  // 1=all, 2=unread, 3=read
  let showingMessages=ref(2)
  let messages=ref([])
  const token=ref<string | null>(null)

  definePageMeta({
    layout: 'adminlayout'
  })

  onMounted(()=>{
    token.value=localStorage.getItem("token")

    if (!token.value) {
      console.log(token.value)
      navigateTo("/admin")
    }
    useCurrentpathStore().path=useRoute().path
    unreadMessages()
  })

  const allMessages=async ()=>{
    messages.value= await $fetch(useRuntimeConfig().public.baseUrl+"/messages/all",
                      {
                        method:"GET",

                        headers:{
                          Authorization: `Bearer ${token.value}`
                        },

                        onResponse({response,options}){
                          if (response.status==400 || response.status==403) {
                            navigateTo("/admin")
                          }
                        }
                      }
  )
  console.log(messages.value)
  }

  const readMessages=async ()=>{
    messages.value= await $fetch(useRuntimeConfig().public.baseUrl+"/messages/read",
                      {
                        method:"GET",

                        headers:{
                          Authorization: `Bearer ${token.value}`
                        },

                        onResponse({response,options}){
                          if (response.status==400 || response.status==403) {
                            navigateTo("/admin")
                          }
                        }
                      }
  )
  console.log(messages.value)
  }

  const unreadMessages=async ()=>{
    messages.value= await $fetch(useRuntimeConfig().public.baseUrl+"/messages/unread",
                      {
                        method:"GET",

                        headers:{
                          Authorization: `Bearer ${token.value}`
                        },

                        onResponse({response,options}){
                          if (response.status==400 || response.status==403) {
                            navigateTo("/admin")
                          }
                        }
                      }
  )
  console.log(messages.value)
  }

  const updateMarkRead=async(id:Number,isRead:Boolean)=>{
    console.log(isRead)
   const response= await $fetch(useRuntimeConfig().public.baseUrl+"/messages",
                      {
                        method:"PATCH",
                        params:{
                          "id":id,
                          "isRead":isRead
                        },

                        headers:{
                          Authorization: `Bearer ${token.value}`
                        },

                        onResponse({response,options}){
                          if (response.status==400 || response.status==403) {
                            navigateTo("/admin")
                          }
                        }
                      }
  )
  console.log(response)

  if (showingMessages.value==2) {
    unreadMessages()
  }else if(showingMessages.value==3){
    readMessages()
  }
  }

  const deleteMessage=async(id:Number)=>{
    console.log("hello")
    if (!confirm("you cant recover this message if you delete")) {
      return
    }
    const response= await $fetch(useRuntimeConfig().public.baseUrl+"/messages/"+id,
                      {
                        method:"DELETE",

                        headers:{
                          Authorization: `Bearer ${token.value}`
                        },

                        onResponse({response,options}){
                          if (response.status==400 || response.status==403) {
                            navigateTo("/admin")
                          }
                        }
                      }
  )
  console.log(response)

  if (showingMessages.value==1) {
    allMessages()
  }else if(showingMessages.value==2){
    unreadMessages()
  }else{
    readMessages()
  }

  }

  function formatTimeAgo(dateString: string) {
  const now = new Date();
  const past = new Date(dateString);
  const diffInSeconds = Math.floor((now.getTime() - past.getTime()) / 1000);

  const minutes = Math.floor(diffInSeconds / 60);
  const hours = Math.floor(diffInSeconds / 3600);
  const days = Math.floor(diffInSeconds / 86400);

  if (days >= 5) {
    // If more than 5 days, show the full date
    return past.toLocaleDateString(); 
  } else if (days >= 1) {
    return `${days} day${days > 1 ? 's' : ''} ago`;
  } else if (hours >= 1) {
    return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  } else if (minutes >= 1) {
    return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  } else {
    return 'Just now';
  }
}

</script>
<template>
    <div class="md:px-20">
      <div class="flex flex-row justify-end">
        <USlideover
        :close="false"
        v-model:open="open"
        >
          <div class="px-3 py-2 bg-secondary text-white hover:cursor-pointer">Add to gallery</div>
          <template #content>
          <div class="h-full w-full bg-[#D9D9D9] p-4">
            <form @submit.prevent="UploadImage()" v-if="!uploadSuccessfully" class="flex flex-col justify-around m-0">
              <NuxtImg v-if="imageUrl"  :src="imageUrl" class="min-w-[70%] max-w-[90%] h-[50dvh] my-5 flex self-center object-contain "/>
              <input @change="onFileChange" class="hidden" type="file" ref="galleryImage" accept="image/*">
              <div @click="galleryImage?.click()" class="px-3 w-fit py-2 bg-primary text-white flex self-center hover:cursor-pointer">Choose image</div>
              <div class="flex flex-col my-3">
                            <label class="" for="title">Title/Description</label>
                            <textarea class="bg-gray-100 p-2 border-primary" placeholder="short title or description" v-model="title" id="title" required/>
                            <p :class="title.length>255 ?'text-red-500':'text-gray-700'" class="text-xs text-gray-700 text-end">{{ title.length }} /255</p>
                        </div>
              <div class="flex justify-around flex-row">
                <button type="submit" class="px-3 py-2 bg-secondary text-white hover:cursor-pointer">Upload</button>
                <div @click="closeSlideOver()" class="px-3 py-2 bg-secondary text-white hover:cursor-pointer">Close</div>
              </div>
              <p v-if="title.length>255" class="text-red-500">the title/description is too long</p>
            </form>

            <div v-else>
              <div class="w-full h-fit flex justify-center ">
                <Icon name="material-symbols:check-circle-rounded" class="text-6xl text-green-400 m-5"/>
              </div>

                <p class="justify-center text-green-400 font-bold text-4xl text-center">Image uploaded successfully</p>

              <div class="flex justify-around flex-row my-10">
                <div @click="uploadSuccessfully=false" class="px-3 py-2 bg-secondary text-white hover:cursor-pointer">Upload another image</div>
                <div @click="closeSlideOver()" class="px-3 py-2 bg-secondary text-white hover:cursor-pointer">Close</div>
              </div>
              
            </div>
          </div>
            
          </template>
        </USlideover>
        
      </div> <m-2></m-2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
      <div v-for="image,index in images" class="p-2 relative h-30 md:p-5 flex flex-row bg-gray-200 shadow shadow-gray-300 m-3 md:m-5 items-center">
        <NuxtImg :src="useRuntimeConfig().public.baseUrl+'/'+ image['image']" class="w-[8rem] h-24 object-contain m-2"/>
        <p class="justify-center overflow-hidden object-center overflow-y-scroll h-24 w-92 mx-4 ">{{ image['title'] }}</p>
        <p class="w-52 text-center justify-center">{{ formatTimeAgo(image['createdAt']) }}</p>
        <Icon @click="deleteGalleryImage(image['id'])" name="material-symbols:delete" class="text-red-500 text-xl absolute top-0 right-0 hover:cursor-pointer"/>
      </div>
      </div>
    </div>
</template>

<script setup lang="ts">
let open=ref(false)
const galleryImage=ref<HTMLInputElement | null>(null)
const imageUrl=ref('')
const images=ref([])
const token=ref<string | null>(null)
let selectedFile=ref<Blob|null>(null)
let title=ref('')
let uploadSuccessfully=ref(false)

definePageMeta({
  layout: 'adminlayout'
})

onMounted(()=>{
    token.value=localStorage.getItem("token")

    if (!token.value) {
      navigateTo("/admin")
    }

    useCurrentpathStore().path=useRoute().path
    allGalleryImages()
})

const onFileChange=(e:any)=>{
    selectedFile.value=e.target.files[0]
    if (selectedFile.value==null) return;
    const reader=new FileReader()
    reader.onload=()=>{
        imageUrl.value=reader.result as string
    }
    reader.readAsDataURL(selectedFile.value)
    
}

const closeSlideOver=()=>{
  open.value=false
  uploadSuccessfully.value=false
  selectedFile.value=null
  title.value=''
  imageUrl.value=''
}

const allGalleryImages= async()=>{
  images.value=await $fetch(useRuntimeConfig().public.baseUrl+"/gallery",{
                                method: 'GET',
                                headers:{
                                  Authorization: `Bearer ${token.value}`
                                },
                              })

                              console.log(images.value)
}

const deleteGalleryImage= async(id:Number)=>{
  if (!confirm("if you delete this image cant be recovered")) {
    return
  }
const response=await $fetch(useRuntimeConfig().public.baseUrl+"/gallery/"+id,{
                                method: 'DELETE',
                                headers:{
                                  Authorization: `Bearer ${token.value}`
                                },
                              })
                              console.log(response)
                              allGalleryImages()
}

const UploadImage= async()=>{
  if (selectedFile.value==null || title.value.length>255 || title.value.trim()=='') return;

  const formData=new FormData()
  formData.append("image",selectedFile.value)
  formData.append("title",title.value)

  const response=await $fetch(useRuntimeConfig().public.baseUrl+"/gallery",{
    method:"POST",
    headers:{
                                  Authorization: `Bearer ${token.value}`
                                },
    body:formData
  })

  console.log(response)

  uploadSuccessfully.value=true
  allGalleryImages()
  selectedFile.value=null
  title.value=''
  imageUrl.value=''
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
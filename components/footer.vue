<template>
  <div class="w-full bg-[#000013] flex flex-wrap gap-2 md:justify-around text-white mt-10">
      <div class="p-10 flex flex-col items-center">
          <NuxtImg src="/Logo.png" format="webp" alt="logo" class="w-32 bg-white" />
          <h1 class="text-center text-primary font-bold text-4xl">Mama Clare<br> Orphans and Widows</h1>
      </div>

      
      
      <div class="p-5 flex flex-col gap-2">
          <h1 class="font-bold text-primary  text-xl">Contact Info</h1>
          <a href="tel:+254706305517">+254 706 305517</a>
          <a href="tel:+254791810653">+254 791 810653</a>
          <a href="tel:+201098454323">+20 109 845 4323</a>
          <a href="mailto:info@mamaclare.org">info@mamaclare.org</a>
          <a>PO BOX 4463-00200 Nairobi</a>
      </div>

      <div class="p-5 flex flex-col gap-2">
      <h1 class="font-bold text-primary text-xl">Links</h1>
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/about">About us</NuxtLink>
      <NuxtLink to="/gallery">Gallery</NuxtLink>
      <NuxtLink to="/contact">Contact us</NuxtLink>
      <NuxtLink to="/donate">Donate</NuxtLink>
      <NuxtLink to="/admin">Admin</NuxtLink>
      </div>

      
      <div class="p-5 flex flex-col gap-2">
          <h1 class="font-bold text-primary text-xl">Socials</h1>
          <a href="https://www.linkedin.com">linkedin</a>
          <a href="https://x.com">X(Twitter)</a>
      </div>

      <div class="p-5 flex flex-col gap-2">
          <h1 class="font-bold text-primary text-xl">Address</h1>
          Kayole Junction, Nairobi.<br>100m from Obama office
      </div>


  </div>
  
    <div class="bg-black flex flex-wrap justify-around text-zinc-400">
        <span class="text-center text-zinc-400">© {{year}} Mama Clare Orphans and Widows. All rights reserved.</span>
        <span class="group">
            <div class="relative w-full">
            <a class="w-full" target="_blank" href="https://www.vinteque.com">
                <div class="absolute hidden group-hover:block bottom-0 bg-white p-3 rounded text-zinc-900">
                <div class="flex items-center w-full flex-row">
                    <NuxtImg format="webp" src="https://www.vinteque.com/vinteque.png" class="w-1/5"/>
                    <span class="font-berlin text-2xl pl-5 font-bold">Vinteque software developers</span>
                </div>
                
                <p>Vinteque is one of the best software development company in Kenya.</p>
                <p><span class="font-bold">contact us:</span> +254712051540</p>
            </div>
            </a>
            
        </div>Developed and Mentained by <a class="underline" target="_blank" href="https://www.vinteque.com">Vinteque software developers</a></span>
    </div>
</template>

<script setup lang="ts">
const year=new Date().getFullYear()
</script>
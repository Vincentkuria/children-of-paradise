<template>
  <div class="w-full bg-[#000013] flex flex-wrap text-white mt-10 justify-around">
      <div class="p-10 flex flex-col items-center">
          <NuxtImg src="/Logo.png" format="webp" alt="logo" class="w-50 bg-white" />
          <h1 class="text-center text-primary font-bold text-4xl">Children Of Paradise<br/>Orphanage Home</h1>
      </div>

      <div class="p-10 flex flex-col items-center justify-around">
      <h1 class="font-bold text-primary text-center text-xl">Links</h1>
      <NuxtLink to="/" class="my-5 text-center">Home</NuxtLink>
      <NuxtLink to="/about" class="my-5 text-center">About us</NuxtLink>
      <NuxtLink to="/gallery" class="my-5 text-center">Gallery</NuxtLink>
      <NuxtLink to="/contact" class="my-5 text-center">Contact us</NuxtLink>
      <NuxtLink to="/donate" class="my-5 text-center">Donate</NuxtLink>
      </div>
      
      <div class="p-10 flex flex-col items-center justify-around">
          <h1 class="font-bold text-primary text-center text-xl">Contact Info</h1>
          <a href="tel:+254712345678" class="my-5 text-center">+254712345678</a>
          <a href="mailto:info@pawawomen.org" class="my-5 text-center">email</a>
          <a>PO BOX</a>
      </div>

      <div class="p-10 flex flex-col items-center justify-around">
          <h1 class="font-bold text-primary text-center text-xl">Socials</h1>
          <a href="https://www.linkedin.com" class="my-5 text-center">linkedin</a>
          <a href="https://x.com" class="my-5 text-center">X(Twitter)</a>
      </div>


  </div>
      <div class="bg-black flex justify-around text-zinc-400">
        <!-- TODO make year auto update -->
      <span class="text-center text-zinc-400">© 2025 Children Of Paradise Orphanage. All rights reserved.</span>
      <span class="group">
          <div class="relative w-full">
          <a class="w-full" target="_blank" href="https://www.vinteque.com">
              <div class="absolute hidden group-hover:block bottom-0 bg-white p-3 rounded text-zinc-900">
              <div class="flex items-center w-full flex-row">
                  <NuxtImg format="webp" src="https://www.vinteque.com/vinteque.png" class="w-1/5"/>
                  <span class="font-berlin text-2xl pl-5 font-bold">Vinteque software developers</span>
              </div>
              
              <P>Vinteque is one of the best software development company in Kenya.</P>
              <P><span class="font-bold">contact us:</span> +254712051540</P>
          </div>
          </a>
          
      </div>this website was developed by <a class="underline" target="_blank" href="https://www.vinteque.com">Vinteque software developers</a></span>
  </div>
</template>
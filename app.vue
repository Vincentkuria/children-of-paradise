<script setup lang="ts">
import { UApp } from '#components';

useHead({
  titleTemplate:'MamaClare | %s',
  link:[
  {
    rel:'icon', type:'image/png',href:'/logo.png'
  },
  {
    rel:'canonical',href:'https://mamaclare.org'
  }
  ],
  htmlAttrs:{
    lang:'en'
  },
  script:[
     {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(
        {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Mama Clare Orphans and Widows",
        "url": "https://mamaclare.org",
        "logo": "https://mamaclare.org/Logo.png",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+254706305517",
          "contactType": "Customer Service",
          "email": "info@mamaclare.org"
        },
        "address": {
        "@type": "PostalAddress",
        "addressLocality": "Nairobi",
        "addressCountry": "KE"
        },
        "description": "Mama Clare Orphans and Widows is more than just a shelter, it is a home, a family, and a place of healing for children who have faced some of life’s harshest realities. Located in Kayole Junction, Nairobi, Kenya."
      }
      )
    },
  ],

})

useSeoMeta({
  ogTitle: 'Mama Clare Orphans and Widows',
  ogDescription: "We bring hope by rescuing orphaned and abandoned children",
  ogImage: '/Logo.png',
})

</script>

<template>
  <div>
    
    <UApp>
      <NuxtLayout>
        <NuxtPage/>
      </NuxtLayout>
    </UApp>
    
  </div>
</template>

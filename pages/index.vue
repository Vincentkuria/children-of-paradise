<template>
    <div>
        <h1 class="text-primary text-center p-4 md:px-20 md:mt-10 font-bold text-3xl md:text-6xl">
            <span class="text-black">At Children Of Paradise Orphanage-</span>
            We bring hope <span class="text-secondary"> by </span> rescuing orphaned <span class="text-secondary">and</span> abandoned children
        </h1>

        <div class="mb-10 relative">

            <div class="z-10 absolute top-1/5 left-1/2 transform -translate-x-1/2 -translate-y-1/5 flex flex-col items-center justify-center m-5 text-white">
                <div class=" text-primary text-center font-playwrite py-5 px-10 text-4xl">help us help</div>
                <div class="bg-secondary py-5 px-10 text-xl"><NuxtLink to="/donate">Donate</NuxtLink></div>
            </div>


            <div>
                <UCarousel v-slot="{ item }" :items="items" auto-scroll loop wheel-gestures class="w-fit">
                    <img :src="item" class="object-cover w-[100dvw] h-[70dvh]" />
                </UCarousel>
                
            </div>

        </div>

        <div>
            <div class="flex flex-wrap gap-3 justify-around">
                <div class="bg-primary text-white w-32 h-32 flex flex-col justify-center items-center ">
                    <h1 class="font-bold text-4xl text-center">{{university+'+'}}</h1>
                    <p class="text-center">University students</p>
                </div>

                <div class="bg-secondary text-white w-32 h-32 flex flex-col justify-center items-center ">
                    <h1 class="font-bold text-4xl text-center">{{highSchool+'+'}}</h1>
                    <p class="text-center">High school 
                        students</p>
                </div>

                <div class="bg-primary text-white w-32 h-32 flex flex-col justify-center items-center ">
                    <h1 class="font-bold text-4xl text-center">{{ primary+'+' }}</h1>
                    <p class="text-center">Primary<br/>
                        students</p>
                </div>

                <div class="bg-secondary text-white w-32 h-32 flex flex-col justify-center items-center ">
                    <h1 class="font-bold text-4xl text-center">{{ preSchool+'+' }}</h1>
                    <p class="text-center">Pre-school<br/>kid
                    </p>
                </div>
            </div>

            <p class="text-center text-secondary flex justify-self-center md:w-[50%] p-10">
                We help over 100 homeless, orphaned and abandoned children access 
education shelter and food through out Kenya
            </p>

            <div class="px-10 text-center md:text-left md:px-20 md:text-xl">
                <h1 class="text-3xl text-secondary font-bold pb-4">About Us</h1>
                <NuxtImg src="aboutus-pic.jpg" class="w-full min-h-[40dvh] object-cover md:w-[50%] float-left md:mr-10 mb-5 md:mb-2"/>
                <span>Children of Paradise Orphanage Home is a sanctuary for vulnerable children, located in Kayole Junction, Nairobi, Kenya. Founded in 2013 by Clara Zawadi with a simple yet powerful vision to give every child a place to call home. What started as a small act of kindness has grown into a safe haven for children who have nowhere else to turn.
Many of the children in our care have faced heartbreaking circumstances, some abandoned by their parents, others left orphaned by tragedy, and many displaced by fires or other calamities. But here, they find more than just shelter. They find love, family, and a chance to dream again.
Beyond providing food, clothing, and a roof over their heads, we are committed to giving these children a future. Through education, mentorship, and emotional support, we nurture their potential and help them rebuild their lives with dignity and hope. <span class="text-secondary text-nowrap"><NuxtLink to="/about">Read more ...</NuxtLink></span>
            </span>
            </div>

            <div class="px-10 py-5 my-5 md:text-left md:px-20 md:text-xl bg-primary text-white">
                <h1 class="text-3xl text-secondary text-center font-bold pb-4">A World Where Every Child Has a <br/>
                    Safe and Loving Home
                </h1>
                
                <div class="flex flex-col-reverse md:flex-row">
                No child should have to face the world alone. Yet, thousands of children lack the warmth of a home, the security of a bed, and the love of a family. At Children Of Paradise Orphanage, we believe every child deserves a place to call home, a safe haven where they can grow, learn, and dream.
But we can’t do it alone. Your support provides shelter, food, education, and care to these vulnerable children, giving them a future filled with hope.<br/>
<br/>
Join us in making a difference. Your donation today can be the reason a child sleeps peacefully tonight, knowing they are loved and protected. 
                    <NuxtImg src="aboutus-pic2.jpg" class="animate__animated animate__backOutUp max-h-[50dvh] object-cover w-full md:mr-10 mb-5 md:mb-2"/>
                </div>

                <div class="flex items-center justify-center m-5">
                    <div class="bg-secondary py-5 px-10 text-xl"><NuxtLink to="/donate">Donate</NuxtLink></div>
                </div>
            </div>

            <div>
                <h1 class="text-3xl text-secondary text-center font-bold pb-4">
                    Our Causes
                </h1>

                <p class="text-center text-secondary flex justify-self-center md:w-[50%]">
                    Your donation will directly support the following initiatives, helping us create a brighter and more stable future for the children in our care.
            </p>

                <div class="flex flex-wrap gap-4 justify-around">

                    <div class="w-96 h-auto">
                        <NuxtImg src="school.jpg"/>
                        <h1 class="font-bold text-center text-2xl">Construct a School</h1>
                        <p class="bg-secondary text-white p-10">
                            Education is a powerful tool for change. We aim to build a school within the orphanage, providing quality education tailored to the unique needs of our children, ensuring they have a solid foundation for a better future.
                        </p>
                    </div>

                    <div class="w-96 h-auto">
                        <NuxtImg src="house.jpg"/>
                        <h1 class="font-bold text-center text-2xl">Build a Permanent Shelter</h1>
                        <p class="bg-secondary text-white p-10">
                            We currently operate in a rented space, which limits our ability to provide long-term stability. Your support will help us build a permanent home where the children can grow up in a safe, loving, and nurturing environment.
                        </p>
                    </div>

                    <div class="w-96 h-auto">
                        <NuxtImg src="school.jpg"/>
                        <h1 class="font-bold text-center text-2xl">Pay School Fees & Provide Learning Materials</h1>
                        <p class="bg-secondary text-white p-10">
                            Many of our children attend external schools, and ensuring they have access to quality education is a constant challenge. Your donations will help cover tuition fees, books, uniforms, and other essential learning materials.
                        </p>
                    </div>

                    <div class="w-96 h-auto">
                        <NuxtImg src="food.jpg"/>
                        <h1 class="font-bold text-center text-2xl">Provide Food & Nutrition</h1>
                        <p class="bg-secondary text-white p-10">
                            A well-balanced meal is essential for a child’s growth and development. Your support will help us provide daily nutritious meals, ensuring that no child in our care goes to bed hungry.
                        </p>
                    </div>

                    <div class="w-96 h-auto">
                        <NuxtImg src="medical.jpg"/>
                        <h1 class="font-bold text-center text-2xl">Medical Care & Health Support</h1>
                        <p class="bg-secondary text-white p-10">
                            Healthcare is a basic necessity, yet many orphaned children lack access to proper medical treatment. Your contributions will help us provide regular medical check-ups, vaccinations, emergency care, and mental health support for the children.
                        </p>
                    </div>

                    <div class="w-96 h-auto">
                        <NuxtImg src="clothing.jpg"/>
                        <h1 class="font-bold text-center text-2xl">Clothing & Basic Necessities</h1>
                        <p class="bg-secondary text-white p-10">
                            Many children arrive at our orphanage with little more than the clothes on their backs. Your donations will help provide proper clothing, shoes, bedding, hygiene products, and other essentials to ensure they live with dignity and comfort.
                        </p>
                    </div>

                </div>

            </div>

            <div class="flex flex-wrap bg-primary justify-self-center items-center px-10 py-5 m-5 text-white">
                <p class="text-4xl font-bold">
                    Every contribution makes a difference. Join us in giving these children hope, love, and a future full of possibilities
                </p>

                <div class="flex items-center justify-center m-5">
                    <div class="bg-secondary py-5 px-10 text-xl"><NuxtLink to="/donate">Donate Today</NuxtLink></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

const items=<string[]>[
    "heropics/1.jpg",
    "heropics/2.jpg",
    "heropics/3.jpg",
    "heropics/4.jpg",
    "heropics/5.jpg",
    "heropics/6.jpg",
    "heropics/7.jpg",
    "heropics/8.jpg",
    "heropics/9.jpg",
    "heropics/10.jpg",
    "heropics/11.jpg",
    "heropics/12.jpg",
    "heropics/13.jpg",
    "heropics/14.jpg",
    "heropics/15.jpg",
    "heropics/16.jpg",
    "heropics/17.jpg",
    "heropics/18.jpg",
    "heropics/19.jpg",
    "heropics/20.jpg",

]

const university=ref(0)
const highSchool=ref(0)
const primary=ref(0)
const preSchool=ref(0)

onMounted(()=>{
    useCurrentpathStore().path=useRoute().path
    startCounter()
})

const startCounter = () => {
  const totalUniversity = ref(41);
  const totalhighSchool = ref(61);
  const totalprimary = ref(30);
  const totalpreSchool = ref(12);
  const time = 6000;

  const universityInterval = setInterval(() => {
    if (university.value <totalUniversity.value) {
      university.value++;
    } else {
      clearInterval(universityInterval);
    }
  }, time/totalUniversity.value);

  const highSchoolInterval = setInterval(() => {
    if (highSchool.value < totalhighSchool.value) {
      highSchool.value++;
    } else {
      clearInterval(highSchoolInterval);
    }
  }, time/totalhighSchool.value);

  const primaryInterval = setInterval(() => {
    if (primary.value < totalprimary.value) {
      primary.value++;
    } else {
      clearInterval(primaryInterval);
    }
  }, time/totalprimary.value);

  const preSchoolInterval = setInterval(() => {
    if (preSchool.value < totalpreSchool.value) {
      preSchool.value++;
    } else {
      clearInterval(preSchoolInterval);
    }
  }, time/totalpreSchool.value);
};


</script>
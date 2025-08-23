<template>
    <div>
        <h1 class="text-primary text-center p-4 md:px-20 md:mt-10 font-bold text-3xl md:text-6xl">
            <span class="text-secondary">About</span><br/> Mama Clare Orphans and Widows
        </h1>
        <NuxtImg format="webp" src="/Logo.png" class="h-[30dvh] md:h-[40dvh] flex justify-self-center p-2" />

        <p class="px-5 md:px-20 pb-5">
            Mama Clare Orphans and Widows is more than just a shelter, it is a home, a family, and a place of healing for children who have faced some of life’s harshest realities. Located in Kayole Junction, Nairobi, Kenya, we were founded in 2013 by Clara Zawadi, a compassionate woman whose heart was moved by the suffering of abandoned and orphaned children in her community.

Clara started with very little, just a rented space, a few borrowed resources, and a big dream. She opened her doors to children with nowhere to go, little ones who had been left behind, orphaned by tragedy, or displaced by natural disasters like fires. Over time, the number grew. Today, we care for over 100 children, each with their own story, each seeking love, care, and a future.

In 2022, we were officially registered as a Charitable Children’s Institution (CCI), a milestone that reaffirmed our commitment to transparency, accountability, and excellence in caregiving
        </p>
        

        <div class="px-5 md:px-20 py-5 bg-amber-100">
            <h2 class="text-primary font-bold text-3xl md:text-3xl">
                Our Mission <span class="text-secondary">&</span> Vision
            </h2>

            <h3 class="text-secondary py-2 font-bold text-3xl md:text-2xl">
                Mission
            </h3>
            <p>
                To provide abandoned and vulnerable children with a safe, nurturing environment where they receive the love, education, spiritual guidance, and life skills they need to grow into empowered, responsible adults.
            </p>

            <h3 class="text-secondary py-2 font-bold text-3xl md:text-2xl">
                Vision
            </h3>
            <p>
                To create a world where every vulnerable child is loved, protected, and empowered, where no child is left behind, and every child has the opportunity to grow in a safe, nurturing environment and fulfill their God-given potential.
            </p>


        </div>

        <div class="px-5 md:px-20 py-5 ">
            <h2 class="text-primary font-bold text-3xl md:text-3xl">
                What We Do
            </h2>
            <ul>
                <li><span class="text-secondary font-semibold">Shelter & Safety:</span> A secure and stable home for every child we receive.</li>
                <li><span class="text-secondary font-semibold">Food & Nutrition:</span> Balanced meals that promote healthy development.</li>
                <li><span class="text-secondary font-semibold">Education:</span> Access to schooling and learning materials to build a strong academic foundation.</li>
                <li><span class="text-secondary font-semibold">Emotional & Spiritual Support:</span> Counseling, mentorship, and spiritual care to help children heal and grow.</li>
                <li><span class="text-secondary font-semibold">Clothing & Essentials:</span> Clean clothes, hygiene supplies, and other daily necessities.</li>
                <li><span class="text-secondary font-semibold">Skills & Empowerment:</span> As children grow, we offer vocational training and life skills to prepare them for the future.</li>
            </ul>

        </div>

        <div class="px-5 md:px-20 py-5 bg-amber-100 ">
            <h2 class="text-primary font-bold text-3xl md:text-3xl">
                How we get our children
            </h2>
            Our children come to us through various heartbreaking circumstances. Some are:
            <ul class="italic p-5">
                <li>Abandoned by parents due to poverty, addiction, or other social challenges</li>
                <li>Left homeless after disasters like fire or flood</li>
                <li>Rescued from neglect or abuse</li>
                <li>Orphaned by the loss of parents</li>
            </ul>
            We work closely with community leaders, churches, well-wishers, and local authorities to identify and rescue children in need, giving them a second chance at life.
        </div>

        <div class="px-5 md:px-20 py-5 ">
            <h2 class="text-primary font-bold text-3xl md:text-3xl">
                How You Can Help
            </h2>
            We believe that no dream is too big when we come together. But we can’t do it alone. Your support, whether through donations, volunteering, or sharing our story, can change lives. Every shilling, every act of kindness, is a seed of hope planted in a child’s future.

        </div>

        <div class="px-5 md:px-20 py-5 bg-amber-100 ">
            <h2 class="text-primary font-bold text-3xl md:text-3xl">
                Join Us
            </h2>
            Together, we can create a world where no child sleeps on the street, where every child is known, loved, and empowered to thrive.
            <div class="bg-secondary py-3 px-6 text-xl w-fit text-white"><NuxtLink to="/donate">Donate Today</NuxtLink></div>
            <br>
            Contact us for volunteering<br><br> <span class="bg-primary text-nowrap py-3 px-5 w-fit text-white"><NuxtLink to="/contact">Contact Us</NuxtLink></span><br/>
            <br>
            Thank you for believing in their future.

        </div>

    </div>
</template>

<script setup lang="ts">
onMounted(()=>{
    useCurrentpathStore().path=useRoute().path
})
</script>
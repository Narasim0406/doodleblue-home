<template>
    <div class="contact-us wow fadeInRight">
        <nuxt-link class="link" :to="{name: 'contactus'}">
            <img class="d-none d-lg-block web" src="@/assets/images/contact/contact_web.png" alt="Contact">
            <img class="d-lg-none mobile" src="@/assets/images/contact/contact_mobile.png" alt="Contact">
        </nuxt-link>
    </div>
</template>

<style scoped>
.contact-us{
    position: fixed;
    right: 1rem;
    bottom: 1rem;
    z-index: 10;
    transition: all 0.3s;
}
.contact-us img.web{
    width: 8rem;
}
.contact-us img.mobile{
    width: 3rem;
}
</style>
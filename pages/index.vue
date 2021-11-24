<template>
<<<<<<< HEAD
       <div class="main px-4 md:px-32">
              <Footer />
       </div>
=======
  <div class="main px-32">
    <div class="flex items-center">
      <h6 class="text-lg font-sans font-medium pb-4">Tentang Kami</h6>
      &nbsp;&nbsp;
      <hr width="100px" color="white" class="-mt-3" />
    </div>
    <div>
      <h3 class="text-5xl pt-1.5 pb-16">
        Kami selalu mengedepankan kepuasan para partner kami demi menghasilkan
        sebuah produk yang diinginkan
      </h3>
      <Twoacc />
      <img class="pb-6" src="../static/images/maskImage.svg" alt="" />
    </div>
    <Accessories />
    <Footer />
  </div>
>>>>>>> 99c3f2a10288fc4ae9c0e5d9e09cd3e0a88a92ec
</template>

<script>
import Twoacc from "~/components/Twoacc.vue";
export default {
  components: { Twoacc },
};
</script>

<style>
* {
  font-family: "Poppins", sans-serif;
  box-sizing: border-box;
  margin: 0;
  scroll-behavior: smooth;
}

.main {
  max-width: 1440px;
}
</style>

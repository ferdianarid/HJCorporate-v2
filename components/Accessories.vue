<template>
  <div class="acc flex ml-20">
    <div class="flex items-center">
      <img class="pl-7" src="../static/images/iconPeople.svg" alt="" />
    </div>
    <div class="flex flex-col justify-start pl-4">
      <h3 class="font-semibold text-3xl pt-6">20 +</h3>
      <h3 class="font-medium">Anggota tim</h3>
    </div>
  </div>
</template>

<script>
export default {
  nama: "Accessories",
};
</script>

<style>
.acc {
  margin-top: -80px;
  width: 245px;
  height: 114px;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 0px 30px 60px rgba(32, 56, 85, 0.15);
  backdrop-filter: blur(16px);
  border-radius: 8px;
  z-index: 2;
  position: absolute;
}
</style>

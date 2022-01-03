<template>
  <div>
    <div class="second-glass-card glass-card flex ml-80 h-28 absolute rounded-lg">
      <div class="flex items-center">
        <img class="pl-7" src="../static/images/iconPeople.svg" alt="" />
      </div>
      <div class="flex flex-col justify-start pl-4">
        <h3 class="font-semibold text-3xl pt-6">22 +</h3>
        <h3 class="font-medium">Anggota tim terbaik</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  nama: "SecondGlass",
};
</script>

<style>
.second-glass-card {
  left: -8rem;
  margin-top: -92px;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 0px 30px 60px rgba(32, 56, 85, 0.15);
  backdrop-filter: blur(16px);
  z-index: 2;
  width: 20rem;
}

@media screen and (max-width: 768px) {
  .second-glass-card {
    left: -18rem;
    margin-top: -108px;
  }
}
</style>

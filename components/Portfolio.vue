<template>
  <div class="portfolio flex my-14">
    <div class="card-images">
      <img src="../static/images/imageCard.svg" alt="" />
    </div>
    <div class="p-4">
      <h4 class="font-semibold text-4xl tracking-wide pb-4">
        Redesign Landing Pages Kantor Pemerintahan Gubernur Jateng
      </h4>
      <p class="text-partner text-base tracking-wide font-regular">
        Beberapa waktu lalu kami berkesempatan untuk mengerjakan sebuah projek
        untuk melakukan pembaruan tampilan Landing Pages pada website
        pemerintahan gubernur Jawa Tengah...
      </p>
      <div class="flex gap-x-2 mt-2">
        <div
          class="
            bg-white
            text-gray-800
            font-semibold
            py-2
            px-4
            rounded-3xl
            shadow
          "
        >
          UI/UX Design
        </div>
        <div
          class="
            bg-white
            text-gray-800
            font-semibold
            py-2
            px-4
            rounded-3xl
            shadow
          "
        >
          Web Development
        </div>
        <div
          class="
            bg-white
            text-gray-800
            font-semibold
            py-2
            px-4
            rounded-3xl
            shadow
          "
        >
          Illustration
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Portfolio",
};
</script>

<style>
.portfolio {
  width: 1097px;
  background-color: aqua;
}
.portfolio .card {
  width: 481px;
  height: 400px;
  background-color: chartreuse;
}
.portfolio .card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>

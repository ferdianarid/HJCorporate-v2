<template>
<div>
  <div class="carousel-container rounded-lg mt-4 ">
    <transition-group class='carousels' tag="div">
      <div v-for="slide in slides" class='sliders flex md:flex-row flex-col bg-white my-10' :key="slide.id">
        <img class="h-[250px] w-full md:w-[300px]" :src="slide.img" />
        <div class="md:p-6 pt-6 px-0 md:pt-2">
          <h1 class="text-[32px] font-bold">
          {{slide.title}}
          </h1>
          <p class="text-[16px] text-gray-800 pt-6">Beberapa waktu lalu kami berkesempatan untuk mengerjakan sebuah projek untuk melakukan pembaruan tampilan Landing Pages pada website pemerintahan gubernur Jawa Tengah...</p>
          <!-- badge -->
          <div class="mt-6 flex items-center gap-x-4">
            <div class="flex">
              <div class="badge px-4 py-2 rounded-full bg-[#daf4ff] border-none">
                <p class="text-[#1189B8] text-sm font-bold">
                UI/UX Design
                </p>
              </div>
            </div>
            <div class="flex">
              <div class="badge px-4 py-2 rounded-full bg-[#daf4ff] border-none">
                <p class="text-[#1189B8] text-sm font-bold">
                Web Development
                </p>
              </div>
            </div>
            <div class="flex">
              <div class="badge px-4 py-2 rounded-full bg-[#daf4ff] border-none">
                <p class="text-[#1189B8] text-sm font-bold">
                Illustration
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition-group>
    <div class='carousel-controls'>
      <button class='carousel-controls__button' @click="previous">&#60;</button>
      <button class='carousel-controls__button' @click="next">&#62;</button>
    </div>
  </div>
  </div>
</template>

<script>
  export default {
    name: "CorouselDua",
    data(){
      return{

      
    slides: [
        {
          title: 'Redesign Landing Pages Kantor Pemerintahan Gubernur Jateng',
        img: require("../static/images/graph.jpg"),
        id: 1
      },
      {
          title: 'Tampilan Dashboard Pendidikan Unik Tingkat SD',
        img: require("../static/images/webui2.png"),
        id: 2
      },
      {
          title: 'Web Kesehatan Untuk Bidang Farmasi Indonesia',
        img: require("../static/images/webui3.jpg"),
        id: 3
      },
      {
          title: 'Redesign Dashboard Perusahaan Invoice',
        img: require("../static/images/webui4.png"),
        id: 4
      },
      {
          title: 'Website Tentang Pengelolaan Task Harian',
        img: require("../static/images/webui5.webp"),
        id: 5
      }
    ]
    }
  },
  methods: {
      next() {
        const first = this.slides.shift();
      this.slides = this.slides.concat(first);
    },
      previous() {
        const last = this.slides.pop();
      this.slides = [last].concat(this.slides);
    }
  }
  };

</script>

<style>
  .carousels {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 12px;
}

.sliders {
  flex: 0 0 100%;
  display: flex;
  justify-content: center;
  transition: all .3s;
}

.carousel-controls__button {
  cursor: pointer;
  background: #187C79;
  border: 0;
  color: #fff;
  border-radius: 3px;
  padding: 5px 10px;
  font-size: 18px;
}

  .Photo {
    background-image: url("../static/images/graph.jpg");
    background-size: cover;
  }

</style>
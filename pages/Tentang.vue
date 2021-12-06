<template>
  <div>
    <div class="main px-6 md:px-32">
      <Navbar />
      <div class="grid md:grid-cols-2 gap-x-32 pt-20">
        <div class="md:text-6xl text-[40px] tracking-wide">
          <h2 class="pr-5 font-semibold">
            <span class="text-about">Tentang</span> kami HJ Corporate
          </h2>
        </div>
        <div
          class="
            text-detail
            md:pt-0
            pt-6
            tracking-wide
            leading-6
            text-base text-left
            font-semibold
          "
        >
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <p class="pt-3">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
      </div>
      <div class="grid md:grid-cols-3 grid-cols-1 md:gap-x-8">
        <div>
          <img class="pt-20" src="../static/images/imgHeaderOne.svg" alt="" />
        </div>
        <div>
          <img
            class="md:pt-52 pt-10 w-full"
            src="../static/images/imgHeaderTwo.svg"
            alt=""
          />
        </div>
        <div>
          <img
            class="md:pt-36 pt-10 w-full"
            src="../static/images/imgHeaderThree.svg"
            alt=""
          />
        </div>
      </div>

      <div class="grid md:grid-cols-2 grid-cols-1 md:py-20 md:gap-x-24">
        <div>
          <VisiMisi />
        </div>
        <div class="imgVisi md:pt-0 pt-20">
          <img src="../static/images/imgVision.svg" alt="" />
        </div>
      </div>
      <!-- Member -->
      <div
        class="grupMember md:max-w-[526px] max-w-none md:mx-auto md:pt-0 pt-20"
      >
        <div class="md:text-center text-left">
          <h6 class="text-member text-lg font-semibold uppercase pb-4">
            Member Kami
          </h6>
          <h3 class="md:text-5xl text-3xl font-semibold pb-4">
            Anggota Terbaik Kami
          </h3>
          <p class="text-us md:text-lg text-base leading-7 font-medium">
            Kami bekerja dengan orang-orang paling berbakat dari setiap bidang.
            Percayakan setiap projek anda kepada setiap ahli pada tim kami
          </p>
        </div>
      </div>
      <div class="flex pt-20 grid md:grid-cols-4 grid-cols-1 gap-x-8">
        <div class="">
          <div
            class="
              text-white
              buttonImages
              flex
              items-center
              rounded-xl
              gap-x-4
              mb-4
              bg-green-700
            "
          >
            <div>
              <img
                class="imgSetting pl-6"
                src="../static/images/imgFounder.svg"
                alt=""
              />
            </div>
            <div>
              <h3>Founders</h3>
            </div>
          </div>
          <div
            class="
              buttonImages
              border border-gray-700
              flex
              items-center
              rounded-xl
              gap-x-4
              mb-4
              text-black
              bg-white
              hover:bg-green-700 hover:text-white
            "
          >
            <div>
              <img
                class="imgSetting pl-6"
                src="../static/images/imgSetting.svg"
                alt=""
              />
            </div>
            <div>
              <h3 class="">HJ Tech</h3>
            </div>
          </div>
          <div
            class="
              buttonImages
              border border-gray-700
              flex
              items-center
              rounded-xl
              gap-x-4
              mb-4
            "
          >
            <div>
              <img
                class="imgSetting pl-6"
                src="../static/images/imgPen.svg"
                alt=""
              />
            </div>
            <div>
              <h3 class="">HJ Design</h3>
            </div>
          </div>
          <div
            class="
              buttonImages
              border border-gray-700
              flex
              items-center
              rounded-xl
              gap-x-4
              mb-4
            "
          >
            <div>
              <img class="pl-6" src="../static/images/imgChat.svg" alt="" />
            </div>
            <div>
              <h3 class="">HJ Consultant</h3>
            </div>
          </div>
          <div
            class="
              buttonImages
              border border-gray-700
              flex
              items-center
              rounded-xl
              gap-x-4
            "
          >
            <div>
              <img class="pl-6" src="../static/images/imgCow.svg" alt="" />
            </div>
            <div>
              <h3 class="">HJ Farm</h3>
            </div>
          </div>
        </div>
        <!-- Col 2 -->
        <div class="md:pt-0 pt-20">
          <div
            class="
              mb-10
              w-full
              bg-white
              hover:bg-gray-50
              border border-gray-400
              hover:border-green-700
              rounded-lg
              sahdow-lg
              p-12
              flex flex-col
              justify-center
              items-center
            "
          >
            <div class="mb-6">
              <img
                class="object-center object-cover rounded-full h-28 w-28"
                src="../static/images/imgAvatarOne.svg"
                alt="photo"
              />
            </div>
            <div class="text-center">
              <p class="text-2xl text-black font-semibold mb-2">Zuckerberg</p>
              <p class="text-base text-gray-400 font-normal">Founder</p>
            </div>
            <div class="grid grid-cols-3 gap-x-4 mt-10">
              <a href="">
                <img src="../static/images/imgLinkedin.svg" alt="" />
              </a>
              <a href="">
                <img src="../static/images/imgInstgra.svg" alt="" />
              </a>
              <a href="">
                <img src="../static/images/imgTwitter.svg" alt="" />
              </a>
            </div>
          </div>
          <div
            class="
              mb-10
              w-full
              bg-white
              hover:bg-gray-50
              border border-gray-400
              hover:border-green-700
              rounded-lg
              sahdow-lg
              p-12
              flex flex-col
              justify-center
              items-center
            "
          >
            <div class="mb-6">
              <img
                class="object-center object-cover rounded-full h-28 w-28"
                src="../static/images/imgPeopleTwo.svg"
                alt="photo"
              />
            </div>
            <div class="text-center">
              <p class="text-2xl text-black font-semibold mb-2">Hamilton</p>
              <p class="text-base text-gray-400 font-normal">Founder</p>
            </div>
            <div class="grid grid-cols-3 gap-x-4 mt-10">
              <a href="">
                <img src="../static/images/imgLinkedin.svg" alt="" />
              </a>
              <a href="">
                <img src="../static/images/imgInstgra.svg" alt="" />
              </a>
              <a href="">
                <img src="../static/images/imgTwitter.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
        <!-- Col 3 -->
        <div class="">
          <div
            class="
              mb-10
              w-full
              bg-white
              hover:bg-gray-50
              border border-gray-400
              hover:border-green-700
              rounded-lg
              sahdow-lg
              p-12
              flex flex-col
              justify-center
              items-center
            "
          >
            <div class="mb-6">
              <img
                class="object-center object-cover rounded-full h-28 w-28"
                src="../static/images/imgPeopleThree.svg"
                alt="photo"
              />
            </div>
            <div class="text-center">
              <p class="text-2xl text-black font-semibold mb-2">Bambang</p>
              <p class="text-base text-gray-400 font-normal">Founder</p>
            </div>
            <div class="grid grid-cols-3 gap-x-4 mt-10">
              <a href="">
                <img src="../static/images/imgLinkedin.svg" alt="" />
              </a>
              <a href="">
                <img src="../static/images/imgInstgra.svg" alt="" />
              </a>
              <a href="">
                <img src="../static/images/imgTwitter.svg" alt="" />
              </a>
            </div>
          </div>
          <div
            class="
              mb-10
              w-full
              bg-white
              hover:bg-gray-50
              border border-gray-400
              hover:border-green-700
              rounded-lg
              sahdow-lg
              p-12
              flex flex-col
              justify-center
              items-center
            "
          >
            <div class="mb-6">
              <img
                class="object-center object-cover rounded-full h-28 w-28"
                src="../static/images/imgPeopleFour.svg"
                alt="photo"
              />
            </div>
            <div class="text-center">
              <p class="text-2xl text-black font-semibold mb-2">Nakamura</p>
              <p class="text-base text-gray-400 font-normal">Founder</p>
            </div>
            <div class="grid grid-cols-3 gap-x-4 mt-10">
              <a href="">
                <img src="../static/images/imgLinkedin.svg" alt="" />
              </a>
              <a href="">
                <img src="../static/images/imgInstgra.svg" alt="" />
              </a>
              <a href="">
                <img src="../static/images/imgTwitter.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
        <!-- Col 4 -->
        <div class="">
          <div
            class="
              mb-10
              w-full
              bg-white
              hover:bg-gray-50
              border border-gray-400
              hover:border-green-700
              rounded-lg
              sahdow-lg
              p-12
              flex flex-col
              justify-center
              items-center
            "
          >
            <div class="mb-6">
              <img
                class="object-center object-cover rounded-full h-28 w-28"
                src="../static/images/imgPeopleFive.svg"
                alt="photo"
              />
            </div>
            <div class="text-center">
              <p class="text-2xl text-black font-semibold mb-2">Khoirul</p>
              <p class="text-base text-gray-400 font-normal">Founder</p>
            </div>
            <div class="grid grid-cols-3 gap-x-4 mt-10">
              <a href="">
                <img src="../static/images/imgLinkedin.svg" alt="" />
              </a>
              <a href="">
                <img src="../static/images/imgInstgra.svg" alt="" />
              </a>
              <a href="">
                <img src="../static/images/imgTwitter.svg" alt="" />
              </a>
            </div>
          </div>
          <div
            class="
              textFounder
              mb-10
              w-full
              bg-white
              hover:bg-gray-50
              border border-gray-400
              hover:border-green-700
              rounded-lg
              sahdow-lg
              px-4
              flex flex-col
              justify-center
              items-center
            "
          >
            <p class="text-center">
              Jika, anda ingin bergabung bersama kami bisa lihat info mengenai
              <a href=""
                ><span class="text-green-700 hover:underline"
                  >karir disini</span
                ></a
              >
            </p>
          </div>
        </div>
      </div>

      <!-- Contact -->
      <div
        class="
          contact-bg
          md:flex
          bg-green-700
          rounded-lg
          pt-14
          md:px-28
          px-8
          md:mt-32
          mt-24
          md:pb-14
          pb-52
        "
      >
        <div>
          <h1
            class="md:text-6xl text-3xl font-semibold md:pb-0 pb-8 text-white"
          >
            Percayakan produk anda pada <span class="textWe">kami</span>
          </h1>
        </div>
        <div>
          <p class="text-base text-white font-normal">
            Setiap anggota dalam tim kami memiliki keahlian yang tidak diragukan
            lagi, kami siap melayani projek anda sesuai dengan permintaan yang
            diberikan.
          </p>
          <button
            class="
              flex
              mt-8
              py-2
              px-6
              border border-white
              rounded-lg
              font-medium
              text-white
              hover:text-black hover:bg-white
              mx-1
            "
          >
            Kontak Kami
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 ml-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Footer -->
      <div>
        <hr class="md:mt-10 mt-12 mb-12" />
        <div class="flex md:flex-row flex-col-reverse md:px-32 px-6">
          <div class="col md:w-1/3 w-full md:pb-0 pb-14 text-left font-medium">
            <p>&copy;2021 HJ Corporate</p>
          </div>
          <div class="col md:w-1/3 md:pb-0 pb-6 w-full text-left font-semibold">
            <p>Sinduharjo, Kab. Sleman, Yogyakarta</p>
          </div>
          <div
            class="
              col
              md:w-1/3
              w-full
              md:gap-x-4
              gap-x-6
              md:pb-0
              pb-6
              flex
              md:justify-end
              justify-start
              md:mb-20
              mb-0
            "
          >
            <a href="">
              <img src="../static/images/mail.svg" alt="" />
            </a>
            <a href="">
              <img src="../static/images/linkedIn.svg" alt="" />
            </a>
            <a href="">
              <img src="../static/images/facebook.svg" alt="" />
            </a>
            <a href="">
              <img src="../static/images/instagram.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VisiMisi from "../components/VisiMisi.vue";
export default {
  name: "Tentang",
  data() {},
  components: {
    VisiMisi,
  },
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

.text-about {
  color: #146764;
}

.text-detail,
.text-us {
  color: #404852;
}

.text-member {
  color: #187c79;
}

.buttonImages {
  width: full;
  height: 56px;
}

.imgSetting:hover {
  fill: #fff;
}

.textWe {
  color: #c4b88c;
}

.contact-bg {
  background-color: #1d3f3a;
}

.imgVisi {
  height: 520px;
  width: auto;
}

.textFounder {
  padding-top: 148px;
  padding-bottom: 130px;
}
</style>

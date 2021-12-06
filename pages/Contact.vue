<template>
  <div class="contactPage">
    <div class="md:px-32 px-6 w-full flex md:flex-row flex-col justify-between">
      <div class="md:pt-20 pt-10 pr-12 md:w-[45%] w-full">
        <h2 class="md:text-6xl text-[40px] text-white font-semibold pb-4">
          Kontak <span class="textUs">Kami</span>
        </h2>
        <p class="text-white text-base leading-6 tracking-wide pb-2">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <div class="flex md:pt-24 pt-20">
          <button
            class="
              flex
              py-2
              px-6
              rounded
              hover:border
              hover:border-[#06D6C6]
              hover:bg-[#05BDAF]
              hover:bg-opacity-10
              font-medium
              text-white
              items-center
            "
          >
<<<<<<< HEAD
            <img class="pr-4" src="../static/images/phoneimg.svg" alt="" />
=======
            <img class="pr-4" src="../static/tentang/phoneimg.svg" alt="" />
>>>>>>> 092d7d6 (update all files)
            +6283 8433 57816
          </button>
        </div>
        <div class="flex pt-10">
          <button
            class="
              flex
              py-2
              px-6
              rounded
              hover:border
              hover:border-[#06D6C6]
              hover:bg-[#05BDAF]
              hover:bg-opacity-10
              font-medium
              text-white
              items-center
            "
          >
<<<<<<< HEAD
            <img class="pr-4" src="../static/images/email.svg" alt="" />
=======
            <img class="pr-4" src="../static/tentang/email.svg" alt="" />
>>>>>>> 092d7d6 (update all files)
            hello@hjcorp.com
          </button>
        </div>
        <div class="flex pt-10">
          <button
            class="
              flex
              py-2
              px-6
              rounded
              hover:border
              hover:border-[#06D6C6]
              hover:bg-[#05BDAF]
              hover:bg-opacity-10
              font-medium
              text-white
              items-center
            "
          >
<<<<<<< HEAD
            <img class="pr-3" src="../static/images/location.svg" alt="" />
=======
            <img class="pr-3" src="../static/tentang/location.svg" alt="" />
>>>>>>> 092d7d6 (update all files)
            Sinduharjo, Kabupaten Sleman, Yogyakarta
          </button>
        </div>
        <div class="flex gap-x-6 md:pt-44 pt-20 md:pl-6 pl-0">
          <a class="" href="">
            <img
              class="hover:bg-[#05BDAF] hover:bg-opacity-40 hover:rounded-full"
<<<<<<< HEAD
              src="../static/images/instagramC.svg"
=======
              src="../static/tentang/instagramC.svg"
>>>>>>> 092d7d6 (update all files)
              alt=""
            />
          </a>
          <a href="">
            <img
              class="hover:bg-[#05BDAF] hover:bg-opacity-40 hover:rounded-full"
<<<<<<< HEAD
              src="../static/images/facebookC.svg"
=======
              src="../static/tentang/facebookC.svg"
>>>>>>> 092d7d6 (update all files)
              alt=""
            />
          </a>
          <a href="">
            <img
              class="hover:bg-[#05BDAF] hover:bg-opacity-40 hover:rounded-full"
<<<<<<< HEAD
              src="../static/images/linkedinC.svg"
=======
              src="../static/tentang/linkedinC.svg"
>>>>>>> 092d7d6 (update all files)
              alt=""
            />
          </a>
        </div>
      </div>
      <!-- Col 2 -->
      <div class="bg-white mt-20 mb-20 px-10 rounded-3xl md:w-[55%] w-full">
        <h3 class="text-lg font-semibold pb-6 pt-10">
          Bisnis yang diinginkan<span class="text-red-500">*</span>
        </h3>
        <div class="w-full flex">
          <div class="w-[40%]">
            <div class="flex flex-col">
              <button
                class="
                  mb-5
                  py-2
                  px-4
                  outline-blue
                  rounded
                  font-medium
                  text-primary
                  hover:text-white hover:bg-primary
                  mx-1
                "
              >
                {{ nameButton[0] }}
              </button>
              <button
                class="
                  py-2
                  px-4
                  outline-blue
                  rounded
                  font-medium
                  text-primary
                  hover:text-white hover:bg-primary
                  mx-1
                "
              >
                {{ nameButton[1] }}
              </button>
            </div>
          </div>
          <div class="w-[40%] flex flex-col">
            <button
              class="
                mb-5
                py-2
                px-4
                outline-blue
                rounded
                font-medium
                text-primary
                hover:text-white hover:bg-primary
                mx-1
              "
            >
              {{ nameButton[2] }}
            </button>
            <button
              class="
                py-2
                px-4
                outline-blue
                rounded
                font-medium
                text-primary
                hover:text-white hover:bg-primary
                mx-1
              "
            >
              {{ nameButton[3] }}
            </button>
          </div>
        </div>
        <form class="w-full pt-8 text-left">
          <div class="flex flex-col md:flex-row mb-6">
            <div class="w-full md:w-1/2 md:mx-2 mx-0 px-0 mb-6 md:mb-0">
              <label
                class="
                  block
                  tracking-wide
                  text-black text-lg
                  font-semibold
                  pb-2
                "
                for="grid-name"
                >Nama<span class="text-red-500">*</span>
              </label>
              <input
                class="
                  md:w-[97%]
                  appearance-none
                  block
                  w-full
                  bg-gray-100
                  text-gray-700
                  border
                  rounded
                  py-3
                  px-4
                  mb-3
                  leading-tight
                  focus:outline-none focus:bg-white
                "
                id="grid-name"
                type="text"
                placeholder=""
              />
            </div>
            <div class="w-full md:w-1/2 mx-0">
              <div class="w-full ml-0 md:ml-1">
                <label
                  class="
                    block
                    tracking-wide
                    text-black text-lg
                    font-semibold
                    pb-2
                  "
                  for="grid-number"
                  >No.Telepon/WhatsApp<span class="text-red-500">*</span></label
                >
                <input
                  class="
                    md:w-[97%]
                    appearance-none
                    block
                    w-full
                    bg-gray-100
                    text-black
                    border border-gray-200
                    rounded
                    py-3
                    md:px-4
                    mb-3
                    leading-tight
                    focus:outline-none focus:bg-white focus:border-gray-500
                  "
                  id="grid-number"
                  type="text"
                  placeholder=""
                />
              </div>
            </div>
          </div>
          <div class="flex flex-col md:flex-row mb-6">
            <div class="w-full md:w-1/2 px-0 md:mx-2 mx-0 mb-6 md:mb-0">
              <label
                class="
                  block
                  tracking-wide
                  text-black text-lg
                  font-semibold
                  pb-2
                "
                for="grid-email"
                >Email Address<span class="text-red-500">*</span></label
              >
              <input
                class="
                  md:w-[97%]
                  appearance-none
                  block
                  w-full
                  bg-gray-100
                  text-black
                  border
                  rounded
                  py-3
                  px-4
                  mb-3
                  leading-tight
                  focus:outline-none focus:bg-white
                "
                id="grid-email"
                type="text"
                placeholder=""
              />
            </div>
            <div class="w-full md:w-1/2">
              <div class="md:w-full md:ml-1 ml-0">
                <label
                  class="
                    block
                    tracking-wide
                    text-black text-lg
                    font-semibold
                    pb-2
                  "
                  for="grid-document"
                >
                  Upload Dokumen</label
                >
                <input
                  class="
                    md:w-[97%]
                    appearance-none
                    block
                    w-full
                    bg-gray-100
                    text-black
                    border border-gray-200
                    rounded
                    py-2.5
                    px-4
                    leading-tight
                    focus:outline-none focus:bg-white focus:border-gray-500
                  "
                  id="grid-document"
                  type="file"
                  placeholder=""
                />
              </div>
            </div>
          </div>
          <div class="flex flex-col md:flex-row pb-6 mb-20">
            <div class="w-full md:mx-2 mx-0">
              <label
                class="
                  block
                  tracking-wide
                  text-black text-lg
                  font-semibold
                  pb-2
                "
                for="grid-detail"
              >
                Detail Projek<span class="text-red-500">*</span></label
              >
              <textarea
                class="
                  mr-10
                  bg-gray-100
                  text-black
                  border border-gray-200
                  rounded
                  focus:outline-none focus:bg-white focus:border-gray-500
                "
                id=""
                name=""
                rows="7"
              ></textarea>
              <button
                class="
                  py-2
                  px-6
                  rounded
                  font-medium
                  text-white
                  hover:text-white
                  bg-[#187C79]
                  hover:bg-opacity-100
                  bg-opacity-80
                  mt-3
                "
              >
                Kirim Pesan
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import CardService from "../components/CardService.vue";
export default {
  name: "Footer",
  components: { CardService },
  data() {
    return {
      nameButton: ["HJ Design", "HJ Tech", "HJ Consultant", "HJ Farm"],
    };
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
<<<<<<< HEAD

.main {
  max-width: 1440px;
}

.contactPage {
  background-color: #012825;
}

.textUs {
  color: #a3a07c;
}
</style>
=======
.main {
  max-width: 1440px;
}
.contactPage {
  background-color: #012825;
}
.textUs {
  color: #a3a07c;
}
</style>
>>>>>>> 092d7d6 (update all files)

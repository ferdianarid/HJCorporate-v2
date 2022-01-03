<template>
  <div class="main w-full max-w-[1440px] mx-auto">
    <!-- Navbar -->
    <div class="bg-gradient-to-r md:px-32 px-6 from-[#F3FDFC]">
      <Navbar />
      <div class="flex items-center pt-10 md:pt-16">
        <h6 class="text-lg text-[#187C79] font-sans font-medium pb-4">HJ Corporate</h6>
        &nbsp;&nbsp;
        <hr width="40px" size="10px" color="" class="-mt-3" />
      </div>
      <!-- Header Section -->
      <header class="row md:flex h-auto md:mb-16 mb-8">
        <!-- Heading -->
        <div class="w-full md:w-1/2 md:mb-8 mb-12 md:pb-10">
          <h1 class="title-heading text-4xl pt-2 md:text-5xl font-medium md:leading-tight md:pb-2">
            Membantu mengubah produk menjadi luar biasa.
          </h1>
          <p class="pt-5 md:pr-16 md:leading-7 pb-8 md:pt-3 text-gray-600">
            Kami adalah perusahaan yang berfokus pada bidang teknologi, desain, konsultan, dan peternakan. Kami selalu memperhatikan setiap
            detail kecil dari produk yang kami kerjakan.
          </p>
          <!-- Button Call to Action -->
          <ButtonCallAction />
        </div>
        <!-- Header Images -->
        <div class="w-full md:w-1/2 flex justify-center items-center relative">
          <img class="md:scale-110 scale-100" src="../static/images/imgDesktop.png" alt="headingImages" />
        </div>
      </header>
    </div>
    <div class="md:px-32 px-6">
      <Slide />
      <!-- Section Services -->
      <div class="flex items-center md:pt-16 pt-8">
        <h6 class="text-lg text-[#187C79] font-sans font-medium pb-4">Bisnis Kami</h6>
        &nbsp;&nbsp;
        <hr width="40px" color="white" class="-mt-3" />
      </div>
      <div>
        <h3 class="md:max-w-[500px] max-w-[300px] md:text-5xl text-[32px] pt-1.5 pb-20 leading-[48px] tracking-[0.3px] font-medium">
          Bidang bisnis yang kami tawarkan
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 md:gap-x-[123px] gap-x-[40px] md:gap-y-0 gap-y-[40px]">
          <div>
            <div class="child text-left">
              <div class="bg-white p-12 md:p-14 border-techColor border-t-4">
                <img class="pb-8 w-[42px] h-auto" src="../static/images/technology.png" alt="hjtech" />
                <h4 class="pb-8 text-[32px] font-semibold leading-[42px] tracking-[0.3px]">HJ<br />Technology</h4>
                <p class="pb-8 text-base font-normal leading-[26px] tracking-[0.3px] text-[#404852]">
                  Menyediakan jasa seputar techonology seperti: Web development, Mobile Apps Development, WordPress.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div class="child text-left">
              <div class="bg-white p-12 md:p-14 border-red-600 border-t-4">
                <img class="pb-8 w-[42px] h-auto" src="../static/images/design.png" alt="hjdesign" />
                <h4 class="pb-8 text-[32px] font-semibold leading-[42px] tracking-[0.3px]">HJ<br />Design</h4>
                <p class="pb-8 text-base font-normal leading-[26px] tracking-[0.3px] text-[#404852]">
                  Menyediakan jasa seputar design seperti: Landing Pages, User Flow, Wireframing, Prototyping, Mobile App Design, Web App
                  Design.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div class="child text-left md:pt-[40px]">
              <div class="bg-white p-12 md:p-14 border-consultantColor border-t-4">
                <img class="pb-8 w-[42px] h-auto" src="../static/images/consultant.png" alt="hjconsultant" />
                <h4 class="pb-8 text-[32px] font-semibold leading-[42px] tracking-[0.3px]">HJ<br />Consultant</h4>
                <p class="pb-8 text-base font-normal leading-[26px] tracking-[0.3px] text-[#404852]">
                  Partner akan dimudahkan dengan sistem komunikasi kami yang tersedia untuk kapan saja.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div class="child text-left pb-14 md:pt-[40px]">
              <div class="bg-white p-12 md:p-14 border-farmColor border-t-4">
                <img class="pb-8 w-[42px] h-auto" src="../static/images/farm.png" alt="hjfarm" />
                <h4 class="pb-8 text-[32px] font-semibold leading-[42px] tracking-[0.3px]">HJ<br />Farm</h4>
                <p class="pb-8 text-base font-normal leading-[26px] tracking-[0.3px] text-[#404852]">
                  Partner akan dimudahkan dengan sistem komunikasi kami yang tersedia untuk kapan saja.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Card Portfolio -->
      <div class="pt-16">
        <div class="flex items-center">
          <h6 class="text-lg font-sans font-medium pb-4 text-[#187C79]">Portfolio</h6>
          &nbsp;&nbsp;
          <hr width="40px" color="white" class="-mt-3" />
        </div>
        <div>
          <h3 class="md:text-[48px] text-[32px] pt-1.5 font-medium md:w-[450px] w-[300px] pb-10 leading-[48px] tracking-[0.3px]">
            Proyek yang pernah kami kerjakan
          </h3>
          <div class="flex flex-col md:flex-row gap-x-6">
            <div class="mb-4 md:mb-0">
              <button class="py-2 px-6 rounded-lg font-medium border border-black text-black hover:text-white hover:bg-black mx-1">
                {{ nameButton[0] }}
              </button>
            </div>
            <div class="mb-4 md:mb-0">
              <button class="py-2 px-6 rounded-lg font-medium border border-black text-black hover:text-white hover:bg-black mx-1">
                {{ nameButton[1] }}
              </button>
            </div>
            <div class="mb-4 md:mb-0">
              <button class="py-2 px-6 rounded-lg font-medium border border-black text-black hover:text-white hover:bg-black mx-1">
                {{ nameButton[2] }}
              </button>
            </div>
            <div class="mb-4 md:mb-0">
              <button class="py-2 px-6 rounded-lg font-medium border border-black text-black hover:text-white hover:bg-black mx-1">
                {{ nameButton[3] }}
              </button>
            </div>
          </div>
        </div>
        <CorouselDua />
        <!-- Benefit -->
        <div class="pt-10">
          <div class="flex items-center">
            <h6 class="text-lg font-sans font-medium pb-4 text-[#187C79]">Keuntungan Partner Kami</h6>
            &nbsp;&nbsp;
            <hr width="40px" color="white" class="-mt-3" />
          </div>
          <div>
            <h3 class="md:text-[48px] text-[32px] pt-1.5 pb-10 font-medium md:max-w-[750px] md:leading-[58px] tracking-[0.3px]">
              Keuntungan menjadi partner kerja pada HJ Corporate
            </h3>
          </div>
          <div class="flex md:flex-row flex-col items-center leading-[34px] tracking-[0.3px]">
            <!-- First Card -->
            <div class="w-auto h-auto tracking-wide mb-14 mx-1 rounded-lg relative">
              <div class="small-banner w-1 h-20 bg-[#187C79] absolute rounded-tl-md"></div>
              <h5 class="text-2xl font-semibold pl-6 pr-6">Komunikasi yang jelas dan mudah.</h5>
              <p class="text-base text-[#404852] font-regular p-6">
                Partner akan dimudahkan dengan sistem komunikasi kami yang tersedia untuk kapan saja.
              </p>
            </div>
            <!-- Second Card -->
            <div class="w-auto h-auto tracking-wide mb-14 mx-1 rounded-lg relative">
              <div class="small-banner w-1 h-20 bg-[#187C79] absolute rounded-tl-md"></div>
              <h5 class="text-2xl font-semibold pl-6 pr-6">Proyek sesuai permintaan partner.</h5>
              <p class="text-base text-[#404852] font-regular p-6">
                Partner dapat mengajukan konsepnya pada projek yang diajukan sesuai dengan keinginannya.
              </p>
            </div>
            <!-- Third Card -->
            <div class="w-auto h-auto tracking-wide mb-14 mx-1 rounded-lg relative">
              <div class="small-banner w-1 h-20 bg-[#187C79] absolute rounded-tl-md"></div>
              <h5 class="text-2xl font-semibold pl-6 pr-6">Ketepatan dalam waktu pengerjaan</h5>
              <p class="text-base text-[#404852] font-regular p-6">
                Projek yang diberikan partner akan dapat diselesaikan tepat waktu sesuai waktu yang diinginkan partner
              </p>
            </div>
          </div>
        </div>
        <!-- About Us -->
        <div class="pb-10 relative">
          <div class="flex items-center">
            <h6 class="text-lg text-[#187C79] font-sans font-medium pb-4">Tentang Kami</h6>
            &nbsp;&nbsp;
            <hr width="40px" color="white" class="-mt-3" />
          </div>
          <div class="relative">
            <h3
              class="
                description-about
                md:w-[1100px]
                w-[350px]
                md:text-[48px]
                text-[32px]
                leading-[42px]
                md:leading-[58px]
                tracking-[0.3px]
                pt-1.5
                pb-8
                font-medium
              "
            >
              Kami selalu mengedepankan kepuasan para partner kami demi menghasilkan sebuah produk yang diinginkan
            </h3>
            <Glass />
            <img class="image-about pb-6" src="../static/images/maskImage.svg" alt="" />
          </div>
          <SecondGlass />
        </div>
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import NavbarNew from "../components/NavbarNew.vue";
import SecondGlass from "~/components/SecondGlass.vue";
import Portfolio from "~/components/Portfolio.vue";
import Slide from "../components/Slide.vue";
import ButtonPrimary from "~/components/ButtonPrimary.vue";
import ButtonCallAction from "../components/ButtonCallAction.vue";
export default {
  components: {
    Navbar,
    NavbarNew,
    SecondGlass,
    Portfolio,
    Slide,
    ButtonPrimary,
    ButtonCallAction,
  },
  data() {
    return {
      nameButton: ["HJ Technology", "HJ Design", "HJ Consultant", "HJ Farm"],
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

hr {
  border-top-width: 2px;
  border-top: 2px solid #187c79;
}

.main {
  max-width: 1440px;
}

.image-head {
  margin-top: -140px;
}

.second-image-head {
  margin-top: 340px;
}

.glass-card {
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 0px 30px 60px rgba(32, 56, 85, 0.15);
  backdrop-filter: blur(16px);
  z-index: 2;
  width: 20rem;
}

.first-glass {
  top: 0;
  margin-left: -5rem;
  margin-top: 0rem;
  z-index: 2;
}

.second-glass {
  margin-left: -25rem;
  margin-top: 31rem;
  z-index: 2;
}

@media screen and (max-width: 768px) {
  .description-about {
    padding-bottom: 7rem;
  }

  .image-about {
    padding-bottom: 4rem;
  }

  .first-glass {
    margin-left: 19rem;
    margin-top: -1rem;
  }

  .second-glass {
    margin-left: 18rem;
    margin-top: 27rem;
    z-index: 2;
  }
}
</style>

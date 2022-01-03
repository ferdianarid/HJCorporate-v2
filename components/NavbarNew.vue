<template>
  <div>
    <div class="font-sans antialiased" id="app">
      <!-- Class Navbar -->
      <nav class="navbar flex items-center justify-between flex-wrap bg-transparent py-6 relative">
        <!-- Brand and Logos -->
        <div class="flex items-center flex-no-shrink">
          <h1 class="font-extrabold">HJ Corporate</h1>
        </div>
        <!-- Hamburger Component -->
        <div class="block sm:hidden">
          <button
            @click="toggle"
            class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white"
          >
            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <!-- Hamburger Action -->
        <div :class="open ? 'block' : 'hidden'" class="w-full flex-grow sm:flex sm:items-center sm:w-auto">
          <!-- Navigation  Links-->
          <div class="text-sm sm:flex-grow sm:text-right">
            <div class="">
              <a href="/" class="no-underline block mt-4 sm:mx-3 sm:inline-block sm:mt-0 text-teal-lighter hover:text-green-800 mr-4">
                Beranda
              </a>
              <a href="/portfolio" class="no-underline block mt-4 sm:mx-3 sm:inline-block sm:mt-0 text-teal-lighter hover:text-green-800">
                Portofolio
              </a>
              <a href="/tentang" class="no-underline block mt-4 sm:mx-3 sm:inline-block sm:mt-0 text-teal-lighter hover:text-green-800">
                Tentang Kami
              </a>
              <a
                href="/contact"
                class="
                  md:max-w-[170px]
                  max-w-[135px]
                  no-underline
                  block
                  mt-4
                  md:px-8
                  px-4
                  md:py-4
                  py-2
                  sm:mx-3 sm:inline-block sm:mt-0
                  text-teal-lighter
                  border
                  bg-[#187C79]
                  hover:bg-[#115A58]
                  text-white
                  rounded-lg
                  text-center
                "
              >
                Kontak Kami
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavbarNew",
  data() {
    return {
      open: false,
    };
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
  },
};
</script>

<style>
.tentang {
  height: 9rem;
  top: 0;
  right: 0;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  background-color: #187c79;
}
.tentang h1 {
  padding-top: 3.5rem;
}
.tentang img {
  width: 4.2rem;
}
.kontak {
  display: none;
}
@media screen and (max-width: 768px) {
  .tentang {
    display: none;
  }
  .kontak {
    display: block;
  }
}
</style>

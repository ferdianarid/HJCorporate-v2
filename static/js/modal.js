new Vue({
  el: "#app",
  data: {
    showModal: false,
    showLongModal: false,
  },
  methods: {},
  components: {
    modal: {
      template: "#test-modal-template",
      data() {
        return {
          paddingRight: 0,
          isModalOverflowing: false,
          isBodyOverflowing: false,
        };
      },
      props: {
        title: {
          type: String,
          default: "",
        },
        size: {
          type: String,
          default: "md",
        },
      },
      methods: {
        toggleBodyClass(addRemoveClass, className) {
          const el = document.body;

          if (addRemoveClass === "addClass") {
            el.classList.add(className);
          } else {
            el.classList.remove(className);
          }
        },
        close: function () {
          this.$emit("close");
        },

        // ----------------------------------------------------------------------
        // Thanks to:
        // https://github.com/twbs/bootstrap/blob/3b558734382ce58b51e5fc676453bfd53bba9201/js/src/modal.js
        //
        // the following methods are used to handle overflowing modals
        // ----------------------------------------------------------------------
        _adjustDialog() {
          this.isModalOverflowing =
            this.$el.scrollHeight > document.documentElement.clientHeight;

          if (!this.isBodyOverflowing && this.isModalOverflowing) {
            this.$el.style.paddingLeft = `${this._scrollbarWidth}px`;
          }

          if (this.isBodyOverflowing && !this.isModalOverflowing) {
            this.$el.style.paddingRight = `${this._scrollbarWidth}px`;
          }
        },

        _resetAdjustments() {
          this.$el.style.paddingLeft = "";
          this.$el.style.paddingRight = "";
        },

        _checkScrollbar() {
          const rect = document.body.getBoundingClientRect();
          this.isBodyOverflowing = rect.left + rect.right < window.innerWidth;
          this._scrollbarWidth = this._getScrollbarWidth();
        },

        _setScrollbar() {
          if (this.isBodyOverflowing) {
            // Adjust body padding
            const actualPadding = document.body.style.paddingRight;
            const calculatedPadding = $(document.body).css("padding-right");

            this.paddingRight = actualPadding;

            $(document.body).css(
              "padding-right",
              `${parseFloat(calculatedPadding) + this._scrollbarWidth}px`
            );
          }
        },

        _resetScrollbar() {
          // Restore body padding
          const padding = this.paddingRight;

          // Reset storing var
          this.paddingRight = 0;

          document.body.style.paddingRight = padding ? padding : 0;
        },

        _getScrollbarWidth() {
          // thx d.walsh
          const scrollDiv = document.createElement("div");
          scrollDiv.className = "modal-scrollbar-measure";
          document.body.appendChild(scrollDiv);
          const scrollbarWidth =
            scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
          document.body.removeChild(scrollDiv);
          return scrollbarWidth;
        },
      },
      computed: {
        issueModalSize: function () {
          return "max-w-" + this.size;
        },
      },
      watch: {
        isModalOverflowing: function (overflowing) {
          console.log(overflowing ? "modal is overflowing" : "");
        },
        isBodyOverflowing: function (overflowing) {
          console.log(overflowing ? "body is overflowing" : "");
        },
      },
      activated: function () {
        // console.log('activated');
      },
      created: function () {
        // console.log('created');
      },
      mounted: function () {
        console.log("modal component mounted");

        document.addEventListener("keydown", (e) => {
          if (e.keyCode == 27) {
            this.close();
          }
        });

        this._checkScrollbar();

        this._setScrollbar();
        this._adjustDialog();

        this.toggleBodyClass("addClass", "overflow-hidden");
      },
      destroyed() {
        console.log("modal component destroyed");

        this._resetAdjustments();
        this._resetScrollbar();

        this.toggleBodyClass("removeClass", "overflow-hidden");
      },
    },
  },
});

<template>
  <div class="srv_cont">
      <ul class="srv_list">
          <li :class="`srv ${srv.status ? '' : 'down'}`" :key="srv.index" v-for="srv in srvs" @click="showCopied()"
          data-aos="zoom-in" v-clipboard:copy="srv.host">
              <img :src="require(`../assets/images/${srv.icon}`)" alt="" class="srv_ico">
              <div class="srv_name">{{srv.name}}</div>
              <div class="unbar"></div>
          </li>
      </ul>
  </div>
</template>

<script>
import srvs from "./../assets/data/servers.json";
import AOS from "aos";
import 'aos/dist/aos.css'
import { useToast } from "vue-toastification";


export default {
    name: "Servers",
    setup() {
        const toast = useToast();

        return { toast };
    },
    created() {
        AOS.init();
    },
    data() {
        return {
            srvs: srvs,
            mc_up: false
        }
    },
    methods: {
        showCopied() {
            this.toast.success("Copied server link to clipboard!");
        }
    }

}
</script>

<style lang="scss">

@import "./../vars.scss";

.srv_cont {

    .srv_list {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        list-style: none;

        .srv {

            margin-top: 45px;
            margin-bottom: 45px;

            &:active {
                transition: transform .3s;
                transform: scale(.8);
            }


            &:hover {
                cursor: pointer;

                .unbar {
                    width: 100%;
                    transition: width 1s;
                }
            }

            .srv_ico {
                margin: 25px;

                max-height: 300px;

            }

            .srv_name {
                font-weight: bold;
                font-family: $s-font;
                font-size: 32px;
                color: $txt-color;
            }

            .unbar {
                width: 0%;
                height: 2px;

                background-color: $p-color;

                transition: width .5s;
            }

            .srv_up {
                font-family: $s-font;
                font-size: 24px;
                
                .srv_on, .srv_off {
                    font-weight: bold;
                    font-family: $s-font;
                }

                .srv_on {
                    color: green;
                }

                .srv_off {
                    color: red;
                }

            }

        }

    }

}

.down {
    filter: brightness(30%);

    &:hover {
        cursor: default !important;

            .unbar  {
                width: 0% !important;
                transition: width 1s;
            }
        .srv_name {
            text-decoration: none !important;
        }
    }
}

</style>
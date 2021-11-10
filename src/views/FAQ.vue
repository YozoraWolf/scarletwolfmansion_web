<template>
  <div class="f_cont">
    <div class="f_title">Frequently Asked Questions</div>
    <ul class="f_list">
        <li class="f_item" :key="qa.index" v-for="qa in faq" data-aos="fade-right">
            <div class="f_q"><h1>Q: </h1><span>{{qa.q}}</span></div>
            <div class="f_a"><h1>A: </h1> <span v-html="qa.a"></span></div>
        </li>
    </ul>
  </div>
  
</template>

<script>
import faq from "./../assets/data/faq.json";
import AOS from "aos";
import 'aos/dist/aos.css'

export default {
    name: "FAQ",
    created() {
        AOS.init();

    },
    data() {
        return {
            faq: faq
        }
    }
}
</script>

<style lang="scss">

@import "./../vars.scss";

.f_title {
    color: $txt-color;
    font-size: 80px;
    font-family: $m-font;

    text-shadow: 0px 0px 8px $txt-color;
}

.f_cont {
    margin-top: 5%;
    margin-bottom: 5%;
}

.f_list {
    .f_item {



        display: flex;
        flex-direction: column;

        justify-content: left;

        margin-top: 80px;

        .f_q, .f_a{
            display: flex;
            flex-direction: row;


            justify-content: left;
            align-items: center;

            margin-top: 15px;


            h1 {
                color: $p-color;
                font-family: $m-font;
                font-weight: 400;
                font-size: 60px;

                margin: 0;
                margin-right: 15px;
                text-shadow: 0px 0px 8px $p-color;
            }

            span {
                color: $txt-color;
                font-family: $m-font;
                font-weight: 400;
                font-size: 30px;
                
                text-align: justify;

                margin-right: 5%;
            }
        }

        .f_a {
            display: flex;
            flex-direction: row;
        }
    }
}

</style>
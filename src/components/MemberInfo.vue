<template>
  <div class="mi_cont">

          <div class="mi_img" :style="{backgroundImage: 'url(\''+this.member.img.cover.durl+'\')'}">
              <a :href="member.img.cover.source" target="_blank" class="artist">{{this.member.img.cover.artist}}</a>
              </div>

      <div class="mi_txt">
        <div class="mi_title">{{this.member.name}}</div>
        <div class="mi_desc" v-html="this.member.desc"></div>
      </div>
      
  </div>
</template>

<script>
export default {
    name: "MemberInfo",
    props: {
        member: Object
    },
    methods: {
    }
}
</script>

<style lang="scss">

@import "./../vars.scss";

@media (max-width: $s-max-size) {

    .mi_cont {

        width: 90% !important;
        height: 80% !important;

        .mi_txt {
            overflow-y: scroll !important;

            margin-top: 10px;
            height: 23% !important;

            .mi_desc {
                height: 10% !important;
            }
        }
    }

}

    .mi_cont {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);

        width: 800px;
        height: 70%;

        //max-width: 500px;
        //max-height: 50%;

        border: 1px solid black;
        border-radius: 5%;
        background-color: $s-color;

        box-shadow: 0px 2px 8px 2px black;

        .mi_img {
            height: 70%;
            width: 100%;

            border-top-left-radius: 2%;
            border-top-right-radius: 2%;

            background-repeat: no-repeat;
            background-size: 100% 120%;

            .artist {
                position: absolute;
                top: 2%;
                right: 1%;

                margin: 0;
                text-shadow: 1px 1px 3px black;
                font-weight: bold;
                font-size: 20px;

                transition: text-shadow .5s;

                color: $txt-color;

                &:hover {

                    text-decoration: underline;
                    
                    transition: text-shadow 1s;
                }
            }

        }

        

        .mi_txt {
            margin-left: 15px;
            margin-right: 15px;

            overflow-y: scroll !important;
            height: 25%;
            
            margin-top: 5px !important;

            .mi_title {
                margin-top: 15px;
                margin-bottom: 15px;


                color: $txt-color;
                font-size: 30px;
                font-family: $m-font;
                
                text-shadow: 0px 0px 4px $txt-color;
            }

            .mi_desc {
                margin-top: 15px;



                color: $txt-color;
                font-family: $s-font;
      

                font-size: 20px;
            }

            a {
                color: $txt-color;
                text-decoration: none;
                text-shadow: 0px 0px 3px gold;

                &:hover {
                    text-decoration: underline;
                }
            }
        }

        
    }
</style>
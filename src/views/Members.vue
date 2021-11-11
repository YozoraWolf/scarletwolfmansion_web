<template>

    <div class="m_cont">
        <ul :key="pos.index" v-for="pos in positions" class="m_pos">
            <template v-if="pos.members.length > 0 ">
                <div class="m_title" :style="{ 'text-shadow': '0px 0px 5px ' + pos.color, color: pos.color }">{{pos.name}}</div>
                <div class="m_item">
                    <li :key="member.index" v-for="member of pos.members" @click="this.showMemberInfo(member)"
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="300">
                        <div class="grad"><img class="m_img" :src="member.img.card.durl" /><a :href="member.img.card.source" target="_blank" class="artist">{{member.img.card.artist}}</a></div>
                        
                        <div class="m_name">{{member.name}}</div>
                        <div class="m_desc"></div>
                    </li>
                </div>
            </template>
        </ul>

        <div class="dark_bg" :class="this.showMI ? 'showMI ' : 'hideMI '" :style="{display: this.visMI ? 'block' : 'none'}" @click="this.closeMemberInfo($event)">
            <MemberInfo :member="member"/>
        </div>
        
    </div>
</template>

<script>
import positions from "./../assets/data/members.json";
import MemberInfo from "./../components/MemberInfo.vue";
import AOS from "aos";
import 'aos/dist/aos.css'


export default {
    name: "Members",
    created() {
        AOS.init();

    },
    data() {
        return {
            positions: positions,
            showMI: false,
            visMI: false,
            member: {
                name: "",
                desc: "",
                img: {
                    card: {},
                    cover: {}
                }
            }
        }
    },
    components: {
        MemberInfo
    },
    methods: {
        showMemberInfo(member) {
            //if(e.target.className !== "grad") return;
            this.showMI = true;
            this.visMI = true;
            this.member = member;
            //console.log("M: ", member.name);
        },
        closeMemberInfo(e) {
            if(!e.target.className.includes("dark_bg")) return;
            this.showMI = false;
            setTimeout(() => {this.visMI = false}, 480);

        }
    }
}
</script>

<style lang="scss">

@import "./../vars.scss";


.dark_bg {
    background: rgba(0,0,0,.7);
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;

}

@keyframes fade-in {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 100%;
    }
}

@keyframes fade-out {
    0% {
        opacity: 100%;
    }

    100% {
        opacity: 0%;
    }
}

.m_cont {
    margin-bottom: 80px;
}

.showMI {
    display: block;
    animation: fade-in .5s;
}

.hideMI {
    //display: none;
    animation: fade-out .5s;
}


@media (max-width: $s-max-size) {

    .m_pos {
        padding-left: 5px !important;
    }

    .m_item {
        display: flex;
        flex-direction: column !important;
        align-items: center;
        justify-content: center;

        .grad, .m_img {
            max-width: 100% !important;
        }

    }
}

.m_pos {

    * {
        color: $txt-color;
    }

    display: flex;
    flex-direction: column;

    .m_title {
        margin-top: 40px;
        margin-bottom: 40px;
        font-size: 40px;
        font-family: $m-font;
        font-style: italic;

    }

    .m_item {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        
        list-style: none;

        li {
            margin-left: 15px;
            margin-right: 15px;

            &:hover {
                cursor: pointer;
                .m_name {
                    text-shadow: 0px 0px 5px $txt-color;
                    transition: text-shadow 1s;
                }
                .grad {
                    transition: box-shadow 1s;
                    //transform: scale(1.01);
                    box-shadow: 0px 0px 25px 8px $txt-color inset;
                }
                
            }
        }


        .m_name {
            margin-top: 10px;
            font-family: $s-font;
            font-size: 30px;
            text-shadow: 0px 0px 0px $txt-color;
            transition: text-shadow .5s;
        }

        .m_desc {
            margin-top: 10px;
        }

        .grad {
            box-shadow: -1px -1px 35px 15px $s-color inset;
            border-radius: 10px;
            
            max-width: 384px;
            max-height: 514px;
            transition: box-shadow .5s;
            //transform: scale(1);
            user-select: none;

            position: relative;

            .artist {
                position: absolute;
                bottom: 4%;
                right: 8%;

                margin: 0;
                text-shadow: 1px 1px 3px black;
                font-weight: bold;
                font-size: 20px;

                transition: text-shadow .5s;
                &:hover {

                    text-decoration: underline;
                    
                    transition: text-shadow 1s;
                }
            }

           
        }

        .m_img {
            //background: radial-gradient(circle at 100%, #333, #333 50%, #eee 75%, #333 75%);

            max-width: 384px;
            max-height: 514px;

           
            border-radius: 12px;
            position: relative;
            z-index: -1;

            
        }
    }

}


</style>
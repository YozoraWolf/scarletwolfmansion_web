<template>
    <div id="nav_cont">

    <div class="nav">
        <router-link to="/"><div class="nav_i">Home<div class="nbar"></div></div></router-link>
        <router-link to="/members"><div class="nav_i">Members<div class="nbar"></div></div></router-link>
        <router-link to="/faq"><div class="nav_i">FAQ<div class="nbar"></div></div></router-link>
        <router-link to="/servers"><div class="nav_i">Servers<div class="nbar"></div></div></router-link>
        <a href="https://discord.gg/NBpXpBEkAf" target="_blank"><div class="nav_i">Join our Discord!<div class="nbar"></div></div></a>
    </div>
    <router-view/>

    </div>

   
</template>

<script>
export default {

}
</script>

<style lang="scss">

@import "./../vars.scss";

a {
    text-decoration: none;
    width: auto;

    margin-left: 35px;
    margin-right: 35px;
    margin-bottom: 15px;
    margin-top: 15px;
}

.nav {
    display: flex;
    justify-content: center;

    .nav_i {
        color: $txt-color;
        font-family: "Josefin Sans";
        font-size: 25px;
        font-style: italic;

        user-select: none;



        transition: text-shadow .2s;

        .nbar {
            width: 0%;
            height: 1.5px;
            background-color: $p-color;
            transition: width .2s;
        }
        

        &:hover {

            text-shadow: 0px 0px 5px white;
            transition: text-shadow .5s;

            .nbar {
                transition: width .5s;
                width: 100%;
            }
            
        }
    }


}



</style>
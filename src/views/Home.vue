
<template>
  <div class="h_cont">

    <div class="h_title">Welcome to the <span>Scarlet Wolf Mansion</span></div>

  </div>

  <p>Welcome to our mansion. This is our place to leisure, have fun, share stories, memes and more. We dedicate ourselves to gaming and sharing a slice of life with each other. We are glad you've taken a step forward into our mansion. Welcome, and feel free to help yourself with our introductory refeshments!</p>
</template>

<script>
export default {
    name: "Home"

}
</script>

<style lang="scss">
@import "./../vars.scss";

.h_cont {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 600px;

  background: linear-gradient(to right, $s-color 0%, rgba(255, 255, 255, 0) 10%, #fff0 90%, $s-color 100%), url("./../assets/images/welcome_b.jpg") no-repeat;
  background-size: 80% 100%;
  background-position: center;


}

@keyframes pulse {
  0% {
    text-shadow: 0px 0px 3px red;
  }
  100% {
    text-shadow: 0px 0px 8px red;
  }
}

.h_cont {
  margin-top: 20px;
}

.h_title {
  font-family: $m-font;
  font-size: 52px;

  color: $txt-color;

  span {
    animation: pulse 2s infinite linear alternate;
  }
}

p {
  font-family: $m-font;
  font-size: 32px;

  color: $txt-color;

  text-align: center;

  margin-right: 20%;
  margin-left: 20%;
}

</style>
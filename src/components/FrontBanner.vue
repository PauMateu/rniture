<template>
  <div class="banner">
      <div class="text">
            <span class="title">
                Style & confort at <span class="logo">.rniture</span>
            </span><br>
            <span class="subtitle">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores eos ex doloribus repudiandae quod quia odio consequatur molestias iure eum porro, amet harum. Fuga accusantium corporis numquam quae aperiam exercitationem!
            </span>
            <div class="dowloads">
                Download on 
            </div>
      </div>
      <div class="image">
          <img src="../assets/furniture.png" alt="sofa">
      </div>
  </div>
</template>

<script>
export default {
 setup() {

 }
}
</script>

<style>
.banner{
    display: flex;
    align-items: center;
}
.text {
    max-width: "60%";
}
.title {
    font-size: 50px;
    font-weight: bold;
}
.logo {
    color: #f83a26;
}
</style>
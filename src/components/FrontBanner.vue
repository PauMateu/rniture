<template>
  <div class="banner">
      <div class="banner-text">
            <span class="banner-title">
                Style & confort at <span class="banner-logo">.rniture</span>
            </span><br>
            <span class="banner-subtitle">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores eos ex doloribus repudiandae quod quia odio consequatur molestias iure eum porro, amet harum. Fuga accusantium corporis numquam quae aperiam exercitationem!
            </span>
            <div class="banner-dowloads">
                Download on 
            </div>
            <div class="banner-stores">
                <div class="banner-store-link" @click="openLink('google')">
                    <img src="https://img.icons8.com/ios/50/000000/google-play--v1.png" class="banner-store-icon"/>
                    Google Play
                </div>
                <div class="banner-store-link" @click="openLink('apple')">
                    <img src="https://img.icons8.com/ios/50/000000/apple-app-store--v2.png" class="banner-store-icon"/>
                    App Store
                </div>
            </div>
            
      </div>
      <div class="banner-image">
          <img src="../assets/furniture.png" alt="sofa">
      </div>
   
  </div>
</template>
<script>

export default ({
    setup() {
        const openLink = (url) => {
            if(url === "google"){
                window.open("https://play.google.com/store", '_blank')
            }else{
                window.open("https://www.apple.com/es/app-store/", '_blank')
            }
        }
        return{openLink}
    },

})
</script>


<style>
.banner-image{
    display: flex;
    justify-content: center;
}
.banner-stores{
    display: flex;
}
.banner-store-icon{
    height: 15px;
    width: 15px;

}
.banner-store-link{ 
    cursor: pointer;
    margin-right: 15px;   
    margin-top: 20px;
    width:max-content;
    padding: 10px 30px;
    border-radius: 20px;
    -webkit-box-shadow: 10px 5px 15px 1px rgba(0,0,0,0.18); 
    box-shadow: 10px 5px 15px 1px rgba(0,0,0,0.18);
}
.banner-dowloads{
    
    font-size: 20px;
    font-weight: bold;
    margin-top: 5px;
}
.banner{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
}
.banner-text {
    width: 60%;
}
.banner-title {
    font-size: 50px;
    font-weight: bold;
}
.banner-logo {
    color: #f83a26;
}
@media (max-width: 1100px) { 
    .banner-text{
        width: 100%;
    }
    .banner-image{
        width: 100%;
    }
 }
</style>
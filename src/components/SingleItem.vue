<template>
  <div class="item">
    <div class="image-background">
    <img :src=item.image alt="item photo" class="itemImg">
    </div>
    <div class="item-information">
        <p class="furniture-name">
            {{item.name}}
        </p>
        <p class="furniture-designer">
            {{designerUpper}}
        </p>
        <div class="item-footer">
            <p class="furniture-price">
                {{item.price}}€
            </p>
            <RoundButton :name="'Details'" :params="{id: item.id}" > +</RoundButton>
        </div>
        
    </div>

  </div>
</template>

<script>
import { computed } from 'vue'
import RoundButton from "./RoundButton.vue"
export default {
  props: ['item'],
  components: {RoundButton},
  setup(props) {
    const designerUpper = computed(() => {
      return props.item.designer.toUpperCase();
    })
    return { designerUpper }
  }
}
</script>

<style>

.furniture-price{
    font-size: 20px;
}
.item-footer{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.furniture-designer{
    margin-top: 3px;
    color:  #D1D4D7;;
}
.furniture-name{
    font-weight: bold;
    margin-bottom: 3px;
}
.image-background {
    background-color: #D1D4D7;
    border-radius: 10px;
    width: 200px;
    height: 200px;
    align-items: center;
    justify-content: center;
    display: flex;
}
.itemImg {
    max-height: 200px;
    max-width: 200px;
}
.item-information{
    text-align: initial;
}
.item{
    width: 200px;
    text-align: center;
    padding: 10px;
    border-radius: 20px;
    -webkit-box-shadow: 10px 5px 15px 1px rgba(0,0,0,0.18); 
    box-shadow: 10px 5px 15px 1px rgba(0,0,0,0.18);
    max-width: 215px;
    margin-right: 20px;
}
</style>
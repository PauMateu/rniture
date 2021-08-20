<template>
  <div v-if="error">hey</div>
  <div v-if="item" class="details">
    <div class="details-text">
      <h3 class="details-item-name">{{ item.name }}</h3>
      <h4 class="details-item-designer">{{ item.designer }}</h4>
      <div v-if="item.tags">
        <div v-for="tag in item.tags" :key="tag" class="pill">
          <span>{{ tag }}</span>
        </div>
      </div>
      <p class="pre">{{ item.description}}</p>
      <div class="details-item-shop">
        <p class="details-item-price"></p>
        <p class="details-item-buy"> {{item.price}}€ - <span class="details-item-color">Buy now</span> </p>
      </div>
      <a  @click="$router.go(-1)" class="details-item-back">← GO BACK</a> 
      
    </div>
    <img :src="item.image" alt="" class="details-item-image">
  </div>
  <div v-else>
    <Spinner />
  </div>
 
</template>

<script>
import getItem from '@/composables/getItem'

// component imports
import Spinner from '../components/Spinner.vue'

export default {
  props: ['id'],
  components: { Spinner },
  setup(props) {
    const { error, item, load } = getItem(props.id)
    load()
    return { error, item }
  },
}
</script>

<style scoped>
h4{
  margin-bottom: 0;
}
.details-item-back {
  color:  #D1D4D7;
  font-weight: 100;
}
.details-item-back:hover{
  cursor: pointer;
}
.details-item-shop {
  display: flex;
  align-items: center;
}
.details-item-buy {

  padding: 20px;
  -webkit-box-shadow: 10px 5px 15px 1px rgba(0,0,0,0.18); 
  box-shadow: 10px 5px 15px 1px rgba(0,0,0,0.18);
  border-radius: 20px;
  width: max-content;
  font-weight: bold;
  transition: ease 0.3s;
}
.details-item-buy:hover {
  color:#f83a26;
}
.details-text{
  width: 60%;
}
.details-item-image{
  max-width: 250px;
  border-radius: 20px;
  -webkit-box-shadow: 10px 5px 15px 1px rgba(0,0,0,0.18); 
  box-shadow: 10px 5px 15px 1px rgba(0,0,0,0.18);
  margin: 20px;
  padding: 20px;
}
  .details{
    display: flex;
    align-items:flex-start;
    justify-content: space-around;
    margin-top: 60px;
  }
  .details-item-name {
    font-size: 55px;
    font-weight: bold;
    margin-bottom: 0;
  }
  .details-item-designer {
    font-size: 30px;
    font-weight: 100;
    color: #f83a26;
    margin-top: 0;
  }
  .details-item-color {
        color: #f83a26;
  }
  .details-item-price {
    font-size: 30px;
    font-weight: lighter;
  }
    .pill {
    display: inline-block;
    margin: 20px 10px 0 0;
    padding: 6px 12px;
    background: #f83a26;
    border-radius: 20px;
    font-size: 14px;
    letter-spacing: 1px;
    font-weight: bold;
    color: white;
    cursor: pointer;
  }
</style>
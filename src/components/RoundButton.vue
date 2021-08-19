<template>
  <router-link :to="{ name:name, params:params}" class="round-button">
      <slot> </slot>
  </router-link>
</template>

<script>
export default {
    props: ['name', 'params'],
    setup (props) {
         console.log(props.params)
    }
}
</script>

<style>
.round-button {
    display:block;
    width:40px;
    height:40px;
    line-height:40px;
    border-radius: 50%;
    color:#f5f5f5;
    text-align:center;
    text-decoration:none;
    background: #2d2942;
    font-size:20px;
    font-weight:bold;
    transition: 0.3s;

}
.round-button:hover{

  background-color: #f83a26;
}
</style>
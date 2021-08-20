<template>
    <div class="filter-bar">
        <div v-for="filter in filters" :key="filter.value">
            <router-link :to="`allproducts?type=${filter.value}`" class="navbar-link">
            <FilterBarIcon :filter="filter" />
            </router-link>
        </div>
    </div>
</template>

<script>
import FilterBarIcon from './FilterBarIcon.vue';
import { ref } from 'vue'
export default {
    components: {FilterBarIcon},
    setup(){
        const filters = ref([
            {
                "label": "All",
                "value":"all",
                "url":"https://img.icons8.com/ios/50/000000/furniture.png"
            },
            {
                "label":"Chairs",
                "value":"chair",
                "url": "https://img.icons8.com/ios/50/000000/office-chair-2.png" },
            {
                "label":"Sofas",
                "value":"sofa",
                "url":"https://img.icons8.com/ios/50/000000/three-seater-sofa.png"},
            {
                "label":"Tables",
                "value":"table",
                "url":"https://img.icons8.com/ios/50/000000/tablecloth.png"},
            { 
                "label":"Lamps",
                "value":"lamp",
                "url":"https://img.icons8.com/ios/50/000000/lamp.png"}
        ])
        return{filters};
    }
}
</script>

<style>
.filter-bar {
    margin: 35px;
    align-items: center;
    justify-content: center;
    display: flex;
    text-align: center;
}
</style>
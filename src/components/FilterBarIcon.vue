<template>
<div class="filterBarIcon">
    <div class="filterBarIcon-outline">
        <img :src="filter.url" class="filterBarIcon-image"/>
    </div>
    <p class="filterBarIcon-label">{{filter.label}}</p>
</div>
</template>

<script>
export default {
    props: ['filter'],
}
</script>

<style>
.filterBarIcon-label{
    margin: 0;
    color: #2d2942;
}
.filterBarIcon{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-left: 20px;
    transition: ease 0.3s;
}
.filterBarIcon-outline {
    height: 50px;
    width: 50px;
    border: 2px solid #2d2942;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: ease 0.3s;
}
.filterBarIcon-image{
    max-height: 35px;
    max-width: 35px;
}
.filterBarIcon:hover .filterBarIcon-label{
   color: #f83a26;
}
.filterBarIcon:hover .filterBarIcon-outline {
     border: 2px solid #f83a26;
}
</style>
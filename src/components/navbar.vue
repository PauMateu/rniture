<template>
    <div id="nav">
    <div class="logo-navbar">
        .rniture
    </div>
    <div class="links">
        <router-link to="/" class="navbar-link">Home</router-link> 
        <router-link to="/allproducts" class="navbar-link">All products</router-link>
        <router-link to="/" class="navbar-link">
            <div class="new-item">
                New item    
            </div>    
        </router-link> 
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
.links{
    display: flex;
    align-items: center;
}
.navbar-link {
    margin-left: 10px;
}
.new-item{
    background-color: #2d2942;
    border-radius: 10px;
    padding: 5px 10px;
    color: white;
    text-decoration: none;
}
.logo-navbar {
    color: #f83a26;
    font-size: 28px;
    font-weight: bold;
    border-bottom: 3px solid #f83a26;
}
#nav {
    display: flex;
    justify-content: space-between;

}

#nav a {
  font-weight: bold;
  color: #2d2942;
}

#nav a.router-link-exact-active {
  color: #f83a26;
}
</style>
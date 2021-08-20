<template>
    <div id="nav">
    <router-link to="/"  class="logo-navbar">
        .rniture
    </router-link>
    <div class="links">
        <router-link to="/" class="navbar-link">Home</router-link> 
        <router-link to="/allproducts" class="navbar-link">All products</router-link>
        <router-link to="/newProduct" class="navbar-link new-item white">
            New item    
        </router-link> 
    </div>

    </div>
  
</template>


<style>
.white {
    color: white !important;
}
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
  color: #f83a26 !important;
}
</style>
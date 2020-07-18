<template>
  <header class="bg-dark" style="position: sticky; top: 0px; z-index: 10000;">
    <div class="container-fluid">
      <div class="row">
        <div class="col p-0">
          <nav class="navbar navbar-expand-lg navbar-dark">
            <a class="navbar-brand" href="#">
              <img src="https://getbootstrap.com/docs/4.5/assets/brand/bootstrap-solid.svg" width="30" height="30"
                class="d-inline-block align-top" alt="" loading="lazy" />
              Kitchen Recipes
            </a>
            <form class="form-inline d-none d-lg-block">
              <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
                Search
              </button>
            </form>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <li class="nav-item dropleft">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false">
                    Dropdown
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item text-secondary" href="#">
                      <img src="../assets/img/chicken.svg" alt="" style="width: 30px;">
                      Chicken
                    </a>
                    <a class="dropdown-item text-secondary" href="#">
                      <img src="../assets/img/Fish.svg" alt="" style="width: 30px;">
                      Fish
                    </a>
                    <a class="dropdown-item text-secondary" href="#">
                      <img src="../assets/img/ensalad.svg" alt="" style="width: 30px;">
                      Ensalad
                    </a>
                    <a class="dropdown-item text-secondary" href="#">
                      <img src="../assets/img/marine.svg" alt="" style="width: 30px;">
                      Seafood
                    </a>
                    <a class="dropdown-item text-secondary" href="#">
                      <img src="../assets/img/meat.svg" alt="" style="width: 30px;">
                      Meat
                    </a>
                    <a class="dropdown-item text-secondary" href="#">
                      <img src="../assets/img/cake.svg" alt="" style="width: 30px;">
                      Cake
                    </a>
                    <a class="dropdown-item text-secondary" href="#">
                      <img src="../assets/img/bread.svg" alt="" style="width: 30px;">
                      Bread
                    </a>
                  </div>
                </li>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: 'HeaderComponent'
}
</script>
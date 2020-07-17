<template>
  <header>
    <div class="container-fluid">
      <div class="row">
        <div class="col p-0">
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="#">
              <img src="https://getbootstrap.com/docs/4.5/assets/brand/bootstrap-solid.svg" width="30" height="30"
                class="d-inline-block align-top" alt="" loading="lazy" />
              Payment-Form
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
                <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
                <a class="nav-item nav-link" href="#">Features</a>
                <a class="nav-item nav-link" href="#">Pricing</a>
                <a class="nav-item nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
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
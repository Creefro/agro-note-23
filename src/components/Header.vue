<template>
  <div class="home">
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">AgroNote 23</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link active" to="/">Ana Menü</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link active" to="/maaliyet-cizelgesi">Maaliyet Çizelgesi</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link active" to="/arazi">Arazideki Sorunlar</router-link>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Bayi ile İletişim
                </a>
              <ul class="dropdown-menu">
                <li> <a class="dropdown-item" href="#">Telefon</a>
                </li>
                <li> <a class="dropdown-item" href="#">SMS</a>
                </li>
                <li> <a class="dropdown-item" href="mailto:someone@example.com">E-posta</a>
                </li>
                <li> <a class="dropdown-item" href="#">WhatsApp</a>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Depo
                </a>
              <ul class="dropdown-menu">
                <li> <router-link class="dropdown-item" to="/depo">Zirai Depo</router-link>
                </li>
                <li> <router-link class="dropdown-item" to="/depo-urunler">Depodaki Ürünler</router-link>
                </li>
              </ul>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>
  
<script>
export default {
  name: 'HeaderSection',
  components: {
  }
}
</script>
  
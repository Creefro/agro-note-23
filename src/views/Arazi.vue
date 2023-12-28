<template>
  <div class="card">
    <h5 class="card-header">Arazideki Sorunlar</h5>
    <div class="card-body">
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Kontrolün Yapıldığı Yer</th>
            <th scope="col">Fotoğraf</th>
            <th scope="col">Önemli Notlar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>İzmir</td>
            <td>
              <img
                class="img-thumbnail"
                width="100"
                height="100"
                src="../assets/zararlı_1.jpeg"
              />
            </td>
            <td>Patates böcekleri</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Manisa</td>
            <td><img
                class="img-thumbnail"
                width="100"
                height="100"
                src="../assets/zararlı_2.jpeg"
              /></td>
            <td>Zararlı 2</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Aydın</td>
            <td><img
                class="img-thumbnail"
                width="100"
                height="100"
                src="../assets/zararlı_3.jpeg"
              /></td>
            <td>Zararlı 3</td>
          </tr>
        </tbody>
      </table>
      <div class="mb-3">
        <label for="formFileMultiple" class="form-label"
          >Multiple files input example</label
        >
        <input
          class="form-control"
          type="file"
          id="formFileMultiple"
          @change="onFileChanged($event)"
          multiple
          accept="image/*"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { onMounted, ref } from "vue";

export default {
  name: "AraziSection",
  setup() {
    function onFileChanged(e) {
      console.log(e.target.value);
    }
    const image = ref();
    onMounted(() => {});
    return {
      image,
      onFileChanged,
    };
  },
};
</script>

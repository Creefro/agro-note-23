<template>
  <div class="card">
    <h5 class="card-header">Zirai Depo</h5>
    <div class="card-body">
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">İlacın Adı</th>
            <th scope="col">Adet</th>
            <th scope="col">Son alınma tarihi</th>
            <th scope="col">Son alınma adedi</th>
            <th scope="col">Son kullanılma tarihi</th>
            <th scope="col">Son kullanılan adet</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="veri in tableData" :key="veri.id">
            <th scope="row">{{ veri.adı }}</th>
            <td>{{ veri.adet }}</td>
            <td>{{ veri.giris.tarih }}</td>
            <td>{{ veri.giris.adet }}</td>
            <td>{{ veri.cikis.tarih }}</td>
            <td>{{ veri.cikis.adet }}</td>
          </tr>
        </tbody>
      </table>
      <div class="">
        <button
          @click="islem = 'Giriş'"
          type="button"
          class="btn btn-primary me-2"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          Alınan Ürün
        </button>
        <button
          @click="islem = 'Çıkış'"
          type="button"
          class="btn btn-primary ms-2"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          Kullanılan Ürün
        </button>
      </div>

      <!-- Modal -->
      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">
                İlaç {{ islem }} İşlemi
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="mb-2 d-flex flex-row justify-content-between">
                <label for="">QR</label>
                <input v-model="ilac.id" type="text" />
              </div>
              <div class="mb-2 d-flex flex-row justify-content-between">
                <label for="">Adet</label>
                <input v-model="ilac.adet" type="number" />
              </div>
              <div
                v-if="!isExists"
                class="mb-2 d-flex flex-row justify-content-between"
              >
                <label for="">Ürün Adı</label>
                <input v-model="ilac.adı" type="number" />
              </div>
            </div>
            <div class="modal-footer">
              <button
                @click="close()"
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Çık
              </button>
              <button
                @click="submit()"
                type="button"
                class="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Ürün girişi
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, onUpdated, ref } from "vue";
import depo from "@/data/depo.json";

export default {
  name: "DepoSection",
  components: {},
  setup() {
    const islem = ref();
    const isExists = ref(true);
    const ilac = ref({
      id: String,
      adı: String,
      adet: Number,
    });
    onMounted(() => {
      tableData.value = depo;
      ilac.value = {};
    });
    onUpdated(() => {});
    const tableData = ref({});
    function submit() {
      const date = new Date();

      let day = date.getDate();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();

      // This arrangement can be altered based on how we want the date's format to appear.
      let currentDate = `${day}.${month}.${year}`;
      let obj = {};
      if (islem.value == "Giriş") {
        if (tableData.value.filter((a) => a.id == ilac.value.id)[0]) {
          obj = tableData.value.filter((a) => a.id == ilac.value.id)[0];
          obj.adet += ilac.value.adet;
          obj.giris.tarih = currentDate;
          obj.giris.adet = ilac.value.adet;
          ilac.value = {};
        } else {
          console.log("yeni ürün giriş");
          // isExists.value = false
          // obj.id = ilac.value.id
          // obj.adet = ilac.value.adet
          // obj.adı = ilac.value.adı
          // obj.giris.tarih = currentDate
          // obj.giris.adet = ilac.value.adet
          // tableData.value.push(obj)
        }
      } else {
        if (tableData.value.filter((a) => a.id == ilac.value.id)[0]) {
          obj = tableData.value.filter((a) => a.id == ilac.value.id)[0];
          obj.adet -= ilac.value.adet;
          obj.cikis.tarih = currentDate;
          obj.cikis.adet = ilac.value.adet;
          ilac.value = {};
        } else {
          window.alert("Ürün Bulunamadı");
        }
      }
    }
    function close() {
      ilac.value = {};
    }
    return {
      tableData,
      islem,
      submit,
      ilac,
      close,
      isExists,
    };
  },
};
</script>

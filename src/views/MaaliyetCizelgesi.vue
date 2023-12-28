<template>
  <div class="card">
    <h5 class="card-header">
      Maaliyet Çizelgesi
    </h5>
    <div class="card-body">
      <div class="row">
        <div
          class="btn-group"
          role="group"
          aria-label="Basic radio toggle button group"
        >
          <input
            v-model="spanRadio"
            value="1"
            type="radio"
            class="btn-check"
            name="btnradio"
            id="btnradio1"
            autocomplete="off"
            checked
          />
          <label class="btn btn-outline-primary" for="btnradio1">Günlük</label>

          <input
            v-model="spanRadio"
            value="2"
            type="radio"
            class="btn-check"
            name="btnradio"
            id="btnradio2"
            autocomplete="off"
          />
          <label class="btn btn-outline-primary" for="btnradio2">Aylık</label>

          <input
            v-model="spanRadio"
            value="3"
            type="radio"
            class="btn-check"
            name="btnradio"
            id="btnradio3"
            autocomplete="off"
          />
          <label class="btn btn-outline-primary" for="btnradio3">Yıllık</label>
        </div>
      </div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Tarih</th>
            <th scope="col">BİTKİ KORUMA ÜRÜNLERİ MASRAFI</th>
            <th scope="col">YAKIT MASRAFI</th>
            <th scope="col">ÇALIŞAN MASRAFI</th>
            <th scope="col">TOPLAM</th>
            <th scope="col">GELİR</th>
            <th v-if="spanRadio != 1" scope="col">NET KAZANÇ</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="veri in tableData" :key="veri.tarih">
            <th scope="row">{{ veri.tarih }}</th>
            <td>{{ veri.urun_masraf }}</td>
            <td>{{ veri.yakit }}</td>
            <td>{{ veri.calisan }}</td>
            <td>{{ veri.toplam }}</td>
            <td>{{ veri.gelir }}</td>
            <td v-if="veri.net">{{ veri.net }}</td>
          </tr>
        </tbody>
      </table>
      <!-- Button trigger modal -->
      <button
        v-if="spanRadio == '1'"
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Masraf Giriş
      </button>

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
                Modal title
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="">
                <div class="mb-2 d-flex flex-row justify-content-between">
                  <label class="me-2" for=""
                    >Bitki Koruma Ürünleri Masrafı</label
                  >
                  <input v-model="tableForm.urun_masraf" type="number" />
                </div>
                <div class="mb-2 d-flex flex-row justify-content-between">
                  <label class="me-2" for="">Yakıt Masrafı</label>
                  <input v-model="tableForm.yakit" type="number" />
                </div>
                <div class="mb-2 d-flex flex-row justify-content-between">
                  <label class="me-2" for="">Çalışan Masrafı</label>
                  <input v-model="tableForm.calisan" type="number" />
                </div>
                <div class="mb-2 d-flex flex-row justify-content-between">
                  <label class="me-2" for="">Toplam</label>
                  <input v-model="tableForm.toplam" type="number" />
                </div>
                <div class="mb-2 d-flex flex-row justify-content-between">
                  <label class="me-2" for="">Gelir</label>
                  <input v-model="tableForm.gelir" type="number" />
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                @click="closeModal()"
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Çık
              </button>
              <button
                @click="submitForm()"
                type="button"
                class="btn btn-primary"
              >
                Veri gir
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { onMounted, onUpdated, ref } from "vue";
import gunluk from "@/data/günlükMaaliyetTablosu.json";
import aylik from "@/data/aylikMaaliyetTablosu.json";
import yillik from "@/data/yillikMaaliyetTablosu.json";

export default {
  name: "MaaliyetCizelgesi",
  components: {},
  setup() {
    onMounted(() => {
      tableData.value = gunluk;
    });
    onUpdated(() => {
      switch (parseInt(spanRadio.value)) {
        case 1:
          tableData.value = gunluk;
          break;

        case 2:
          tableData.value = aylik;
          break;

        case 3:
          tableData.value = yillik;
          break;
        default:
          break;
      }
    });
    const tableData = ref({});
    const tableForm = ref({
      tarih: String,
      urun_masraf: Number,
      yakit: Number,
      calisan: Number,
      toplam: Number,
      gelir: Number,
    });
    function closeModal() {
      tableForm.value = {};
    }
    function submitForm() {
      const date = new Date();

      let day = date.getDate();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();

      // This arrangement can be altered based on how we want the date's format to appear.
      let currentDate = `${day}.${month}.${year}`;
      tableForm.value.tarih = currentDate;
      tableData.value.push(tableForm.value);
      console.log(tableData.value);
    }

    const spanRadio = ref("1");
    return {
      tableData,
      tableForm,
      spanRadio,
      closeModal,
      submitForm,
    };
  },
};
</script>

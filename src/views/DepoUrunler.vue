<template>
  <div class="card">
    <h5 class="card-header">Depodaki Ürünler</h5>
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
            <th scope="col">İlacın Adı</th>
            <th scope="col">A ürünü</th>
            <th scope="col">B ürünü</th>
            <th scope="col">C ürünü</th>
            <th scope="col">D ürünü</th>
            <th scope="col">E ürünü</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="veri in tableData" :key="veri.Tarih">
            <th scope="row">{{ veri.Tarih }}</th>
            <td>{{ veri.A_urunu }}</td>
            <td>{{ veri.B_urunu }}</td>
            <td>{{ veri.C_urunu }}</td>
            <td>{{ veri.D_urunu }}</td>
            <td>{{ veri.E_urunu }}</td>
          </tr>
        </tbody>
      </table>
      <button
        v-if="spanRadio == '1'"
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Günlük giriş
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
                Ürün giriş
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div
                v-for="urun in urunlerArr"
                :key="urun.adı"
                class="mb-2 d-flex flex-row justify-content-between"
              >
                <label for="">{{ urun.adı }}</label>
                <input v-model="urun.miktar" type="number" min="0" />
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
import urunler from "@/data/urunler.json";
import urunlerAylik from "@/data/urunlerAylik.json";
import urunlerYillik from "@/data/urunlerYillik.json";

export default {
  name: "DepodakiUrunler",
  components: {},
  setup() {
    const urunlerArr = ref([]);
    const urun = ref([
      {
        adı: String,
        miktar: Number,
      },
    ]);
    onMounted(() => {
      tableData.value = urunler;
      urun.value = {};
      let obj = {};
      for (const key of Object.keys(
        tableData.value[tableData.value.length - 1]
      )) {
        if (key != "Tarih") {
          obj.adı = key;
          obj.miktar = tableData.value[tableData.value.length - 1][key];
          urunlerArr.value.push(obj);
          obj = {};
        }
      }
    });
    onUpdated(() => {
      switch (parseInt(spanRadio.value)) {
        case 1:
          tableData.value = urunler;
          break;

        case 2:
          tableData.value = urunlerAylik;
          break;

        case 3:
          tableData.value = urunlerYillik;
          break;
        default:
          break;
      }
    });
    const tableData = ref({});
    const spanRadio = ref("1");
    function submit() {
      const date = new Date();

      let day = date.getDate();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();

      // This arrangement can be altered based on how we want the date's format to appear.
      let currentDate = `${day}.${month}.${year}`;
      let obj = {};

      obj.Tarih = currentDate;
      urunlerArr.value.forEach((urun) => {
        obj[urun.adı] = urun.miktar;
      });
      tableData.value.push(obj);
    }
    function close() {
      urun.value = {};
    }
    return {
      tableData,
      submit,
      urun,
      close,
      urunlerArr,
      spanRadio,
    };
  },
};
</script>

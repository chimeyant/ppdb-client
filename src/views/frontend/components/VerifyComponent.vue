<template>
  <v-container>
    <v-row class="justify-center pa-2">
      <div class="title">Verifikasi Peserta</div>
      <v-col cols="12">
        <v-sheet
          class="elevation-5 pa-1 mt-5"
          style="width:100%"
        >
          <div class="text-center font-weight-bold">BIDOATA</div>
          <v-col cols="12">
            <div class="d-flex mb-0 mt-0">
              <div class="col-4 pa-0">No. Pendaftar</div>
              <div class="col-1 pa-0">:</div>
              <div class="col-8 pa-0">{{ peserta.nopend  }}</div>

            </div>
            <div class="d-flex">
              <div class="col-4 pa-0">NISN</div>
              <div class="col-1 pa-0">:</div>
              <div class="col-8 pa-0">{{ peserta.nisn  }}</div>
            </div>
            <div class="d-flex">
              <div class="col-4 pa-0">Nama</div>
              <div class="col-1 pa-0">:</div>
              <div class="col-8 pa-0">{{ peserta.nama  }}</div>
            </div>
            <div class="d-flex">
              <div class="col-4 pa-0">TTL</div>
              <div class="col-1 pa-0">:</div>
              <div class="col-8 pa-0">{{ peserta.ttl  }}</div>
            </div>
            <div class="d-flex">
              <div class="col-4 pa-0">Asal Sekolah</div>
              <div class="col-1 pa-0">:</div>
              <div class="col-8 pa-0">{{ peserta.sekolah_asal  }}</div>
            </div>
            <div class="d-flex">
              <div class="col-4 pa-0">Prog. Keahlian</div>
              <div class="col-1 pa-0">:</div>
              <div class="col-8 pa-0">{{ peserta.jurusan  }}</div>
            </div>
            <div class="d-flex">
              <div class="col-4 pa-0">STATUS</div>
              <div class="col-1 pa-0">:</div>
              <div :class="peserta.status=='BELUM DITERIMA' ? `col-8 pa-0 red--text font-weight-bold` : peserta.status=='DITERIMA' ? `col-8 pa-0 font-weight-bold green--text ` : '' ">{{ peserta.status  }}</div>
            </div>
          </v-col>

        </v-sheet>

      </v-col>

    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "PengumumanComponent",
  components: {},
  data: () => ({
    headers: [
      { text: "#", value: "num", sortable: false },
      { text: "NISN", value: "nisn", sortable: false },
      { text: "NAMA PESERTA", value: "nama", sortable: false },
      { text: "ASAL SEKOLAH", value: "sekolah", sortable: false },
      {
        text: "PROG. KEAHLIAN",
        value: "jurusan",
        sortable: false,
        align: "center",
      },
    ],
    records: [],
    search: "",
    peserta: {},
  }),
  created() {
    this.setPage({
      crud: false,
    });
  },
  mounted() {
    this.fetchBiodata();
  },
  computed: {
    ...mapState(["device", "theme", "info", "table", "loading", "http"]),
  },
  methods: {
    ...mapActions(["setPage"]),
    fetchBiodata: async function () {
      try {
        let { data } = await this.http.post("verify", {
          id: this.$route.params.id,
        });
        this.peserta = data;
      } catch (error) {}
    },
  },
  watch: {},
};
</script>

<style>
</style>
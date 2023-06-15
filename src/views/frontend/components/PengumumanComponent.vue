<template>
  <v-container>
    <v-row class="mt-10">
      <v-col :cols="device.desktop ? `6` :`12`">
        <v-row class="justify-center">
          <img
            src="../../../assets/images/Daftar Pengumuman.png"
            alt=""
            srcset=""
            width="60%"
            height="90%"
          >
        </v-row>
      </v-col>
      <v-col :cols="device.desktop ? `6` :`12`">
        <h2 class="mb-3">Daftar Pengumuman</h2>
        Berikut adalah peserta yang telah berhasil dan diterima di {{ info.company }} sebagai Calon Peserta Didik Baru Tahun Pelajaran 2022/2023
      </v-col>
    </v-row>

    <v-col
      cols="12"
      class="mt-10"
    >
      <v-row class="mb-5">
        <v-tooltip
          :color="theme + ` darken-4`"
          bottom
        >
          <template v-slot:activator="{ on }">
            <v-btn
              text
              small
              icon
              v-on="on"
            >
              <v-icon
                color="white"
                @click="fetchPengumuman"
              >refresh</v-icon>
            </v-btn>
          </template>
          <span>Refresh Data</span>
        </v-tooltip>

        <v-col
          :cols="device.desktop ? `4` : `10`"
          class="pa-0"
        >
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Pencarian"
            single-line
            hide-details
            solo
            dense
          ></v-text-field>
        </v-col>
      </v-row>
      <v-data-table
        :headers="headers"
        :items="records"
        :items-per-page="10"
        class="elevation-2"
        :color="theme"
        :loading="loading.table"
        loading-text="Loading... Please wait"
        :search="search"
      >
        <v-progress-linear
          slot="progress"
          :color="theme"
          height="1"
          indeterminate
        ></v-progress-linear>

        <template v-slot:item.status="{ value }">
          <v-chip color="green">{{ value }}</v-chip>
        </template>
      </v-data-table>
    </v-col>

  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Countdown from "vuejs-countdown";
export default {
  name: "PengumumanComponent",
  components: {
    Countdown,
  },
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

    countdown: {
      show: false,
      waktu: "July 1, 2022 15:00:00",
    },
    componentKey: 0,
    stop: true,
  }),
  created() {
    this.setPage({
      crud: false,
    });
  },
  mounted() {
    this.fetchPengumuman();
  },
  computed: {
    ...mapState(["device", "theme", "info", "table", "loading", "http"]),
  },
  methods: {
    ...mapActions(["setPage"]),
    fetchPengumuman: async function () {
      let { data } = await this.http.get("pengumuman");

      this.records = data;
    },
    fetchCountDown: async function () {
      try {
        let {
          data: { countdownshow, countdowntime },
        } = await this.http.get("countdown");
        this.countdown.show = countdownshow;
        this.countdown.waktu = countdowntime;
      } catch (error) {}
    },
  },
  watch: {},
};
</script>

<style>
</style>
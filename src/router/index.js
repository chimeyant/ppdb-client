import Vue from "vue";
import VueRouter from "vue-router";
import Auth from "../providers/AuthProviders";
import BaseFrontend from "../views/frontend/Base.vue";
import Home from "../views/frontend/Home.vue";

import Pagu from "../views/frontend/Pagu.vue";
import DaftarPeserta from "../views/frontend/DaftarPeserta.vue";
import Pengumuman from "../views/frontend/Pengumuman.vue";
import Verify from "../views/frontend/Verifikasi.vue";
import Registrasi from "../views/frontend/Registrasi.vue";
import Login from "../views/frontend/Login.vue";

//import Login from "../views/auth/Login.vue";
//import Register from "../views/auth/Register.vue";

import Dashboard from "../views/backend/pages/Dashboard.vue";

import Base from "../views/backend/Base.vue";

import User from "../views/backend/pages/User.vue";
import Changepwd from "../views/backend/pages/user/Changepwd.vue";
import ProfilAkun from "../views/backend/pages/user/Profil.vue";

//page master data
import MasterProfilSekolah from "../views/backend/pages/masterdata/profilsekolah/Index.vue";
import MasterProgramKeahlian from "../views/backend/pages/masterdata/programkeahlian/Index.vue";
import MasterJalurPendaftaran from "../views/backend/pages/masterdata/jalurpendaftaran/Index.vue";
import MasterParamNilai from "../views/backend/pages/masterdata/paramnilai/Index.vue";
import MasterParamPrestasi from "../views/backend/pages/masterdata/parampretasi/Index.vue";
import MasterDokumen from "../views/backend/pages/masterdata/dokumen/Index.vue";
import MasterPersyaratan from "../views/backend/pages/masterdata/persyaratan/Index.vue";
import MasterJadwal from "../views/backend/pages/masterdata/jadwal/Index.vue";
import MasterRefSekolah from "../views/backend/pages/masterdata/refsekolah/Index.vue";
import MasterProvinsi from "../views/backend/pages/masterdata/provinsi/Index.vue";
import MasterKabuaten from "../views/backend/pages/masterdata/kabupaten/Index.vue";
import MasterKecamatan from "../views/backend/pages/masterdata/kecamatan/Index.vue";
import MasterDesa from "../views/backend/pages/masterdata/desa/Index.vue";

//page varifikator
import VerifikasiIndex from "../views/backend/pages/verfikator/verifikasi/Index.vue";
import VerifikasiForm from "../views/backend/pages/verfikator/verifikasi/Form.vue";
import VerifiedIndex from "../views/backend/pages/verfikator/verifikasi/Verified.vue";
import OlahNilaiIndex from "../views/backend/pages/verfikator/olahnilai/Index.vue";
import OlahNilaiJurusan from "../views/backend/pages/verfikator/olahnilai/Jurusan.vue";

//page master soal
import UjianMasterSoal from "../views/backend/pages/ujian/mastersoal/Index.vue";
import UjianMasterSoalDetail from "../views/backend/pages/ujian/mastersoaldetail/Index.vue";
import UjianMasterSoalDetailCreate from "../views/backend/pages/ujian/mastersoaldetail/CreateSoal.vue";
import UjianMasterSoalDetailEdit from "../views/backend/pages/ujian/mastersoaldetail/EditSoal.vue";
import UjianMasterSoalDetailPreview from "../views/backend/pages/ujian/mastersoaldetail/Preview.vue";

//page jadwal ujian
import JadwalUjianSesi from "../views/backend/pages/ujian/jadwalujiansesi/Index.vue";
import JadwalUjian from "../views/backend/pages/ujian/jadwalujian/Index.vue";
import JadwalUjianPeserta from "../views/backend/pages/ujian/jadwalujianpeserta/Index.vue";
import JadwalUjianAbsen from "../views/backend/pages/ujian/absen/Index.vue";

//PESERTA
import PesertaDashboard from "../views/backend/pages/peserta/dashboard/Index.vue";
import PesertaPendaftaran from "../views/backend/pages/peserta/pendaftaran/Index.vue";
import PesertaBiodata from "../views/backend/pages/peserta/biodata/Index.vue";
import PesertaDokumen from "../views/backend/pages/peserta/dokumen/Index.vue";
import PesertaPermohonan from "../views/backend/pages/peserta/permohonan/Index.vue";
import PesertaCreatePermohonan from "../views/backend/pages/peserta/permohonan/Create.vue";

//Peserta Ujian
import PesertaKonfirmasiMulai from "../views/backend/pages/peserta/ujian/KonfirmasiMulai.vue";
import PesertaLembarSoal from "../views/backend/pages/peserta/ujian/LembarSoal.vue";
import PesertaKonfirmaiSelesai from "../views/backend/pages/peserta/ujian/KonfirmasiSelesai.vue";

import PesertaKonfimasi from "../views/backend/pages/peserta/konfirmasi/Index.vue";

//Daftar Ulang
import DaftarUlangJurusan from "../views/backend/pages/daftarulang/verifikasi/Jurusan.vue";
import DaftarUlangVerifikasiIndex from "../views/backend/pages/daftarulang/verifikasi/Index.vue";

//Utility
import UtilityPengumuman from "../views/backend/pages/utility/pengumuman/Index.vue";
import UtilitySlider from "../views/backend/pages/utility/slider/Index.vue";
import UtilityWa from "../views/backend/pages/utility/wa/Index.vue";
import UserPeserta from "../views/backend/pages/utility/userpeserta/Index.vue";
import UtilityRunWorkers from "../views/backend/pages/utility/runworkers/Index.vue";

//Laporan
import LaporanDataPeserta from "../views/backend/pages/laporan/ExportExcel.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    name: "",
    component: BaseFrontend,
    children: [
      { path: "", redirect: { name: "home" } },
      { path: "home", name: "home", component: Home },
      { path: "pagu", name: "pagu", component: Pagu },

      {
        path: "daftar-peserta",
        name: "daftar-peserta",
        component: DaftarPeserta,
      },
      {
        path: "pengumuman",
        name: "pengumuman",
        component: Pengumuman,
      },
      {
        path: "verify/:id",
        name: "verify",
        component: Verify,
      },
      {
        path: "registrasi",
        name: "registrasi",
        component: Registrasi,
      },
      {
        path: "login",
        name: "login",
        component: Login,
      },
    ],
  },
  {
    path: "/backend",
    name: "",
    meta: {
      auth: true,
    },
    component: Base,
    children: [
      { path: "", redirect: { name: "dashboard" } },
      { path: "dashboard", name: "dashboard", component: Dashboard },
      { path: "user", name: "user", component: User },
      {
        path: "chngpwd",
        name: "chngpwd",
        component: Changepwd,
      },
      {
        path: "profil-akun",
        name: "profil-akun",
        component: ProfilAkun,
      },
      //route master data
      {
        path: "master-profil-sekolah",
        name: "master-profil-sekolah",
        component: MasterProfilSekolah,
      },
      {
        path: "master-program-keahlian",
        name: "master-program-keahlian",
        component: MasterProgramKeahlian,
      },
      {
        path: "master-jalur-pendaftaran",
        name: "master-jalur-pendaftaran",
        component: MasterJalurPendaftaran,
      },
      {
        path: "master-param-nilai",
        name: "master-param-nilai",
        component: MasterParamNilai,
      },
      {
        path: "master-param-prestasi",
        name: "master-param-prestasi",
        component: MasterParamPrestasi,
      },
      {
        path: "master-dokumen",
        name: "master-dokumen",
        component: MasterDokumen,
      },
      {
        path: "master-persyaratan",
        name: "master-persyaratan",
        component: MasterPersyaratan,
      },
      {
        path: "master-jadwal",
        name: "master-jadwal",
        component: MasterJadwal,
      },
      {
        path: "master-refsekolah",
        name: "master-refsekolah",
        component: MasterRefSekolah,
      },
      {
        path: "master-provinsi",
        name: "master-provinsi",
        component: MasterProvinsi,
      },
      {
        path: "master-kabupaten/:province_id",
        name: "master-kabupaten",
        component: MasterKabuaten,
      },
      {
        path: "master-kecamatan/:province_id/:regency_id",
        name: "master-kecamatan",
        component: MasterKecamatan,
      },
      {
        path: "master-kecamatan/:regency_id/:district_id",
        name: "master-desa",
        component: MasterDesa,
      },
      {
        path: "verifikasi-index",
        name: "verifikasi-index",
        component: VerifikasiIndex,
      },
      {
        path: "verifikasi-form/:id",
        name: "verifikasi-form",
        component: VerifikasiForm,
      },
      {
        path: "verified-index",
        name: "verified-index",
        component: VerifiedIndex,
      },
      {
        path: "olahnilai-index/:jurusan_id",
        name: "olahnilai-index",
        component: OlahNilaiIndex,
      },
      {
        path: "olahnilai-jurusan",
        name: "olahnilai-jurusan",
        component: OlahNilaiJurusan,
      },
      {
        path: "daftar-ulang-jurusan",
        name: "daftar-ulang-jurusan",
        component: DaftarUlangJurusan,
      },
      {
        path: "daftar-ulang-verifikasi/:jurusan_id",
        name: "daftar-ulang-verifikasi",
        component: DaftarUlangVerifikasiIndex,
      },
      {
        path: "utility-pengumuman",
        name: "utility-pengumuman",
        component: UtilityPengumuman,
      },
      {
        path: "utility-slider",
        name: "utility-slider",
        component: UtilitySlider,
      },
      {
        path: "utility-wa",
        name: "utility-wa",
        component: UtilityWa,
      },
      {
        path: "utility-run-workers",
        name: "utility-run-workers",
        component: UtilityRunWorkers,
      },
      //Master Ujian
      {
        path: "ujian-master-soal",
        name: "ujian-master-soal",
        component: UjianMasterSoal,
      },
      {
        path: "ujian-master-soal-detail/:id",
        name: "ujian-master-soal-detail",
        component: UjianMasterSoalDetail,
      },
      {
        path: "ujian-master-soal-detail-create/:master_soal_id",
        name: "ujian-master-soal-detail-create",
        component: UjianMasterSoalDetailCreate,
      },
      {
        path: "ujian-master-soal-detail-edit/:master_soal_id/:id",
        name: "ujian-master-soal-detail-edit",
        component: UjianMasterSoalDetailEdit,
      },
      {
        path: "ujian-master-soal-detail-preview/:id",
        name: "ujian-master-soal-detail-preview",
        component: UjianMasterSoalDetailPreview,
      },

      //Jadwal Ujian Sesi
      {
        path: "jadwal-ujian-sesi",
        name: "jadwal-ujian-sesi",
        component: JadwalUjianSesi,
      },
      {
        path: "jadwal-ujian",
        name: "jadwal-ujian",
        component: JadwalUjian,
      },
      {
        path: "jadwal-ujian-peserta",
        name: "jadwal-ujian-peserta",
        component: JadwalUjianPeserta,
      },
      {
        path: "jadwal-ujian-absen",
        name: "jadwal-ujian-absen",
        component: JadwalUjianAbsen,
      },

      //Laporan
      {
        path: "laporan-data-peserta",
        name: "laporan-data-peserta",
        component: LaporanDataPeserta,
      },
    ],
  },
  {
    path: "/peserta",
    component: Base,
    meta: {
      auth: true,
    },
    children: [
      {
        path: "dashboard",
        name: "dashboard-peserta",
        component: PesertaDashboard,
      },
      {
        path: "pendaftaran",
        name: "peserta-pendaftaran",
        component: PesertaPendaftaran,
      },
      {
        path: "biodata",
        name: "biodata-peserta",
        component: PesertaBiodata,
      },
      {
        path: "dokumen",
        name: "peserta-dokumen",
        component: PesertaDokumen,
      },
      {
        path: "permohonan",
        name: "peserta-permohonan",
        component: PesertaPermohonan,
      },
      {
        path: "buat-permohonan",
        name: "peserta-permohonan-create",
        component: PesertaCreatePermohonan,
      },
      {
        path: "konfirmasi-mulai-ujian/:jadwal_ujian_id",
        name: "konfirmasi-mulai-ujian",
        component: PesertaKonfirmasiMulai,
      },
      {
        path: "lembar-soal/:jadwal_ujian_id",
        name: "lembar-soal",
        component: PesertaLembarSoal,
      },
      {
        path: "konfirmasi-selesai-ujian/:jadwal_ujian_id",
        name: "konfirmasi-selesai-ujian",
        component: PesertaKonfirmaiSelesai,
      },
      {
        path: "konfirmasi-daftar-ulang",
        name: "konfirmasi_daftar-ulang",
        component: PesertaKonfimasi,
      },
    ],
  },
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
  mode: "history",
});

/**
 * router match
 */

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.auth);
  if (requiresAuth) {
    if (!Auth.check) {
      next({ name: "login" });
    } else {
      next();
    }
  } else {
    if (to.name === "login" && Auth.check) {
      if (Auth.user.authent == "peserta") {
        next({ name: "dashboard-peserta" });
      } else {
        next({ name: "dashboard" });
      }
    } else {
      next();
    }
  }
});

export default router;

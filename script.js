// ====== KONFIGURASI FRONTEND ======
const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbwTRee3JmvJyM0jk-Lqtt1ioRX2vM_v6IjjaMnlWxI0zK8uM8lSMbhbZzvepr8Jp5cs/exec"; // contoh: [script.google.com](https://script.google.com/macros/s/AKfycbx.../exec)

// ====== UTILITAS SESI LOGIN (LocalStorage) ======
const SESSION_KEY = "absensi_session_v1";

function saveLoginSession(obj){
  localStorage.setItem(SESSION_KEY, JSON.stringify(obj));
}
function getLoginSession(){
  const raw = localStorage.getItem(SESSION_KEY);
  if (!raw) return null;
  try { return JSON.parse(raw); } catch { return null; }
}
function clearLoginSession(){
  localStorage.removeItem(SESSION_KEY);
}
function isSameDate(isoYYYYMMDD, dateObj){
  const d = new Date(isoYYYYMMDD);
  return d.getFullYear()===dateObj.getFullYear() &&
         d.getMonth()===dateObj.getMonth() &&
         d.getDate()===dateObj.getDate();
}

// ====== FORMAT TANGGAL/WAKTU ======
function pad(n){ return n<10 ? "0"+n : ""+n; }
function formatDateDDMMYYYY(d){
  return `${pad(d.getDate())}-${pad(d.getMonth()+1)}-${d.getFullYear()}`;
}
function formatTimeHHMMSS(d){
  return `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
}

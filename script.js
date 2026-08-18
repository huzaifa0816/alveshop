const SUPABASE_URL = "https://lvjcvmpytnwweckrhtjf.supabase.co";
const SUPABASE_KEY = "sb_publishable_g8SteLwdjRXBY-BFjXr7_g_NbKk_wt-";

const supabaseClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);
function buy(product){alert(product + " selected!\n\nConnect your payment gateway here to complete checkout.");}
function openAuthModal() {
  const modal = document.getElementById("authModal");

  if (modal) {
    modal.classList.add("show");
  }
}

function closeAuthModal() {
  const modal = document.getElementById("authModal");

  if (modal) {
    modal.classList.remove("show");
  }
}
function showLogin() {
  document.getElementById("loginForm").style.display = "block";
  document.getElementById("registerForm").style.display = "none";

  document.getElementById("loginTab").classList.add("active");
  document.getElementById("registerTab").classList.remove("active");
}

function showRegister() {
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("registerForm").style.display = "block";

  document.getElementById("registerTab").classList.add("active");
  document.getElementById("loginTab").classList.remove("active");
}
window.showLogin = function () {
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");
  const loginTab = document.getElementById("loginTab");
  const registerTab = document.getElementById("registerTab");

  if (loginForm) loginForm.style.display = "block";
  if (registerForm) registerForm.style.display = "none";

  if (loginTab) loginTab.classList.add("active");
  if (registerTab) registerTab.classList.remove("active");
};

window.showRegister = function () {
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");
  const loginTab = document.getElementById("loginTab");
  const registerTab = document.getElementById("registerTab");

  if (loginForm) loginForm.style.display = "none";
  if (registerForm) registerForm.style.display = "block";

  if (loginTab) loginTab.classList.remove("active");
  if (registerTab) registerTab.classList.add("active");
};

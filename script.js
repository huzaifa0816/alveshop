window.loginUser = async function () {
  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value;

  if (!email || !password) {
    alert("Please enter your email and password.");
    return;
  }

  const { data, error } = await supabaseClient.auth.signInWithPassword({
    email: email,
    password: password
  });

  if (error) {
    alert("Login failed: " + error.message);
    return;
  }

  alert("Login successful! Welcome to ALVE SHOP.");

  closeAuthModal();

  console.log("Logged in user:", data.user);
};
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
window.registerUser = async function registerUser() {
  window.loginUser = async function () {
  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value;

  if (!email || !password) {
    alert("Please enter your email and password.");
    return;
  }

  const { data, error } = await supabaseClient.auth.signInWithPassword({
    email: email,
    password: password
  });

  if (error) {
    alert("Login failed: " + error.message);
    return;
  }

  alert("Login successful! Welcome to ALVE SHOP.");

  closeAuthModal();

  console.log("Logged in user:", data.user);
};
  const email = document.getElementById("registerEmail").value.trim();
  const password = document.getElementById("registerPassword").value;
  const confirmPassword = document.getElementById("registerConfirm").value;

  if (!email || !password || !confirmPassword) {
    alert("Please fill in all fields.");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters.");
    return;
  }

  const { data, error } = await supabaseClient.auth.signUp({
    email: email,
    password: password
  });

  if (error) {
    alert("Registration failed: " + error.message);
    return;
  }

  alert(
    "Account created successfully!\n\nPlease check your email to confirm your account."
  );

  showLogin();
}
async function updateAuthButton() {
  const loginButton = document.querySelector(".login-btn");

  if (!loginButton) return;

  const { data: { session } } = await supabaseClient.auth.getSession();

  if (session) {
    loginButton.textContent = "My Account";
    loginButton.onclick = function (e) {
      e.preventDefault();
      showAccountMenu();
    };
  } else {
    loginButton.textContent = "Login";
    loginButton.onclick = function (e) {
      e.preventDefault();
      openAuthModal();
    };
  }
}


}

supabaseClient.auth.onAuthStateChange(function () {
  updateAuthButton();
});

document.addEventListener("DOMContentLoaded", function () {
  updateAuthButton();
});
function showAccountMenu() {
  const existing = document.getElementById("accountMenu");

  if (existing) {
    existing.remove();
    return;
  }

  const menu = document.createElement("div");
  menu.id = "accountMenu";

  menu.innerHTML = `
    <div class="account-menu-title">My Account</div>
    <div class="account-menu-email" id="accountEmail">Loading...</div>
    <hr>
    <button onclick="logoutUser()">Logout</button>
  `;

  document.body.appendChild(menu);

  supabaseClient.auth.getUser().then(({ data }) => {
    if (data.user) {
      document.getElementById("accountEmail").textContent = data.user.email;
    }
  });
}

window.logoutUser = async function () {
  const { error } = await supabaseClient.auth.signOut();

  if (error) {
    alert("Logout failed: " + error.message);
    return;
  }

  const menu = document.getElementById("accountMenu");
  if (menu) menu.remove();

  updateAuthButton();

  alert("Logged out successfully.");
};

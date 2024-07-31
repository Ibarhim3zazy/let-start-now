  document.querySelector(".card-btn").addEventListener("click", () => {
  document.querySelector(".container").classList.toggle("change");
});
function Ibrahim_mail(copyText = false) {
  if (copyText == true) {
    navigator.clipboard.writeText('ebrahim3zazy@gmail.com');
  }else {
    window.open('mailto:ebrahim3zazy@gmail.com');
  }
}
function Ibrahim_messenger(copyText = false) {
  if (copyText == true) {
    navigator.clipboard.writeText('http://m.me/.Ibrahim3zazy');
  }else {
    window.open('http://m.me/.Ibrahim3zazy');
  }
}
function Ibrahim_whatsapp(copyText = false) {
  if (copyText == true) {
    navigator.clipboard.writeText('01145452440');
  }else {
    window.open('https://wa.me/+201145452440');
  }
}
function Ibrahim_telegram(copyText = false) {
  if (copyText == true) {
    navigator.clipboard.writeText('https://t.me/Ibrahim3zazy');
  }else {
    window.open('https://t.me/Ibrahim3zazy');
  }
}
function Ibrahim_facebook(copyText = false) {
  if (copyText == true) {
    navigator.clipboard.writeText('https://web.facebook.com/Ibrahim3zazy/');
  }else {
    window.open('https://web.facebook.com/Ibrahim3zazy/');
  }
}
function Ibrahim_linkedin(copyText = false) {
  if (copyText == true) {
    navigator.clipboard.writeText('https://www.linkedin.com/in/ibrahim-azazy/');
  }else {
    window.open('https://www.linkedin.com/in/ibrahim-azazy/');
  }
}
function Ibrahim_github(copyText = false) {
  if (copyText == true) {
    navigator.clipboard.writeText('https://github.com/Ibarhim3zazy');
  }else {
    window.open('https://github.com/Ibarhim3zazy');
  }
}
function Ibrahim_sarhne(copyText = false) {
  if (copyText == true) {
    navigator.clipboard.writeText('https://www.sarhne.com/azazi');
  }else {
    window.open('https://www.sarhne.com/azazi');
  }
}


// start toast section
const notifications = document.querySelector(".notifications"),
  buttons = document.querySelectorAll(".buttons .btn")

const toastDetails = {
  timer: 5000,
  success: {
    icon: "fa-circle-check",
    text: "Copied to clipboard successfully.",
  },
  error: {
    icon: "fa-circle-xmark",
    text: "Hello World: This is an error toast.",
  },
  warning: {
    icon: "fa-triangle-exclamation",
    text: "Hello World: This is a warning toast.",
  },
  info: {
    icon: "fa-circle-info",
    text: "Hello World: This is an information toast.",
  },
  random: {
    icon: "fa-solid fa-star",
    text: "Hello World: This is a random toast.",
  },
}

const removeToast = (toast) => {
  toast.classList.add("hide")
  if (toast.timeoutId) clearTimeout(toast.timeoutId)
  setTimeout(() => toast.remove(), 500)
}

const createToast = (id) => {
  const { icon, text } = toastDetails[id]
  const toast = document.createElement("li")
  toast.className = `toast ${id}`
  toast.innerHTML = `<div class="column">
                         <i class="fa-solid ${icon}"></i>
                         <span>${text}</span>
                      </div>
                      <i class="fa-solid fa-xmark" onclick="removeToast(this.parentElement)"></i>`
  notifications.appendChild(toast) 
  toast.timeoutId = setTimeout(() => removeToast(toast), toastDetails.timer)
}

buttons.forEach((btn) => {
  btn.addEventListener("click", () => createToast(btn.id))
})

// end toast section

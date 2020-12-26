/* Hotdog 🌭 Mode */

function setModeEventListener() {
    let list = document.body.classList;
    document.getElementById("toggler").addEventListener("change", event => {
      event.target.checked ? list.add("hotdog-mode") : list.remove("hotdog-mode");
    });
  }

  setModeEventListener();
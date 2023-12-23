async function loadRandomImage() {
  const img = document.getElementsByTagName("img")[0];

  if (img == null) {
    console.log("No image found");
    return;
  }

  const response = await fetch("https://picsum.photos/600/400");
  const blob = await response.blob();

  img.src = URL.createObjectURL(blob);
}

async function loadMeme() {
  const img = document.getElementsByTagName("img")[0];

  if (img == null) {
    console.log("No image found");
    return;
  }

  const resp = await fetch("https://meme-api.com/gimme");
  const json = await resp.json();
  const images = json.preview;

  img.src = images.pop();
}

function initialize() {
  const btn = document.getElementsByTagName("button")[0];
  let clickCount = 0;

  if (btn == null) {
    console.log("No button found");
    return;
  }

  // btn.addEventListener("click", loadRandomImage);
  btn.addEventListener("click", loadMeme);
}

initialize();
loadMeme();

let bobRossImages = [
    "https://bit.ly/3Ck6DTU",
    "https://bit.ly/3ozQCVk",
    "https://bit.ly/3omYDN6",
    "https://bit.ly/3osrfoi",
  ];
  
  const imgs = document.getElementsByTagName("img");
  
  for (image of imgs) {
    const index = Math.floor(Math.random() * bobRossImages.length);
    image.src = bobRossImages[index];
  }

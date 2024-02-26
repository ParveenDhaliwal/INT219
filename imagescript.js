function changeImage(imageUrl) {
    document.getElementById('mainImg').src = imageUrl;
  }
  
  // Optional: Preload images for smoother transition
  const thumbnailImages = document.querySelectorAll('.thumbnail');
  thumbnailImages.forEach(thumbnail => {
    const imageUrl = thumbnail.getAttribute('src');
    const image = new Image();
    image.src = imageUrl;
  });
  
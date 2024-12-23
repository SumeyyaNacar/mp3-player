let progress = document.getElementById('progress');
let song = document.getElementById('song');
let controlIcon = document.getElementById('ctrlIcon');
let volumeControl = document.getElementById('volume');



// Şarkı yüklendiğinde süre bilgilerini ayarla
song.onloadedmetadata = () => {
    progress.max = song.duration;
    progress.value = song.currentTime;
};


// Play/Pause işlevi
function playPause() {
    if (controlIcon.classList.contains("fa-play")) {
        song.play(); // Şarkıyı oynat
        controlIcon.classList.remove("fa-play");
        controlIcon.classList.add("fa-pause");
    } else {
        song.pause(); // Şarkıyı durdur
        controlIcon.classList.remove("fa-pause");
        controlIcon.classList.add("fa-play");
    }
}

// Şarkının ilerleme çubuğunu güncelle
song.ontimeupdate = () => {
    progress.value = song.currentTime;
};
 // İlerleme çubuğunda değişiklik yapıldığında şarkıyı ilgili zamana sar
progress.onchange = () => {
    song.currentTime = progress.value;
    if (song.paused) {
        song.play(); // İleri/geri sarıldıktan sonra şarkıyı çal
        controlIcon.classList.add("fa-pause");
        controlIcon.classList.remove("fa-play");
    }
};
// Ses kontrolünü ayarla

// Ses kaydırma çubuğunu aç/kapat
function toggleVolumeSlider() {
    if (volumeSlider.style.display === "none") {
      volumeSlider.style.display = "block";
    } else {
      volumeSlider.style.display = "none";
    }
  }
  
  // Ses seviyesini güncelle
  volumeSlider.oninput = () => {
    song.volume = volumeSlider.value;
  
    // Ses simgesini ses seviyesine göre değiştir
    if (song.volume === 0) {
      volumeIcon.classList.remove("fa-volume-high", "fa-volume-low");
      volumeIcon.classList.add("fa-volume-xmark");
    } else if (song.volume <= 0.5) {
      volumeIcon.classList.remove("fa-volume-high", "fa-volume-xmark");
      volumeIcon.classList.add("fa-volume-low");
    } else {
      volumeIcon.classList.remove("fa-volume-low", "fa-volume-xmark");
      volumeIcon.classList.add("fa-volume-high");
    }
  };
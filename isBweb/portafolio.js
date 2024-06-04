document.addEventListener('DOMContentLoaded', function () {
    const songs = document.querySelectorAll('.song');
    const player = document.getElementById('player');
    const audio = document.getElementById('audio');

    songs.forEach(song => {
      song.addEventListener('click', function () {
        const src = this.getAttribute('data-src');
        audio.src = src;
        player.style.display = 'block';
        audio.play();
      });
    });
  });


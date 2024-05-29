const posters = document.querySelectorAll('.poster');

    posters.forEach(poster => {
      const posterWidth = poster.width;
      const posterHeight = poster.height;

      poster.addEventListener('mousemove', (e) => {
        const x = (e.clientX - poster.getBoundingClientRect().left) - posterWidth / 2;
        const y = (e.clientY - poster.getBoundingClientRect().top) - posterHeight / 2;

        const xRotation = (x / posterWidth) * 30;
        const yRotation = (y / posterHeight) * -30;

        poster.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
      });

      poster.addEventListener('mouseout', () => {
        poster.style.transform = 'rotateX(0) rotateY(0)';
      });
    });
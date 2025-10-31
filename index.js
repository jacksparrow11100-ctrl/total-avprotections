


  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, {
    threshold: 0.2,
  });

  document.querySelectorAll('.animate-left, .animate-right').forEach(el => {
    observer.observe(el);
  });







  
   const boxes = document.querySelectorAll('.why-box');

  const observerr = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal');
          observerr.unobserve(entry.target); // Trigger once
        }
      });
    },
    {
      threshold: 0.2, // Trigger when 10% is visible
    }
  );

  boxes.forEach(box => {
    observerr.observe(box);
  });

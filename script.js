document.addEventListener("DOMContentLoaded", function() {
  document.body.classList.add("page-enter-active");

  // Highlight active nav link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });

const introText = "Intro: Hi, I am a Computer Science and Engineering student with a strong foundation in programming, data structures, and problem-solving. Passionate about technology, I enjoy developing innovative software solutions and exploring modern tools in AI, machine learning, and web development. Skilled in C, C++, Java, and Python, I aim to build efficient, user-friendly applications. My goal is to contribute creativity and technical expertise to impactful projects that solve real-world challenges";
  const introElement = document.querySelector(".lead");
  if (introElement) {
    const totalDuration = 2000;
    const speed = totalDuration / introText.length;
    typeWriter(introElement, introText, speed);
  }
});

// Typing effect function
function typeWriter(element, text, speed) {
  let i = 0;
  element.textContent = "";
  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

// Example interaction (updated for new button class)
const btn = document.querySelector(".btn-primary");
if (btn) {
  btn.addEventListener("click", function() {
    // Add exit animation before navigating
    document.body.classList.add("page-exit-active");
    setTimeout(() => {
      window.location.href = btn.href;
    }, 500);
  });
}



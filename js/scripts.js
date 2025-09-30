document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".top-nav .nav-right a");
  
    window.addEventListener("scroll", () => {
      let current = "";
  
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 80; // offset for fixed nav
        const sectionHeight = section.clientHeight;
  
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          current = section.getAttribute("id");
        }
      });
  
      // ✅ Handle "bottom of page" case
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
        const lastSection = sections[sections.length - 1];
        current = lastSection.getAttribute("id");
      }
  
      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
          link.classList.add("active");
        }
      });
    });
  });

  <script>
  document.addEventListener('scroll', () => {
    const nav = document.querySelector('.top-nav');
    if (window.scrollY > 10) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });
</script>

  
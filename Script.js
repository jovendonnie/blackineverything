document.addEventListener("DOMContentLoaded", () => {
    const questions = document.querySelectorAll(".faq-question");
  
    questions.forEach((btn) => {
      btn.addEventListener("click", () => {
        const answer = btn.nextElementSibling;
        const isOpen = answer.classList.contains("open");
  
        // Cierra todas las respuestas abiertas
        document.querySelectorAll(".faq-answer").forEach((el) => {
          el.classList.remove("open");
          el.style.maxHeight = null;
        });
  
        // Abre la respuesta si estaba cerrada
        if (!isOpen) {
          answer.classList.add("open");
          answer.style.maxHeight = answer.scrollHeight + "px";
        }
      });
    });
  });
  
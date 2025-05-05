// Обработчик события DOMContentLoaded для выполнения кода, когда весь HTML загружен
document.addEventListener("DOMContentLoaded", () => {
  // Получаем форму регистрации по ID
  const registrationForm = document.getElementById("registrationForm");

  // Проверяем, что форма существует на странице
  if (registrationForm) {
    // Добавляем обработчик события для отправки формы
    registrationForm.addEventListener("submit", function (e) {
      // Предотвращаем стандартное поведение формы (перезагрузку страницы)
      e.preventDefault();

      // Показываем сообщение об успешной регистрации
      document.getElementById("successMessage").classList.remove("hidden");

      // Сбрасываем форму, чтобы очистить поля
      this.reset();

      // Скрываем сообщение через 5 секунд
      setTimeout(() => {
        document.getElementById("successMessage").classList.add("hidden");
      }, 5000);
    });
  }
});

// Второй обработчик для кастомного курсора
document.addEventListener("DOMContentLoaded", () => {
  // Создаём элемент div для кастомного курсора и добавляем его в тело документа
  const cursor = document.createElement("div");
  cursor.id = "custom-cursor";
  document.body.appendChild(cursor);

  // Переменные для хранения текущих и целевых координат мыши
  let mouseX = 0;
  let mouseY = 0;
  let currentX = 0;
  let currentY = 0;

  // Обработчик события движения мыши
  document.addEventListener("mousemove", (e) => {
    // Обновляем координаты мыши
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  // Функция для анимации движения кастомного курсора
  function animateCursor() {
    // Плавное движение курсора: мы интерполируем текущие координаты с целевыми для создания плавного движения
    currentX += (mouseX - currentX) * 0.1; // Скорость 0.1 можно настроить для изменения плавности
    currentY += (mouseY - currentY) * 0.1; // Скорость 0.1 можно настроить для изменения плавности

    // Применяем стили для перемещения курсора на основе вычисленных координат
    cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;

    // Запрашиваем следующую анимацию (для плавного движения)
    requestAnimationFrame(animateCursor);
  }

  // Запускаем анимацию курсора
  animateCursor();
});

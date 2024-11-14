document.addEventListener("DOMContentLoaded", function () {
    const authLink = document.getElementById("authLink");

    // Получаем данные текущего пользователя из localStorage
    const currentUser = localStorage.getItem("currentUser");

    if (currentUser) {
        // Если пользователь авторизован, показываем мини-профиль с фото и ссылкой на user.html
        const user = JSON.parse(currentUser);
        authLink.innerHTML = `
            <a href="user.html">
                <img src="Photos/profile.jpg" alt="User Profile" class="profile-pic" /> 
                (${user.email})
            </a>
        `;
    } else {
        // Если пользователь не авторизован, показываем ссылку на вход/регистрацию
        authLink.innerHTML = '<a href="123.html">Sign in/up</a>';
    }

    // Логика выхода из профиля
    const logoutButton = document.getElementById("logoutButton");
    if (logoutButton) {
        logoutButton.addEventListener("click", function () {
            localStorage.removeItem("currentUser"); // Удаляем информацию о текущем пользователе
            window.location.href = "123.html"; // Перенаправление на страницу входа
        });
    }
});

document.addEventListener("DOMContentLoaded", function() {

$(document).ready(function() {
    $(' input[type="checkbox"]').change(function() {
      if ($(`input[type="checkbox"]`).is(":checked")) {
        $(`.monthly-price`).addClass("d-nones");
        $(`.yearly-price`).removeClass("d-nones");
        $(`.monthly-plan`).addClass("d-nones");
        $(`.yearly-plan`).removeClass("d-nones");
      } else {
        $(`.monthly-price`).removeClass("d-nones");
        $(`.yearly-price`).addClass("d-nones");
        $(`.monthly-plan`).removeClass("d-nones");
        $(`.yearly-plan`).addClass("d-nones");
      }
    });
    $(`.card`).mouseenter(function(item) {
      $(`.card`).removeClass("card-selected");
      item.currentTarget.classList.add("card-selected")
    });
  })


});
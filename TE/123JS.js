document.addEventListener("DOMContentLoaded", function () {
    const signInButton = document.getElementById("signIn");
    const signUpButton = document.getElementById("signUp");
    const container = document.getElementById("container");

    // Переключение на форму регистрации
    signUpButton.addEventListener("click", () => {
        container.classList.add("right-panel-active");
    });

    // Переключение на форму входа
    signInButton.addEventListener("click", () => {
        container.classList.remove("right-panel-active");
    });

    // Регистрация нового пользователя
    const registrationForm = document.querySelector(".sign-up-container form");
    registrationForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const email = registrationForm.querySelector("input[type='email']").value;
        const password = registrationForm.querySelector("input[type='password']").value;

        let users = JSON.parse(localStorage.getItem("users")) || [];
        if (users.some(user => user.email === email)) {
            alert("Этот email уже зарегистрирован.");
            return;
        }

        users.push({ email, password });
        localStorage.setItem("users", JSON.stringify(users));
        alert("Регистрация успешна!");
        container.classList.remove("right-panel-active"); // Переключение на форму входа
    });

    // Вход пользователя
    const loginForm = document.querySelector(".sign-in-container form");
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const email = loginForm.querySelector("input[type='email']").value;
        const password = loginForm.querySelector("input[type='password']").value;

        let users = JSON.parse(localStorage.getItem("users")) || [];
        const user = users.find(user => user.email === email && user.password === password);
        if (user) {
            localStorage.setItem("currentUser", JSON.stringify(user)); // Сохранение информации о вошедшем пользователе
            alert("Вход выполнен успешно!");
            window.location.href = "user.html"; // Переход на страницу профиля
        } else {
            alert("Неверный email или пароль.");
        }
    });

    // Обновление ссылки на вход/профиль в хедере
    const authLink = document.getElementById("authLink");
    const currentUser = localStorage.getItem("currentUser");
    if (currentUser) {
        authLink.innerHTML = '<a href="user.html">Профиль</a>';
    } else {
        authLink.innerHTML = '<a href="123.html">Sign in/up</a>';
    }

    // Выход из профиля
    const logoutButton = document.getElementById("logoutButton");
    if (logoutButton) {
        logoutButton.addEventListener("click", function () {
            localStorage.removeItem("currentUser"); // Удаление информации о текущем пользователе
            window.location.href = "123.html"; // Перенаправление на страницу входа
        });
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const authLink = document.getElementById("authLink");

    // Получаем данные текущего пользователя из localStorage
    const currentUser = localStorage.getItem("currentUser");

    if (currentUser) {
        // Если пользователь авторизован, показываем мини-профиль с фото и ссылкой на user.html
        const user = JSON.parse(currentUser);
        authLink.innerHTML = `
            <a href="user.html">
                <img src="user-profile.jpg" alt="User Profile" class="profile-pic" /> 
                Профиль (${user.email})
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




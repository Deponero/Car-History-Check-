document.addEventListener('DOMContentLoaded', () => {
    // Получаем данные о транспортном средстве из localStorage
    const vehiclesData = JSON.parse(localStorage.getItem('vehicles'));

    if (!vehiclesData) {
        // Если данных нет, выводим сообщение
        alert('Данные о транспортном средстве не найдены.');
        window.location.href = 'Main.html'; // Перенаправляем обратно на главную страницу
        return;
    }

    // Отображаем информацию о транспортном средстве
    const vehiclesContainer = document.getElementById('vehicle-info');
    const vehicle = vehiclesData[0];

    vehiclesContainer.innerHTML = `
        <h2>${vehiclesData.name} (${vehiclesData.year})</h2>
        <img src="${vehiclesData.photo}" alt="${vehiclesData.name}">
        <p><strong>VIN:</strong> ${vehiclesData.vin}</p>
        <p><strong>Номерной знак:</strong> ${vehiclesData.plate}</p>
        <p><strong>Категория:</strong> ${vehiclesData.category}</p>
        <p><strong>Цена на рынке:</strong> ${vehiclesData.marketPrice}</p>
        <h3>Технические данные:</h3>
        <ul>
            <li><strong>Бренд:</strong> ${vehiclesData.technicalDetails.brand}</li>
            <li><strong>Модель:</strong> ${vehiclesData.technicalDetails.model}</li>
            <li><strong>Двигатель:</strong> ${vehiclesData.technicalDetails.engine}</li>
            <li><strong>Производство:</strong> ${vehiclesData.technicalDetails.madeIn}</li>
            <li><strong>Топливо:</strong> ${vehiclesData.technicalDetails.fuelType}</li>
        </ul>
        <h3>История владельцев:</h3>
        <ul>
            ${vehiclesData.ownersHistory.map(owner => `
                <li>Владелец ${owner.ownerNumber}: ${owner.ownershipType}, ${owner.country}, Пробег: ${owner.lastKnownMileage}</li>
            `).join('')}
        </ul>
        <h3>История паспорта:</h3>
        <ul>
            ${vehiclesData.passportHistory.history.map(item => `
                <li>${item.date}: ${item.event}, ${item.state}, Пробег: ${item.mileage}</li>
            `).join('')}
        </ul>
        <h3>Галерея:</h3>
        <div>
            ${vehiclesData.gallery.map(photo => `
                <img src="${photo}" alt="Фото ${vehiclesData.name}">
            `).join('')}
        </div>
    `;
});

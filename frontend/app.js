fetch('/api/items')
    .then(response => response.json())
    .then(items => {
        const list = document.getElementById('items');

        items.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item.name;
            list.appendChild(li);
        });
    })
    .catch(error => {
        console.error('Ошибка загрузки данных:', error);
    });

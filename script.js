let loading = false

fetch('http://localhost:2005/videos')
    .then(response => {
        loading = true
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        const card = document.querySelector(".card");

        card.innerHTML += data.map(item => {
            return `<div>
                <video controls>
                    <source src="${item.src}">
                </video>
                <h1>${item.name}</h1>
            </div>`;
        }).join('');
    })
    .catch(error => console.error('There has been a problem with your fetch operation:', error))
    .finally(() => loading = false)
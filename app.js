document.addEventListener("DOMContentLoaded", () => {
    const emojiContainer = document.getElementById("emoji-container");

    fetch('https://emojihub.yurace.pro/api/all')
        .then(response => response.json())
        .then(data => {
            data.forEach(emoji => {
                const emojiCard = document.createElement('div');
                emojiCard.className = 'emoji-card';
                
                const emojiElement = document.createElement('div');
                emojiElement.className = 'emoji';
                emojiElement.innerHTML = emoji.htmlCode.join('');

                const emojiName = document.createElement('p');
                emojiName.textContent = emoji.name;

                emojiCard.appendChild(emojiElement);
                emojiCard.appendChild(emojiName);

                emojiContainer.appendChild(emojiCard);
            });
        })
        .catch(error => console.error('Error al cargar los datos:', error));
});

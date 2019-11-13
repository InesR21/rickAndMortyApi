let numberPage = 1;
let limit = 5;
window.onload = function () { 
    nextPage();
}
//********************************************************************************/ 
function nextPage() {
     // Replace ./data.json with your JSON feed
        fetch(`https://rickandmortyapi.com/api/character/?page=${numberPage}&limit=${limit}`) 
        .then(response => {
        return response.json();
        })
        .then(data => {
            // Work with JSON data here 
           
            getImgSrc(data);
        })
        .catch(err => {
            // Do something for an error here
            console.log('hubo un error ' , err);
        })
    return numberPage++;
}
//********************************************************************************/ 
function getImgSrc(data) {
    console.log(data);
    const caja = document.getElementById('root');
    imgSrcs = data.results;
    imgSrcs.forEach(imgSrc => {          
        const img = document.createElement('img');
        const h2 = document.createElement('h2');
        const card = document.createElement('div');
            card.setAttribute('class', 'card');
            card.setAttribute('id', 'card');
            caja.appendChild(card);
            card.appendChild(img);
            card.appendChild(h2);
            img.src = imgSrc.image;
            h2.textContent = imgSrc.name;
    });
}

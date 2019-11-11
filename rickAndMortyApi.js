var numberPage = 1;
function nextPage() {
    console.log(numberPage);
return numberPage++;
}
 // Replace ./data.json with your JSON feed
fetch(`https://rickandmortyapi.com/api/character?page=${numberPage}`) 

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
    //********************************************************************************/ 
function getImgSrc(data) {
   
    const caja = document.getElementById('root');
    imgSrcs = data.results;
    
    imgSrcs.forEach(imgSrc => {          
        const img = document.createElement('img');
        const h2 = document.createElement('h2');
        const card = document.createElement('div');
        card.setAttribute('class', 'card');
        caja.appendChild(card);
        card.appendChild(img);
        card.appendChild(h2);
        img.src = imgSrc.image;
        h2.textContent = imgSrc.name;
    });
}

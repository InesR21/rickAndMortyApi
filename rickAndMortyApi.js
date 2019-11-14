    let numberPage = 1;
    window.onload = function () { 
        nextPage();
    }
//***************************Consulta a la API*****************************************************/ 
    function nextPage() {
        // Replace ./data.json with your JSON feed
            fetch(`https://rickandmortyapi.com/api/character/?page=${numberPage}`) 
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
//*****************************Renderización de los datos obtenidos de la API***************************************************/ 
    function getImgSrc(data) {
        //console.log(data.results);
        const caja = document.getElementById('root');
        imgSrcs = data.results;
        imgSrcs.forEach(imgSrc => {          
            const img = document.createElement('img');
            const h2 = document.createElement('h2');
            const card = document.createElement('div');
                card.setAttribute('class', 'card');
                card.setAttribute('id', '');
                caja.appendChild(card);
                card.appendChild(img);
                card.appendChild(h2);
                img.src = imgSrc.image;
                h2.textContent = imgSrc.name;
                card.id =  imgSrc.id;   
                card.addEventListener("click", function(){
                    getCard(card.id, imgSrc, caja);
                }, false);
        });
        
    }
//**************************Muestra el modal con los detalles del personaje******************************************************/ 
    function getCard (id, imgSrc, caja){
        const modal = document.createElement('div');
        const modalHeader = document.createElement('div');
        const modalBody = document.createElement('div');
        const modalFooter = document.createElement('div');
        const name = document.createElement('h4');
        const url = document.createElement('a');
        const close = document.createElement('span');
        const imgModel = document.createElement('img');
        const gender = document.createElement('p');
        const genderSpan = document.createElement('span');
        const genderDiv = document.createElement('div');
        const status = document.createElement('p');
        const statusSpan = document.createElement('span');
        const statusDiv = document.createElement('div');
        const created = document.createElement('p');
        const createdSpan = document.createElement('span');
        const createdDiv = document.createElement('div');
        /*****************************************************************/
        close.setAttribute('class', 'close');
        modal.setAttribute('class', 'modal');
        imgModel.setAttribute('id', 'imgModel')
        modalHeader.setAttribute('class', 'modal-header');
        modalBody.setAttribute('class', 'modal-body');
        modalFooter.setAttribute('class', 'modal-footer');
        status.setAttribute('class', 'status');
        statusDiv.setAttribute('class', 'statusDiv');
        gender.setAttribute('class', 'gender');
        genderDiv.setAttribute('class', 'genderDiv');
        created.setAttribute('class', 'created');
        createdDiv.setAttribute('class', 'createdDiv');

        /*******************************************************************/
        imgModel.src = imgSrc.image;
        name.textContent = imgSrc.name;
        status.textContent = imgSrc.status
        statusSpan.textContent = 'STATUS |'
        genderSpan.textContent = 'Genero |'
        createdSpan.textContent = 'Creado |'
        gender.textContent = imgSrc.gender
        created.textContent =imgSrc.created
        url.href ='https://rickandmortyapi.com/';
        url.textContent = 'Ver Documentacion oficial de esta API'
        close.textContent = 'x';
        /*********************************************************************/
        caja.appendChild(modal);
        modalHeader.appendChild(name);
        modalHeader.appendChild(close);
        modalBody.appendChild(imgModel);
        statusDiv.appendChild(statusSpan);
        statusDiv.appendChild(status);

        genderDiv.appendChild(genderSpan);
        genderDiv.appendChild(gender);
        
        createdDiv.appendChild(createdSpan);
        createdDiv.appendChild(created);

        modalBody.appendChild(statusDiv);
        modalBody.appendChild(genderDiv);
        modalBody.appendChild(createdDiv);

        modalFooter.appendChild(url);
        modal.appendChild(modalHeader);
        modal.appendChild(modalBody);
        modal.appendChild(modalFooter);
        /**********************************************************************/        
        modal.style.display = 'block'
        close.onclick = function() {
            modal.style.display = "none";
        }
        
    
    
}
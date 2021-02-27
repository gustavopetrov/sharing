const buttonIMG = document.getElementById('button-IMG')
const buttonPDF = document.getElementById('button-PDF')

/* 
    El truco esta en saber que una de las propiedades de los
    objetos es URL, que es un OBJ muy amplio.
    Una propiedad interesante, es que es un CONSTRUCTOR
*/
buttonIMG.addEventListener('click', (e) => {
    fetch('assets/dog.jpg')
        .then(res => res.blob())

        // De esta manera obtengo una IMG ROTA.
        // puedo utilizar dog.jpg (el nombre de la img)
        // y funciona perfectamente.
        // .then(img => {
        //     document.getElementById('img').src = img
        // })
        .then(img => {
            document.getElementById('img').src = URL.createObjectURL(img)
        })
})

buttonPDF.addEventListener('click', (e) => {
    fetch('assets/demo.pdf')
        .then(res => res.blob())
        .then(pdf => {
            document.getElementById('pdf').href = URL.createObjectURL(pdf)
        })
})
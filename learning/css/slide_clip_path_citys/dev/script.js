const slide = document.getElementById('slide')
const images = ['americalatina-A3.jpg','argnegra-A3.jpg','laplatanegro-A3.jpg','manhattan-A3.jpg'];

addEventListener('load',(e)=>{
    const fragment = document.createDocumentFragment()
    for (const image of images){
        const img = document.createElement('IMG')
        img.setAttribute('src',`../public/assets/img/${image}`)
        img.classList.add('img')


        img.addEventListener('animationstart', (e)=> {
            e.target.style.zIndex = 2
            if (e.target.nextElementSibling) {
                e.target.nextElementSibling.style.zIndex = 1
            }else {
                slide.firstElementChild.style.zIndex = 1

            }
        })


        img.addEventListener('animationend', (e)=> {
            e.target.removeAttribute('style')
            e.target.classList.remove('img__animate')
            if (e.target.nextElementSibling) {
                e.target.nextElementSibling.classList.add('img__animate')
            }else{
                slide.firstElementChild.classList.add('img__animate')       
            }
        })

        fragment.appendChild(img)
    }
    
    slide.appendChild(fragment)
    slide.firstElementChild.classList.add('img__animate')
})


let scene = {
    before: 0,
    present: 1,
    next: 2
}
let displayScene;

const scrollingModule = () => { 
    const featureContainers = document.getElementsByClassName("feature")
    const featuresSVGArray = Array(...featureContainers).map(feature => {
        return feature.getElementsByTagName("svg")[0]
    })
    const nav = document.getElementsByTagName("nav")[0]

    addEventListener("scroll", ev => {
        
        nav.style.background = scrollY != 0 ? "black" : "none" 
        
        Array(...featureContainers).map(feature => {
            if (feature.getBoundingClientRect().top < 300) {
                feature.style.filter = "grayscale(0)"
            }
            else {
                feature.style.filter = "grayscale(100)"
            }
        })

        featuresSVGArray.forEach(svg => {
            if (svg.getBoundingClientRect().top < 700) {
                svg.style.transform = "scale(1)"
                svg.style.opacity = "100%"
            }
            else {
                svg.style.transform = "scale(0.2)"
                svg.style.opacity = "100%"
            }
           
        })
    })
    
}
scrollingModule();


const storyBoardModule = () => {
    const sbContainer = document.getElementById("sb-container")
    displayScene = (i) => {
        const el = document.getElementById(`sb-scene-${i}`)
        if(el.getAttribute('data-order') == 'next'){
            scene.present = i
            scene.next = i + 1
            scene.before = i -1
            let before = document.getElementById(`sb-scene-${i-1}`)
            before.style.transform = 'scale(0.3)'
            el.style.transform = 'scale(1)'
            let next = document.getElementById(`sb-scene-${i+1}`)
            next.style.display = 'flex'
            next.style.filter =' grayscale(100)';
            next.style.transform = 'scale(.3)';
        }   
    }
        

    for (let i = 1; i < 22; i++) {
        let sbScene = document.createElement('div')
        sbScene.className = 'sb-scene'
        sbScene.id = `sb-scene-${i}`
        sbScene.className = `sb-scene`
        sbScene.setAttribute('onclick', `displayScene(${i})`)
        sbScene.setAttribute('data-id', i)

        let sbOrder = document.createElement('div')
        sbOrder.innerHTML = `<h1>${i}</h1>`
        sbOrder.className = `sb-order`

        let sbImg = document.createElement('div')
        sbImg.className = 'sb-img'
        let img = document.createElement('img')
        img.src = `/static/assets/scenes/${i}.jpg`
        sbImg.appendChild(img)

        sbScene.appendChild(sbOrder)
        sbScene.appendChild(sbImg)
        sbContainer.appendChild(sbScene)
    }
    sbContainer.scrollLeft  = sbContainer.scrollWidth
    // sbContainer.addEventListener('scroll', ev => {
    //     console.log(ev);
    // })
}
storyBoardModule();


const toggleMenu = (action) => {
    const menu = document.getElementById("menu")
    if(action == 'show' && screen.width <= 850){
        menu.style.right = "0rem"
    }
    else if(action == 'hide' && screen.width <= 850){
        menu.style.right = "-20rem"
    }
}
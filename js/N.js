document.addEventListener("DOMContentLoaded", () => {

    const initalize = ()=>{
        windowHeight = window.outerHeight
        history.scrollRestoration = "manual";
      }

      let windowHeight = window.innerHeight
      initalize()


    const Text = document.querySelector('.details_textwrap')
    const Contents = document.querySelectorAll('.details_content')
    const Images = document.querySelectorAll('.details_image_container')

    const observer = new IntersectionObserver(entries=>{
        observer2(entries[0])
    },{threshold:0.5})

    const observer2 = entry=>{
        if(entry.isIntersecting){
            Text.style.animation = 'appear_bottom ease 1.5s'
            Text.style.opacity = 1
    
    setTimeout(()=>{
      Contents.forEach(item=>{
        item.style.animation = 'appear_bottom ease 1.5s'
        item.style.opacity = 1
      })
      
      setTimeout(()=>{
        Images.forEach(item=>{
          item.style.animation = 'appear_bottom ease 1.5s'
          item.style.opacity = 1
        })
      },600)
    },600)
    observer.unobserve(Text)
  }
}
observer.observe(Text)

/* details_ performance img width*/
const walls = document.querySelectorAll('.details2_wall')
const WallPaper = document.querySelector('.details2_wallpaper')
let difference
const WidthControlHandler = ()=>{
    difference = windowHeight - WallPaper.getBoundingClientRect().top
    
    if(difference<=150){
        walls.forEach(item=>
            item.style.width = `200px` )
    }
    else if(difference>150 && difference<700){

        walls.forEach(item=>
            item.style.width = `${-(4/11)*difference + 255 }px`)
    }
    else if(difference>=700){

        walls.forEach(item=>
            item.style.width = '0px')
    }

    // 150 이하면 width 200 그대로, 700 이상이면 width 0
    // windowHeight - home6Wall.getBoundingClientRect().top  == 150 : 200px
    // windowHeight - home6Wall.getBoundingClientRect().top  == 700 : 0px

}

window.addEventListener('scroll', WidthControlHandler)

});
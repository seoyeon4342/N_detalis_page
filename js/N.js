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

/* details_ performance*/
/* width 조절 */
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

}

window.addEventListener('scroll', WidthControlHandler)


/* 기능 소개 */

const ContentImg = document.querySelector('.details2_content > img')
const ContentImg2 = document.querySelector('.details2_content2 > img')
const Text_2 = document.querySelector('.details2_textwrap h2')
const Text_3 = document.querySelector('.details2_textwrap2 h2')
const ContentItem = document.querySelector('.details2_content_item')
const ContentItem2 = document.querySelector('.details2_content2_item')

const details2Event = (item)=>{

let difference = windowHeight - item.getBoundingClientRect().top

if(difference > 150 && difference < item.offsetHeight+200){
    item.style.opacity = (difference-150)/(item.offsetHeight+50)
}else if(difference>item.offsetHeight+200){
    item.style.opacity = 1
}else{
    item.style.opacity = 0
}
}

const details2TransitionEvent = (item)=>{

let difference = windowHeight - item.getBoundingClientRect().top

if(difference > 150 && difference < item.offsetHeight+200){
    item.style.opacity = (difference-150)/(item.offsetHeight+50)
    item.style.transform = `translateY(${-100*(difference-150)/(item.offsetHeight+50)}px)`
}else if(difference>item.offsetHeight+200){
    item.style.opacity = 1
}else{
    item.style.opacity = 0
}
}


const ImgScrollHandler = ()=>{

details2Event(Text_2)
details2Event(Text_3)
details2Event(ContentImg)
details2Event(ContentImg2)
details2TransitionEvent(ContentItem)
details2TransitionEvent(ContentItem2)

}

window.addEventListener('scroll', ImgScrollHandler)

});
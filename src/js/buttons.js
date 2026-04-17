// //=================== button toggle ===================\\
// const buttonVisibleBrands = document.querySelector('#brands__toggle--visible')
// const buttonShowBrands = document.querySelector('#brands__toggle--hidden')
// const parent = document.querySelector('.brands__list')

// buttonVisibleBrands.addEventListener('click', () => {
//   // 1. Находим все элементы внутри блока
//   const elements = parent.querySelectorAll('*')
//   elements.forEach((el) => {
//     if (window.getComputedStyle(el).display === 'none') {
//       el.style.setProperty('display', 'flex')
//     }
//     buttonShowBrands.style.display = 'flex'
//     buttonVisibleBrands.style.display = 'none'
//   })
// })

// buttonShowBrands.addEventListener('click', () => {
//   const elements = parent.querySelectorAll('*')

//   elements.forEach((el) => {
//     if (el.style.display === 'flex') {
//       el.style.display = 'none'
//     }
//     buttonVisibleBrands.style.display = 'flex'
//     buttonShowBrands.style.display = 'none'
//   })
// })

// //=================== button devices ===================\\
// const buttonVisibleDevices = document.querySelector('#devices__toggle--visible')
// const buttonShowDevices = document.querySelector('#devices__toggle--hidden')
// const parentDevices = document.querySelector('.devices__list')

// buttonVisibleDevices.addEventListener('click', () => {
//   // 1. Находим все элементы внутри блока
//   const elements = parentDevices.querySelectorAll('*')
//   elements.forEach((el) => {
//     if (window.getComputedStyle(el).display === 'none') {
//       // 3. Присваиваем style flex
//       el.style.setProperty('display', 'flex')
//     }
//     buttonVisibleDevices.style.display = 'none'
//     buttonShowDevices.style.display = 'flex'
//   })
// })

// buttonShowDevices.addEventListener('click', () => {
//   const elements = parentDevices.querySelectorAll('*')

//   elements.forEach((el) => {
//     if (el.style.display === 'flex') {
//       el.style.display = 'none'
//     }
//     buttonShowDevices.style.display = 'none'
//     buttonVisibleDevices.style.display = 'flex'
//   })
// })

// //=================== button menu ===================\\
// const buttonCloseMenu = document.querySelector('.sidebar__button--burger_exit')
// const buttonOpenMenu = document.querySelector('.menu__button')
// const buttonFeedBackClose = document.querySelector('.feedback__button--close')
// const buttonFeedBackOpen = document.querySelectorAll('.feedback__button')
// const buttonCallBackClose = document.querySelector('.callback__button--close')
// const buttonCallBackkOpen = document.querySelectorAll('.callback__button')

// const overlay = document.querySelector('.overlay')

// const sidebarFeedback = document.querySelector('.sidebar__feedback')
// const sidebarСallback = document.querySelector('.sidebar__callback')
// const sidebarMenu = document.querySelector('.sidebar__menu')

// buttonCallBackkOpen.forEach(function (btn) {
//   btn.addEventListener('click', function () {
//     sidebarFeedback.style.display = 'flex'
//     sidebarСallback.style.display = 'none'
//     overlay.style.display = 'block'
//   })
// })

// buttonCallBackClose.addEventListener('click', function () {
//   sidebarFeedback.style.display = 'none'
//   sidebarСallback.style.display = 'none'
//   overlay.style.display = 'none'
// })

// buttonFeedBackOpen.forEach(function (btn) {
//   btn.addEventListener('click', function () {
//     sidebarFeedback.style.display = 'none'
//     sidebarСallback.style.display = 'flex'
//     overlay.style.display = 'block'
//   })
// })
// buttonFeedBackClose.addEventListener('click', function () {
//   sidebarFeedback.style.display = 'none'
//   sidebarСallback.style.display = 'none'
//   overlay.style.display = 'none'
// })

// buttonOpenMenu.addEventListener('click', function () {
//   sidebarMenu.style.display = 'flex'
//   overlay.style.display = 'block'
// })
// buttonCloseMenu.addEventListener('click', function () {
//   sidebarMenu.style.display = 'none'
//   overlay.style.display = 'none'
// })

//=================== button toggle ===================\\
const buttonVisibleBrands = document.querySelector('#brands__toggle--visible')
const buttonShowBrands = document.querySelector('#brands__toggle--hidden')
const parent = document.querySelector('.brands__list')

buttonVisibleBrands.addEventListener('click', () => {
  const elements = parent.querySelectorAll('*')
  elements.forEach((el) => {
    if (window.getComputedStyle(el).display === 'none') {
      el.style.setProperty('display', 'flex')
    }
    buttonShowBrands.style.display = 'flex'
    buttonVisibleBrands.style.display = 'none'
  })
})

buttonShowBrands.addEventListener('click', () => {
  const elements = parent.querySelectorAll('*')
  elements.forEach((el) => {
    if (el.style.display === 'flex') {
      el.style.display = 'none'
    }
    buttonVisibleBrands.style.display = 'flex'
    buttonShowBrands.style.display = 'none'
  })
})

//=================== button devices ===================\\
const buttonVisibleDevices = document.querySelector('#devices__toggle--visible')
const buttonShowDevices = document.querySelector('#devices__toggle--hidden')
const parentDevices = document.querySelector('.devices__list')

buttonVisibleDevices.addEventListener('click', () => {
  const elements = parentDevices.querySelectorAll('*')
  elements.forEach((el) => {
    if (window.getComputedStyle(el).display === 'none') {
      el.style.setProperty('display', 'flex')
    }
    buttonVisibleDevices.style.display = 'none'
    buttonShowDevices.style.display = 'flex'
  })
})

buttonShowDevices.addEventListener('click', () => {
  const elements = parentDevices.querySelectorAll('*')
  elements.forEach((el) => {
    if (el.style.display === 'flex') {
      el.style.display = 'none'
    }
    buttonShowDevices.style.display = 'none'
    buttonVisibleDevices.style.display = 'flex'
  })
})

//=================== button menu ===================\\
const buttonCloseMenu = document.querySelector(
  '.nav-sidebar__button--burger-exit'
)
const buttonOpenMenu = document.querySelector('.icon-button--burger') // класс кнопки бургер в шапке
const buttonFeedBackClose = document.querySelector(
  '.feedback-sidebar__close-button'
)
const buttonFeedBackOpen = document.querySelectorAll('.feedback__button') // классы кнопок открытия формы обратной связи (не менялись, они в шапке и левом сайдбаре)
const buttonCallBackClose = document.querySelector(
  '.callback-sidebar__close-button'
)
const buttonCallBackOpen = document.querySelectorAll('.callback__button') // классы кнопок открытия формы заказа звонка

const overlay = document.querySelector('.overlay')

const sidebarFeedback = document.querySelector('.feedback-sidebar')
const sidebarCallback = document.querySelector('.callback-sidebar')
const sidebarMenu = document.querySelector('.nav-sidebar')

// Открытие панели заказа звонка (callback)
buttonCallBackOpen.forEach(function (btn) {
  btn.addEventListener('click', function () {
    sidebarCallback.style.display = 'flex'
    sidebarFeedback.style.display = 'none'
    overlay.style.display = 'block'
  })
})

// Закрытие панели заказа звонка (callback)
buttonCallBackClose.addEventListener('click', function () {
  sidebarCallback.style.display = 'none'
  sidebarFeedback.style.display = 'none'
  overlay.style.display = 'none'
})

// Открытие панели обратной связи (feedback)
buttonFeedBackOpen.forEach(function (btn) {
  btn.addEventListener('click', function () {
    sidebarFeedback.style.display = 'flex'
    sidebarCallback.style.display = 'none'
    overlay.style.display = 'block'
  })
})

// Закрытие панели обратной связи (feedback)
buttonFeedBackClose.addEventListener('click', function () {
  sidebarFeedback.style.display = 'none'
  sidebarCallback.style.display = 'none'
  overlay.style.display = 'none'
})

// Открытие главного меню (левая панель)
buttonOpenMenu.addEventListener('click', function () {
  sidebarMenu.style.display = 'flex'
  overlay.style.display = 'block'
})

// Закрытие главного меню
buttonCloseMenu.addEventListener('click', function () {
  sidebarMenu.style.display = 'none'
  overlay.style.display = 'none'
})

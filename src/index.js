// var validate = require("validate.js");
import validate from "validate.js"
import Swiper from 'swiper';
import 'swiper/css';
import './style.css';

import { v4 as uuidv4 } from 'uuid'
import moment from 'moment'
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'))
console.log(moment().format('MMMM Do, h:mm:ss a'))
console.log(moment().format('Do YYYY, h:mm:ss a'))


const form = document.querySelector('.form')
const formInputs = document.querySelectorAll('.form__input')

console.log(uuidv4())
const constraints = {
  email: {
    presence: true,
    email: true
  },
  password: {
    presence: true,
    length: {
      minimum: 6,
      message: "must be at least 6 characters"
    }
  }
}



const onFormSubmit = evt => {
  evt.preventDefault()
  const { email, password } = form.elements
  const validateResult = validate({ email: email.value, password: password.value }, constraints) || {};
  console.log(validateResult)

  formInputs.forEach(input => {
    const errorContainer = form.querySelector(`.form__input-error_type_${input.name}`)
    errorContainer.textContent = validateResult[input.name] ? validateResult[input.name].join(', ') : ''
  })
}


form.addEventListener('submit', onFormSubmit)



const swiper = new Swiper('.swiper', {
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
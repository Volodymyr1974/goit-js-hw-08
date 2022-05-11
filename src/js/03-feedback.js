import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';



const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('textarea'),
  input:document.querySelector('input'),
};


populateEmailMassage();


refs.form.addEventListener('input', throttle(onInput, 500));


function onInput(e) {
  let formData = localStorage.getItem("STORAGE_KEY");
  if (formData) { formData = JSON.parse(localStorage.getItem("STORAGE_KEY")); } else { formData = {}; };


  formData[e.target.name] = e.target.value;
 
  localStorage.setItem("STORAGE_KEY", JSON.stringify(formData));
};


function populateEmailMassage() {
   const parsedformData = JSON.parse( localStorage.getItem("STORAGE_KEY"));
 
  if (parsedformData) {
    refs.input.value = parsedformData['email'] || '';
    refs.textarea.value = parsedformData['message'] || '';
  };
  
};


refs.form.addEventListener('submit', onSubmit);
function onSubmit(e) {
    e.preventDefault();
   
  const newFormData = JSON.parse( localStorage.getItem("STORAGE_KEY"));
  console.log(newFormData);
  e.currentTarget.reset();
  localStorage.removeItem("STORAGE_KEY");  
};
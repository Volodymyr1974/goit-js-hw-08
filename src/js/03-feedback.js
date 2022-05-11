{/* <form class="feedback-form" autocomplete="off">
      <label>
        Email
        <input type="email" name="email" autofocus />
      </label>
      <label>
        Message
        <textarea name="message" rows="8"></textarea>
      </label>
      <button type="submit">Submit</button>
    </form> */}
// import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
console.log(form);
form.addEventListener('input', onInput);
function onInput(e) {
    console.log(e.currrentTarget);
    console.log(e.target);
};
form.addEventListener('submit', onSubmit);
function onSubmit(e) {
    e.preventDefault();
     const {
        elements: { email, message },
     } = e.currentTarget;
     console.log(email.value); console.log(message.value);
    console.log(e.currrentTarget);
    console.log(e.target);
};
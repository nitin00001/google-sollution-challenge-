const financialRadio = document.getElementById('financial');
const foodRadio = document.getElementById('food');
const slider = document.querySelector('.slider');

financialRadio.addEventListener('click', () => {
  slider.classList.remove('food-active');
});

foodRadio.addEventListener('click', () => {
  slider.classList.add('food-active');
});

const handleTransitionEnd = () => {
  slider.classList.remove('sliding');
};

slider.addEventListener('transitionend', handleTransitionEnd);

function moveSlider(activeLabel) {
  slider.classList.add('sliding');
  const sliderWidth = slider.offsetWidth;
  const labelWidth = document.querySelector(` label[ for = "${activeLabel}" ] `).offsetWidth ;
  slider.style.transform = `translateX(${sliderWidth / 2 - labelWidth / 2}px)` ;
}

window.onload = () => {
  const checkedRadio = document.querySelector('input[name="donation-type"]:checked');
  moveSlider(checkedRadio.id);
};

let selection = document.querySelector(".donation-type-switcher") ;
let select= true ;

let financial_donation_form = document.getElementById("financial-donation-form") ;
let food_donation_form = document.getElementById("food-donation-form") ;

food_donation_form.style.display = "none" ;

selection.addEventListener("click", ()=>
{
    ( select == true ) ? select = false : select = true ;
    if(select == true)
    {
        financial_donation_form.style.display = "block" ;
        food_donation_form.style.display = "none" ;
    }
    else
    {
        financial_donation_form.style.display = "none" ;
        food_donation_form.style.display = "block" ;
    }
}) ;

const paymentButton = document.getElementById('gpay-button');

paymentButton.addEventListener('click', () => {
    const paymentDataRequest = {
        // Specify payment details (amount, items, etc.)
    };

    const paymentRequest = new PaymentRequest([{
        supportedMethods: 'https://pay.google.com/gp/p/pay'
    }], paymentDataRequest);

    paymentRequest.show().then(function(paymentResponse) {
        // Handle payment response from Google Pay
    });
});


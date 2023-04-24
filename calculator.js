window.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById("calc-form");
    if (form) {
      setupIntialValues();
      form.addEventListener("submit", function(e) {
        e.preventDefault();
        update();
      });
    }
  });
  
  function getCurrentUIValues() {
    return {
      amount: +(document.getElementById("loan-amount").value),
      years: +(document.getElementById("loan-years").value),
      rate: +(document.getElementById("loan-rate").value),
    }
  }
  
  // Get the inputs from the DOM.
  // Put some default values in the inputs
  // Call a function to calculate the current monthly payment
  function setupIntialValues() {
    const values ={amount:2400 ,
                   years:6,
                   rate:2.4}
      let  amountIn=document.getElementById("loan-amount");
      let yearIn= document.getElementById("loan-years");
      let rateIn =document.getElementById("loan-rate");
      amountIn.value=values.amount;
      yearIn.value=values.years;
      rateIn.value=values.rate;
    }
  // Get the current values from the UI
  // Update the monthly payment
  function update() {
    const currentUIValues = getCurrentUIValues();
    updateMonthlyPayment(calculateMonthlyPayment(currentUIValues));
      
  }
  
  // Given an object of values (a value has amount, years and rate ),
  // calculate the monthly payment.  The output should be a string
  // that always has 2 decimal places.
  function calculateMonthlyPayment(values) {
    const n =values.years*12;
    const monthlyRate= (values.rate/12)/100;
    return values.amount*monthlyRate/1-Math.pow((1+values.rate),-n)
  }
  
  // Given a string representing the monthly payment value,
  // update the UI to show the value.
  function updateMonthlyPayment(monthly) {
    const monthlyUI = document.getElementById("monthly-payment");
    monthlyUI.innerText = "$" + monthly;
  }
  
// *** Write your code here**
let dResult = document.querySelector('[name ="displayResult"]')
     
const calcNumbers = (val) => {
        dResult.value += val;
  }
  
  const clearOneNumber = () =>{
      dResult.value = dResult.value.slice(0,dResult.value.length-1);
  }
   


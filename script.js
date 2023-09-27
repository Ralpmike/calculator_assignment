
let toggleBtn = document.querySelector('#toggler');
let butns = document.querySelector(".buttons")
let togglebox = document.querySelector('.toggle')
let deleBtn = document.querySelector('.delbtn')
let bgColor = document.querySelector('.cal-wrapper')
let inputValue = document.querySelector('input')
let hcolor = document.querySelector('h1')
let buttons = document.querySelectorAll('button')
let resetBtn = document.querySelector('.reset')
let equalBtn = document.querySelector('#evaluate')
let h3color = document.querySelector('h3')
let h2color = document.querySelector('h2')
let toggleBg =document.querySelector('.toggle')
let toggler = document.querySelector('#toggler')


function getValue(value) {
  inputValue.value += value
  value.preventDefault()
  valueReset()
 
}

function displayResult(){
  inputValue.value = eval(inputValue.value);
}

function valueReset() {
  inputValue.value = '';
}

function deleteValue(){
  inputValue.value = inputValue.value.toString().slice(0, -1);
    
  }





let space = 26;
toggleBtn.addEventListener('click', function () {
  toggleBtn.style.left = `${space}px`;
  changeBackground(space)

  space *= 2;
});

function changeBackground(value) {
  if (value == 26) {
    changeThemeOneBg()
   
  } else if (value == 52) {
    changeThemeTwoBg()
  } else {
    toggleBtn.style.left = `0px`;
    location.reload()
  }
}




function changeThemeOneBg() {
  [...buttons].forEach(item => {
    item.style.color= 'hsl(60, 10%, 19%)';
  })
  bgColor.style.backgroundColor = " hsl(0, 0%, 90%)";
  butns.style.backgroundColor = 'hsl(0, 5%, 81%)';
  inputValue.style.backgroundColor = 'hsl(0, 0%, 93%)';
  inputValue.style.color = ' hsl(60, 10%, 19%)';
  hcolor.style.color = 'hsl(60, 10%, 19%)';
  deleBtn.style.color = 'white';
  deleBtn.style.backgroundColor ='hsl(185, 42%, 37%)';
  deleBtn.style.borderColor = ' hsl(185, 58%, 25%)';
  resetBtn.style.color = 'white';
  resetBtn.style.backgroundColor ='hsl(185, 42%, 37%)';
  resetBtn.style.borderColor = 'hsl(185, 58%, 25%)';
  equalBtn.style.color = 'white';
  equalBtn.style.backgroundColor = 'hsl(25, 98%, 40%)';
  equalBtn.style.borderColor = 'hsl(25, 99%, 27%)';
  h3color.style.color = 'hsl(60, 10%, 19%)';
  h2color.style.color = 'hsl(60, 10%, 19%)';
  toggleBg.style.backgroundColor = 'hsl(0, 5%, 81%)';
  toggler.style.backgroundColor = 'hsl(25, 99%, 27%)'
}


function changeThemeTwoBg() {
  bgColor.style.backgroundColor = "  hsl(268, 75%, 9%)"; 
  [...buttons].forEach(item => {
    item.style.color= 'hsl(52, 100%, 62%)';
    item.style.backgroundColor = 'hsl(268, 47%, 21%)'
    item.style.borderColor = 'hsl(290, 70%, 36%)'
  })
  butns.style.backgroundColor = 'hsl(268, 71%, 12%)';
  inputValue.style.backgroundColor = 'hsl(268, 71%, 12%)';
  inputValue.style.color = ' hsl(52, 100%, 62%)';
  hcolor.style.color = ' hsl(52, 100%, 62%)';
  deleBtn.style.color = 'white';
  deleBtn.style.backgroundColor ='hsl(281, 89%, 26%)';
  deleBtn.style.borderColor = 'hsl(285, 91%, 52%)';
  resetBtn.style.color = 'white';
  resetBtn.style.backgroundColor =' hsl(281, 89%, 26%)';
  resetBtn.style.borderColor = 'hsl(285, 91%, 52%)';
  equalBtn.style.color = ' hsl(198, 20%, 13%)';
  equalBtn.style.backgroundColor = 'hsl(176, 100%, 44%)';
  equalBtn.style.borderColor = 'hsl(177, 92%, 70%)';
  h3color.style.color = ' hsl(52, 100%, 62%)';
  h2color.style.color = ' hsl(52, 100%, 62%)';
  toggleBg.style.backgroundColor = 'hsl(268, 71%, 12%)';
  toggler.style.backgroundColor = ' hsl(176, 100%, 44%)'        
}
  



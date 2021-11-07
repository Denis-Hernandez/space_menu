function footer_onClick(value){
  let icon = document.querySelector('.footer__material-icon');
  if(value.checked){
    icon.textContent = 'expand_more';
  }else{
    icon.textContent = 'expand_less';
  }
}

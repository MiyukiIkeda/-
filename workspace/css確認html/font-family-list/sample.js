window.addEventListener('DOMContentLoaded', function(){
  const familyList = document.querySelectorAll('.main_table table td');
  const changeFamily = document.getElementById('sample_area');
  for(let i = 0; i < familyList.length; i++){
    familyList[i].addEventListener('click', function(){
      let val = this.innerText;
      changeFamily.style.fontFamily = "'" + val + "'";
    });
  }
});

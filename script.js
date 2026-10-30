const name = "Md. Rabbil Ali";
  const el = document.getElementById('typed-name');
  let i = 0;
  function type(){
    if(i <= name.length){
      el.innerHTML = name.slice(0, i) + '<span class="cursor"></span>';
      i++;
      setTimeout(type, 65);
    } else {
      el.innerHTML = name + '<span class="cursor"></span>';
    }
  }
  window.addEventListener('DOMContentLoaded', () => setTimeout(type, 300));

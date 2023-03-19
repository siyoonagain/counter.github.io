document.addEventListener('DOMContentLoaded',function(e){

    let btns = document.querySelectorAll(".btn");
    let value = document.querySelector(".num");

    let count = 0;
    btns.forEach(function(btn){
        btn.addEventListener('click',function(e){
           const styles =  e.currentTarget.classList;
           if(styles.contains('less')){
            count--;
           }else if(styles.contains('plus')){
            count++;
           }else{
            count = 0;
           };
           count > 0 ? value.style.color = "green" : count < 0 ?  value.style.color = "red" : value.style.color = "black"
           value.textContent = count;
        });
    });
});

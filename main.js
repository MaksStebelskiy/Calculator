
  var operation;
  function maksFunction1() {
   document.getElementById("myDropdown").classList.toggle("show");
  }
  window.onclick = function(event) {
    if (!event.target.matches('.buttonOperation')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
      function maksFunction2() {
        let result;
        const inputIn1 = parseFloat(document.getElementById('text1').value,10);
        const inputIn2 = parseFloat(document.getElementById('text2').value,10);
        switch (operation) {
          case '1':
            result = inputIn1 * inputIn2;
            break;
          case '2':
            result = inputIn1 / inputIn2;
            break;
          case '3':
            result = inputIn1 + inputIn2;
            break;
          case '4':
            result = inputIn1 - inputIn2;
            break;
            default: 
            result = "Виберіть операцію";
        }
        operation=0;
        document.getElementById("result").value = result;
        document.getElementById("text1").value = "";
        document.getElementById("text2").value = "";
        console.log("Результат: ", result);   
           
    }
  
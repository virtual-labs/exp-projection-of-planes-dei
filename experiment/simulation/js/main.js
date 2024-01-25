//Your JavaScript goes in here

window.addEventListener("load", function () {
    var loader = document.getElementById("loader");
    loader.style.display = "none";
    document.body.style.overflow = 'auto'; // Re-enable scroll bar
  
  });
  
  // ----------------------options-------------------------
  
  function drop() {
    const trans1 = document.getElementById("trans1"); // Assuming 'trans1' is an element ID
    const arr1 = document.getElementById("arr1"); // Assuming 'arr1' is an element ID
    const dropMenu1 = document.getElementById("dropMenu1"); // Assuming 'dropMenu1' is an element ID
    const arrow1 = document.getElementById("arrow1");
    trans1.style.visibility = "hidden";
    arr1.style.visibility = "hidden";
    dropMenu1.style.visibility = "visible";
  
    dropMenu1.addEventListener("change", (evt) => {
      let selectedValue = dropMenu1.value;
      if (selectedValue === "3hPencil") {
        dropMenu1.style.visibility = "hidden";
        document.getElementById("whitebox2").style.visibility = "hidden";
        arrow1.style.visibility = "visible";
      } else {
        alert("Please select 3H Pencil");
      }
    });
  }
  
  
  function drop2() {
    // Assuming 'trans2', 'arr1', 'dropMenu2', and 'arrow1' are HTML elements, fetch them using getElementById.
    const trans2 = document.getElementById("trans2");
    const arr1 = document.getElementById("arr1");
    const arr2 = document.getElementById("arr2");
    const dropMenu2 = document.getElementById("dropMenu2");
    const arrow1 = document.getElementById("arrow1");
  
    // Hide 'trans2', 'arr1', and show 'dropMenu2'
    trans2.style.visibility = "hidden";
    arr1.style.visibility = "hidden";
    dropMenu2.style.visibility = "visible";
  
    // Add a change event listener to 'dropMenu2'
    dropMenu2.addEventListener("change", (evt) => {
      let selectedValue = dropMenu2.value; // Corrected variable name to 'dropMenu2'
  
      if (selectedValue === "hPencil") {
        // If 'hPencil' is selected, hide 'dropMenu2' and 'whitebox3', and show 'arrow1'
        dropMenu2.style.visibility = "hidden";
        document.getElementById("whitebox3").style.visibility = "hidden";
        arr2.style.visibility = "visible";
      } else {
        // If a different value is selected, show an alert
        alert("Please select H Pencil");
      }
    });
  }
  
  function drop3() {
    // Assuming 'trans2', 'arr1', 'dropMenu2', and 'arrow1' are HTML elements, fetch them using getElementById.
    const trans3 = document.getElementById("trans3");
    const arr3 = document.getElementById("arr3");
    const dropMenu3 = document.getElementById("dropMenu3");
    const arrow12 = document.getElementById("arrow12");
  
    // Hide 'trans2', 'arr1', and show 'dropMenu2'
    trans3.style.visibility = "hidden";
    arr3.style.visibility = "hidden";
    dropMenu3.style.visibility = "visible";
  
    // Add a change event listener to 'dropMenu2'
    dropMenu3.addEventListener("change", (evt) => {
      let selectedValue = dropMenu3.value; // Corrected variable name to 'dropMenu2'
  
      if (selectedValue === "3hPencil") {
        // If 'hPencil' is selected, hide 'dropMenu2' and 'whitebox3', and show 'arrow1'
        dropMenu3.style.visibility = "hidden";
        document.getElementById("whitebox4").style.visibility = "hidden";
        arrow12.style.visibility = "visible";
      } else {
        // If a different value is selected, show an alert
        alert("Please select 3H Pencil");
      }
    });
  }
  function drop4() {
    // Assuming 'trans2', 'arr1', 'dropMenu2', and 'arrow1' are HTML elements, fetch them using getElementById.
    const trans3 = document.getElementById("trans3");
    const arr3 = document.getElementById("arr3");
    const dropMenu3 = document.getElementById("dropMenu3");
    const arrow12 = document.getElementById("arrow19");
  
    // Hide 'trans2', 'arr1', and show 'dropMenu2'
    trans3.style.visibility = "hidden";
    arr3.style.visibility = "hidden";
    dropMenu3.style.visibility = "visible";
  
    // Add a change event listener to 'dropMenu2'
    dropMenu3.addEventListener("change", (evt) => {
      let selectedValue = dropMenu3.value; // Corrected variable name to 'dropMenu2'
  
      if (selectedValue === "3hPencil") {
        // If 'hPencil' is selected, hide 'dropMenu2' and 'whitebox3', and show 'arrow1'
        dropMenu3.style.visibility = "hidden";
        document.getElementById("whitebox5").style.visibility = "hidden";
        arrow19.style.visibility = "visible";
      } else {
        // If a different value is selected, show an alert
        alert("Please select 3H Pencil");
      }
    });
  }
  
  function gif1() {
    document.getElementById("one").style.visibility = "hidden";
    document.getElementById("whitebox4").style.visibility = "hidden";
    document.getElementById("arrow12").style.visibility = "hidden";
    document.getElementById("gif1").style.visibility = "visible";
    myTimeout = setTimeout(() => {
      document.getElementById("transbox16").style.visibility = "hidden";
      document.getElementById("gif1").style.visibility = "hidden";
      document.getElementById("two").style.visibility = "visible";
      document.getElementById("next").style.visibility = "visible";
    }, 12000);
  }
  
  function gif2() {
    document.getElementById("two").style.visibility = "hidden";
    document.getElementById("arrow14").style.visibility = "hidden";
    document.getElementById("gif2").style.visibility = "visible";
    myTimeout = setTimeout(() => {
      document.getElementById("transbox2").style.visibility = "hidden";
      document.getElementById("arrow12").style.visibility = "visible";
      document.getElementById("transbox3").style.visibility = "visible";
      document.getElementById("gif2").style.visibility = "hidden";
      document.getElementById("three").style.visibility = "visible";
    }, 7800);
  }
  
  function gif3() {
    document.getElementById("arrow12").style.visibility = "hidden";
    document.getElementById("gif3").style.visibility = "visible";
    document.getElementById("three").style.visibility = "hidden";
    myTimeout = setTimeout(() => {
      document.getElementById("gif3").style.visibility = "hidden";
      document.getElementById("arrow12").style.visibility = "visible";
      document.getElementById("transbox3").style.visibility = "hidden";
      document.getElementById("transbox4").style.visibility = "visible";
      document.getElementById("four").style.visibility = "visible";
    }, 9500);
  }
  
  function gif4() {
    document.getElementById("arrow12").style.visibility = "hidden";
    document.getElementById("five").style.visibility = "hidden";
    document.getElementById("gif4").style.visibility = "visible";
    myTimeout = setTimeout(() => {
      document.getElementById("transbox4").style.visibility = "hidden";
      document.getElementById("gif4").style.visibility = "hidden";
      document.getElementById("six").style.visibility = "visible";
      document.getElementById("next").style.visibility = "visible";
    }, 7800);
  }
  
  function gif5() {
    document.getElementById("arrow12").style.visibility = "hidden";
    document.getElementById("transbox16").style.visibility = "hidden";
    document.getElementById("six").style.visibility = "hidden";
    document.getElementById("gif5").style.visibility = "visible";
    myTimeout = setTimeout(() => {
      document.getElementById("gif5").style.visibility = "hidden";
      document.getElementById("seven").style.visibility = "visible";
      document.getElementById("next").style.visibility = "visible";
    }, 11500);
  }
  
  
  function gif7() {
    document.getElementById("eight").style.visibility = "hidden";
    document.getElementById("transbox18").style.visibility = "hidden";
    document.getElementById("arrow17").style.visibility = "hidden";
    document.getElementById("gif7").style.visibility = "visible";
    myTimeout = setTimeout(() => {
      document.getElementById("nine").style.visibility = "visible";
      document.getElementById("gif7").style.visibility = "hidden";
      document.getElementById("next").style.visibility = "visible";
    }, 9600);
  }
  
  
  function gif8() {
    document.getElementById("ten").style.visibility = "hidden";
    document.getElementById("arrow12").style.visibility = "hidden";
    document.getElementById("transbox18").style.visibility = "hidden";
    document.getElementById("gif8").style.visibility = "visible";
    myTimeout = setTimeout(() => {
      document.getElementById("gif8").style.visibility = "hidden";
      document.getElementById("transbox17").style.visibility = "visible";
      document.getElementById("arrow12").style.visibility = "visible";
      document.getElementById("eleven").style.visibility = "visible";
    }, 5600);
  }
  
  
  function gif9() {
    document.getElementById("eleven").style.visibility = "hidden";
    document.getElementById("arrow12").style.visibility = "hidden";
    document.getElementById("transbox17").style.visibility = "hidden";
    document.getElementById("gif9").style.visibility = "visible";
    myTimeout = setTimeout(() => {
      document.getElementById("arrow12").style.visibility = "visible";
      document.getElementById("transbox16").style.visibility = "visible";
      document.getElementById("gif9").style.visibility = "hidden";
      document.getElementById("twelve").style.visibility = "visible";
    }, 13000);
  }
  
  
  function gif10() {
    document.getElementById("twelve").style.visibility = "hidden";
    document.getElementById("arrow12").style.visibility = "hidden";
    document.getElementById("gif10").style.visibility = "visible";
    myTimeout = setTimeout(() => {
      document.getElementById("next").style.visibility = "visible";
      document.getElementById("gif10").style.visibility = "hidden";
      document.getElementById("thirteen").style.visibility = "visible";
    }, 45000);
  }
  
  function gif11() {
    document.getElementById("fourteen").style.visibility = "hidden";
    document.getElementById("arrow12").style.visibility = "hidden";
    document.getElementById("transbox19").style.visibility = "hidden";
    document.getElementById("gif11").style.visibility = "visible";
    myTimeout = setTimeout(() => {
      document.getElementById("arrow12").style.visibility = "visible";
      document.getElementById("fifteen").style.visibility = "visible";
      document.getElementById("gif11").style.visibility = "hidden";
      document.getElementById("transbox22").style.visibility = "visible";
    }, 22000);
  }
  
  function gif12() {
    document.getElementById("fifteen").style.visibility = "hidden";
    document.getElementById("arrow12").style.visibility = "hidden";
    document.getElementById("transbox22").style.visibility = "hidden";
    document.getElementById("gif12").style.visibility = "visible";
    myTimeout = setTimeout(() => {
      document.getElementById("gif12").style.visibility = "hidden";
      document.getElementById("sixteen").style.visibility = "visible";
      document.getElementById("next").style.visibility = "visible";
    }, 46000);
  }
  
  
  function gif13() {
    document.getElementById("seventeen").style.visibility = "hidden";
    document.getElementById("transbox23").style.visibility = "hidden";
    document.getElementById("arrow13").style.visibility = "hidden";
    document.getElementById("gif13").style.visibility = "visible";
    myTimeout = setTimeout(() => {
      document.getElementById("arrow13").style.visibility = "visible";
      document.getElementById("gif13").style.visibility = "hidden";
      document.getElementById("transbox24").style.visibility = "visible";
      document.getElementById("eighteen").style.visibility = "visible";
    }, 5750);
  }
  
  
  function gif14() {
    document.getElementById("transbox24").style.visibility = "hidden";
    document.getElementById("eighteen").style.visibility = "hidden";
    document.getElementById("arrow13").style.visibility = "hidden";
    document.getElementById("gif14").style.visibility = "visible";
    myTimeout = setTimeout(() => {
      document.getElementById("gif14").style.visibility = "hidden";
      document.getElementById("nineteen").style.visibility = "visible";
      document.getElementById("next").style.visibility = "visible";
    }, 29000);
  }
  
  
  function gif15() {
    document.getElementById("twenty").style.visibility = "hidden";
    document.getElementById("arrow12").style.visibility = "hidden";
    document.getElementById("gif15").style.visibility = "visible";
    myTimeout = setTimeout(() => {
      document.getElementById("gif15").style.visibility = "hidden";
      document.getElementById("twentyone").style.visibility = "visible";
      document.getElementById("next").style.visibility = "visible";
    }, 4300);
  }
  
  
  function gif16() {
    document.getElementById("twentytwo").style.visibility = "hidden";
    document.getElementById("arrow17").style.visibility = "hidden";
    document.getElementById("transbox26").style.visibility = "hidden";
    document.getElementById("gif16").style.visibility = "visible";
    myTimeout = setTimeout(() => {
      document.getElementById("gif16").style.visibility = "hidden";
      document.getElementById("twentythree").style.visibility = "visible";
      document.getElementById("next").style.visibility = "visible";
    }, 7600);
  }
  
  
  function gif18() {
    document.getElementById("transbox19").style.visibility="hidden"
    document.getElementById("twentysix").style.visibility = "hidden";
    document.getElementById("arrow17").style.visibility = "hidden";
    document.getElementById("gif18").style.visibility = "visible";
    myTimeout = setTimeout(() => {
      document.getElementById("gif18").style.visibility = "hidden";
      document.getElementById("twentyseven").style.visibility = "visible";
      document.getElementById("next").style.visibility = "visible";
    }, 9500);
  }
  
  
  function gif19() {
    document.getElementById("transbox19").style.visibility = "hidden";
    document.getElementById("twentyeight").style.visibility = "hidden";
    document.getElementById("arrow17").style.visibility = "hidden";
    document.getElementById("gif19").style.visibility = "visible";
    myTimeout = setTimeout(() => {
      document.getElementById("gif19").style.visibility = "hidden";
      document.getElementById("twentynine").style.visibility = "visible";
      document.getElementById("next").style.visibility = "visible";
    }, 7900);
  }
  
  
  function gif20(){
    document.getElementById("arrow12").style.visibility = "hidden";
    document.getElementById("thirty").style.visibility="hidden";
    document.getElementById("gif20").style.visibility="visible"
    document.getElementById("transbox19").style.visibility="hidden"
    myTimeout=setTimeout(()=>{
      document.getElementById("gif20").style.visibility="hidden"
     document.getElementById("thirtyone").style.visibility="visible";
     document.getElementById("next").style.visibility = "visible";
    },7500)
  }
  
  
  function gif21(){
    document.getElementById("arrow19").style.visibility = "hidden";
    document.getElementById("gif21").style.visibility="visible"
    document.getElementById("transbox29").style.visibility="hidden"
    document.getElementById("thirtythree").style.visibility="hidden"
    myTimeout=setTimeout(()=>{
      document.getElementById("gif21").style.visibility="hidden"
      document.getElementById("arrow19").style.visibility = "visible";
      document.getElementById("transbox30").style.visibility="visible"
     document.getElementById("thirtyfour").style.visibility="visible"
    },3500)
  }
  
  
  function gif22(){
    document.getElementById("arrow19").style.visibility = "hidden";
    document.getElementById("gif22").style.visibility="visible"
    document.getElementById("transbox30").style.visibility="hidden"
    document.getElementById("thirtyfour").style.visibility="hidden"
    myTimeout=setTimeout(()=>{
     document.getElementById("next").style.visibility="visible"
    },8000)
  }
  
  
  function gif59(){
    document.getElementById("arrow19").style.visibility = "hidden";
    document.getElementById("gif22").style.visibility="visible"
    document.getElementById("transbox30").style.visibility="hidden"
    document.getElementById("thirtyfour").style.visibility="hidden"
    myTimeout=setTimeout(()=>{
      document.getElementById("next").style.visibility = "visible";
    },8900)
  }
  
  
  
  function gif23(){
    document.getElementById("arrow19").style.visibility = "hidden";
    document.getElementById("gif23").style.visibility="visible"
    document.getElementById("transbox31").style.visibility="hidden"
    document.getElementById("thirtyfive").style.visibility="hidden"
    myTimeout=setTimeout(()=>{
      document.getElementById("gif23").style.visibility="hidden"
      document.getElementById("arrow19").style.visibility = "visible";
      document.getElementById("transbox32").style.visibility="visible"
      document.getElementById("thirtysix").style.visibility="visible"
    },3700)
  }
  
  function gif60(){
    document.getElementById("arrow19").style.visibility = "hidden";
    document.getElementById("gif23").style.visibility="visible"
    document.getElementById("transbox31").style.visibility="hidden"
    document.getElementById("thirtyfive").style.visibility="hidden"
    myTimeout=setTimeout(()=>{
      document.getElementById("gif23").style.visibility="hidden"
      document.getElementById("arrow19").style.visibility = "visible";
      document.getElementById("transbox32").style.visibility="visible"
      document.getElementById("thirtysix").style.visibility="visible"
    },3600)
  }
  
  function gif24(){
    document.getElementById("arrow19").style.visibility = "hidden";
    document.getElementById("gif24").style.visibility="visible"
    document.getElementById("transbox32").style.visibility="hidden"
    document.getElementById("thirtysix").style.visibility="hidden"
    myTimeout=setTimeout(()=>{
      document.getElementById("gif24").style.visibility="hidden"
      document.getElementById("arrow20").style.visibility = "visible";
      document.getElementById("transbox33").style.visibility="visible"
      document.getElementById("thirtyseven").style.visibility="visible"
    },3900)
  }
  
  function gif61(){
    document.getElementById("arrow19").style.visibility = "hidden";
    document.getElementById("gif24").style.visibility="visible"
    document.getElementById("transbox32").style.visibility="hidden"
    document.getElementById("thirtysix").style.visibility="hidden"
    myTimeout=setTimeout(()=>{
      document.getElementById("gif24").style.visibility="hidden"
      document.getElementById("arrow20").style.visibility = "visible";
      document.getElementById("transbox33").style.visibility="visible"
      document.getElementById("thirtyseven").style.visibility="visible"
    },3400)
  }
  
  function gif25(){
    document.getElementById("arrow20").style.visibility = "hidden";
    document.getElementById("gif25").style.visibility="visible"
    document.getElementById("transbox33").style.visibility="hidden"
    document.getElementById("thirtyseven").style.visibility="hidden"
    myTimeout=setTimeout(()=>{
      document.getElementById("thirtyeight").style.visibility="visible"
      document.getElementById("next").style.visibility="visible"
    },7900)
  }
  
  function gif62(){
    document.getElementById("arrow20").style.visibility = "hidden";
    document.getElementById("gif25").style.visibility="visible"
    document.getElementById("transbox33").style.visibility="hidden"
    document.getElementById("thirtyseven").style.visibility="hidden"
    myTimeout=setTimeout(()=>{
      document.getElementById("next").style.visibility = "visible";
    },8800)
  }
  
  function gif26(){
    document.getElementById("arrow21").style.visibility = "hidden";
    document.getElementById("gif26").style.visibility="visible"
    document.getElementById("transbox34").style.visibility="hidden"
    document.getElementById("thirtyeight").style.visibility="hidden"
    myTimeout=setTimeout(()=>{
      document.getElementById("next").style.visibility = "visible";
    },9500)
  }
  
  function gif27(){
    document.getElementById("arrow22").style.visibility = "hidden";
    document.getElementById("gif27").style.visibility="visible"
    document.getElementById("transbox35").style.visibility="hidden"
    document.getElementById("fourty").style.visibility="hidden"
    myTimeout=setTimeout(()=>{
      document.getElementById("gif27").style.visibility="hidden"
      document.getElementById("arrow22").style.visibility = "visible";
      document.getElementById("fourtyone").style.visibility="visible"
      document.getElementById("transbox36").style.visibility="visible"
    },4900)
  }
  
  function gif64(){
    document.getElementById("arrow15").style.visibility = "hidden";
    document.getElementById("gif27").style.visibility="visible"
    document.getElementById("transbox41").style.visibility="hidden"
    document.getElementById("fourty").style.visibility="hidden"
    myTimeout=setTimeout(()=>{
      document.getElementById("gif27").style.visibility="hidden"
      document.getElementById("arrow15").style.visibility = "visible";
      document.getElementById("fourtyone").style.visibility="visible"
      document.getElementById("transbox53").style.visibility="visible"
    },5800)
  }
  
  function gif28(){
    document.getElementById("arrow22").style.visibility = "hidden";
    document.getElementById("gif28").style.visibility="visible"
    document.getElementById("transbox36").style.visibility="hidden"
    document.getElementById("fourtyone").style.visibility="hidden"
    myTimeout=setTimeout(()=>{
      document.getElementById("gif28").style.visibility="hidden"
      document.getElementById("fourtytwo").style.visibility="visible"
      document.getElementById("next").style.visibility = "visible";
    },2100)
  }
  
  function gif65(){
    document.getElementById("arrow15").style.visibility = "hidden";
    document.getElementById("gif28").style.visibility="visible"
    document.getElementById("transbox53").style.visibility="hidden"
    document.getElementById("fourtyone").style.visibility="hidden"
    myTimeout=setTimeout(()=>{
      document.getElementById("gif28").style.visibility="hidden"
      document.getElementById("fourtytwo").style.visibility="visible"
      document.getElementById("next").style.visibility = "visible";
    },2000)
  }
  
  function gif29(){
    document.getElementById("arrow21").style.visibility = "hidden";
    document.getElementById("gif29").style.visibility="visible"
    document.getElementById("transbox34").style.visibility="hidden"
    document.getElementById("fourtyfour").style.visibility="hidden"
    myTimeout=setTimeout(()=>{
      document.getElementById("gif29").style.visibility="hidden"
      document.getElementById("transbox37").style.visibility="visible"
      document.getElementById("fourtyfive").style.visibility="visible"
      document.getElementById("arrow21").style.visibility = "visible";
    },19300)
  }
  
  function gif66(){
    document.getElementById("arrow18").style.visibility = "hidden";
    document.getElementById("gif66").style.visibility="visible"
    document.getElementById("transbox54").style.visibility="hidden"
    document.getElementById("ninetytwo").style.visibility="hidden"
    myTimeout=setTimeout(()=>{
      document.getElementById("gif66").style.visibility="hidden"
      document.getElementById("transbox29").style.visibility="visible"
      document.getElementById("ninetythree").style.visibility="visible"
      document.getElementById("arrow19").style.visibility = "visible";
    },3700)
  }
  
  function gif30(){
    document.getElementById("arrow21").style.visibility = "hidden";
    document.getElementById("gif30").style.visibility="visible"
    document.getElementById("transbox37").style.visibility="hidden"
    document.getElementById("fourtyfive").style.visibility="hidden"
    myTimeout=setTimeout(()=>{
      document.getElementById("gif30").style.visibility="hidden"
      document.getElementById("arrow21").style.visibility = "visible";
      document.getElementById("transbox38").style.visibility="visible"
      document.getElementById("fourtysix").style.visibility="visible"
    },6000)
  }
  
  function gif67(){
    document.getElementById("arrow19").style.visibility = "hidden";
    document.getElementById("gif67").style.visibility="visible"
    document.getElementById("transbox29").style.visibility="hidden"
    document.getElementById("ninetythree").style.visibility="hidden"
    myTimeout=setTimeout(()=>{
      document.getElementById("gif67").style.visibility="hidden"
      document.getElementById("arrow25").style.visibility = "visible";
      document.getElementById("transbox55").style.visibility="visible"
      document.getElementById("ninetyfour").style.visibility="visible"
    },3900)
  }
  
  function gif68(){
    document.getElementById("arrow25").style.visibility = "hidden";
    document.getElementById("gif68").style.visibility="visible"
    document.getElementById("transbox55").style.visibility="hidden"
    document.getElementById("ninetyfour").style.visibility="hidden"
    myTimeout=setTimeout(()=>{
      document.getElementById("gif68").style.visibility="hidden"
      document.getElementById("arrow27").style.visibility = "visible";
      document.getElementById("transbox56").style.visibility="visible"
      document.getElementById("ninetyfive").style.visibility="visible"
    },7900)
  }
  
  function gif69(){
    document.getElementById("arrow27").style.visibility = "hidden";
    document.getElementById("gif69").style.visibility="visible"
    document.getElementById("transbox56").style.visibility="hidden"
    document.getElementById("ninetyfive").style.visibility="hidden"
    myTimeout=setTimeout(()=>{
      document.getElementById("gif69").style.visibility="hidden"
      document.getElementById("arrow27").style.visibility = "visible";
      document.getElementById("transbox57").style.visibility="visible"
      document.getElementById("nientysix").style.visibility="visible"
    },5700)
  }
  
  function gif70(){
    document.getElementById("arrow27").style.visibility = "hidden";
    document.getElementById("gif70").style.visibility="visible"
    document.getElementById("transbox57").style.visibility="hidden"
    document.getElementById("nientysix").style.visibility="hidden"
    myTimeout=setTimeout(()=>{
      document.getElementById("gif70").style.visibility="hidden"
      document.getElementById("next").style.visibility = "visible";
      document.getElementById("transbox58").style.visibility="visible"
      document.getElementById("hundered").style.visibility="visible"
    },15600)
  }
  
  function gif31(){
    document.getElementById("arrow21").style.visibility = "hidden";
    document.getElementById("gif31").style.visibility="visible"
    document.getElementById("transbox37").style.visibility="hidden"
    document.getElementById("fourtysix").style.visibility="hidden"
    myTimeout=setTimeout(()=>{
      document.getElementById("gif31").style.visibility="hidden"
      document.getElementById("transbox38").style.visibility="visible"
      document.getElementById("next").style.visibility = "visible";
      document.getElementById("fourtyseven").style.visibility="visible"
    },18000)
  }
  
  function gif32(){
    document.getElementById("arrow15").style.visibility = "hidden";
    document.getElementById("gif32").style.visibility="visible"
    document.getElementById("transbox23").style.visibility="hidden"
    document.getElementById("fourtyeight").style.visibility="hidden"
    myTimeout=setTimeout(()=>{
      document.getElementById("gif32").style.visibility="hidden"
      document.getElementById("arrow15").style.visibility = "visible";
      document.getElementById("transbox39").style.visibility="visible"
      document.getElementById("fourtynine").style.visibility="visible"
    },4000)
  }
  
  function gif33(){
    document.getElementById("arrow15").style.visibility = "hidden";
    document.getElementById("gif33").style.visibility="visible"
    document.getElementById("transbox39").style.visibility="hidden"
    document.getElementById("fourtynine").style.visibility="hidden"
    myTimeout=setTimeout(()=>{
      document.getElementById("gif33").style.visibility="hidden"
      document.getElementById("transbox39").style.visibility="visible"
      document.getElementById("next").style.visibility = "visible";
      document.getElementById("fifty").style.visibility="visible"
    },10000)
  }
  
  function gif34(){
    document.getElementById("gif34").style.visibility="visible"
    document.getElementById("transbox23").style.visibility="hidden"
    document.getElementById("arrow15").style.visibility = "hidden";
    document.getElementById("fiftyone").style.visibility="hidden"
    myTimeout=setTimeout(()=>{
      document.getElementById("gif34").style.visibility="hidden"
      document.getElementById("arrow23").style.visibility = "visible";
      document.getElementById("transbox40").style.visibility="visible"
      document.getElementById("fiftytwo").style.visibility="visible"
    },11650)
  }
  
  function gif75(){
    document.getElementById("gif75").style.visibility="visible"
    document.getElementById("transbox54").style.visibility="hidden"
    document.getElementById("arrow18").style.visibility = "hidden";
    document.getElementById("fiftyone").style.visibility="hidden"
    myTimeout=setTimeout(()=>{
      document.getElementById("gif75").style.visibility="hidden"
      document.getElementById("arrow26").style.visibility = "visible";
      document.getElementById("transbox57").style.visibility="visible"
      document.getElementById("fiftytwo").style.visibility="visible"
    },19500)
  }
  
  function gif35(){
    document.getElementById("arrow23").style.visibility = "hidden";
    document.getElementById("gif35").style.visibility="visible"
    document.getElementById("transbox40").style.visibility="hidden"
    document.getElementById("fiftytwo").style.visibility="hidden"
    myTimeout=setTimeout(()=>{
      document.getElementById("arrow15").style.visibility = "visible";
      document.getElementById("gif35").style.visibility="hidden"
      document.getElementById("transbox41").style.visibility="visible"
      document.getElementById("fiftythree").style.visibility="visible"
    },9500)
  }
  
  function gif76(){
    document.getElementById("arrow26").style.visibility = "hidden";
    document.getElementById("gif76").style.visibility="visible"
    document.getElementById("transbox57").style.visibility="hidden"
    document.getElementById("fiftytwo").style.visibility="hidden"
    myTimeout=setTimeout(()=>{
      document.getElementById("next").style.visibility = "visible";
      document.getElementById("gif76").style.visibility="hidden"
      document.getElementById("fiftythree").style.visibility="visible"
    },64500)
  }
  
  function gif36(){
    document.getElementById("gif36").style.visibility="visible"
    document.getElementById("transbox41").style.visibility="hidden"
    document.getElementById("arrow15").style.visibility = "hidden";
    document.getElementById("fiftythree").style.visibility="hidden"
    myTimeout=setTimeout(()=>{
      document.getElementById("gif36").style.visibility="hidden"
      document.getElementById("arrow23").style.visibility = "visible";
      document.getElementById("transbox42").style.visibility="visible"
      document.getElementById("fiftyfour").style.visibility="visible"
    },7650)
  }
  
  function gif37(){
    document.getElementById("arrow23").style.visibility = "hidden";
    document.getElementById("gif37").style.visibility="visible"
    document.getElementById("transbox42").style.visibility="hidden"
    document.getElementById("fiftyfour").style.visibility="hidden"
    myTimeout=setTimeout(()=>{
      document.getElementById("gif37").style.visibility="hidden"
      document.getElementById("transbox43").style.visibility="visible"
      document.getElementById("arrow24").style.visibility = "visible";
      document.getElementById("fiftyfive").style.visibility="visible"
    },9500)
  }
  
  function gif38(){
    document.getElementById("gif38").style.visibility="visible"
    document.getElementById("transbox43").style.visibility="hidden"
    document.getElementById("arrow24").style.visibility = "hidden";
    document.getElementById("fiftyfive").style.visibility="hidden"
    myTimeout=setTimeout(()=>{
      document.getElementById("gif38").style.visibility="hidden"
      document.getElementById("arrow20").style.visibility = "visible";
      document.getElementById("transbox33").style.visibility="visible"
      document.getElementById("fiftysix").style.visibility="visible"
    },7650)
  }
  
  function gif39(){
    document.getElementById("arrow20").style.visibility = "hidden";
    document.getElementById("gif39").style.visibility="visible"
    document.getElementById("transbox33").style.visibility="hidden"
    document.getElementById("fiftysix").style.visibility="hidden"
    myTimeout=setTimeout(()=>{
      document.getElementById("gif39").style.visibility="hidden"
      document.getElementById("transbox44").style.visibility="visible"
      document.getElementById("arrow24").style.visibility = "visible";
      document.getElementById("fiftyseven").style.visibility="visible"
    },9500)
  }
  
  function gif40(){
    document.getElementById("gif40").style.visibility="visible"
    document.getElementById("transbox44").style.visibility="hidden"
    document.getElementById("arrow24").style.visibility = "hidden";
    document.getElementById("fiftyseven").style.visibility="hidden"
    myTimeout=setTimeout(()=>{
      document.getElementById("gif40").style.visibility="hidden"
      document.getElementById("arrow23").style.visibility = "visible";
      document.getElementById("transbox45").style.visibility="visible"
      document.getElementById("fiftyeight").style.visibility="visible"
    },7650)
  }
  
  function gif41(){
    document.getElementById("arrow23").style.visibility = "hidden";
    document.getElementById("gif41").style.visibility="visible"
    document.getElementById("transbox45").style.visibility="hidden"
    document.getElementById("fiftyeight").style.visibility="hidden"
    myTimeout=setTimeout(()=>{
      document.getElementById("gif41").style.visibility="hidden"
      document.getElementById("transbox46").style.visibility="visible"
      document.getElementById("arrow24").style.visibility = "visible";
      document.getElementById("fiftynine").style.visibility="visible"
    },9500)
  }
  
  function gif42(){
    document.getElementById("arrow24").style.visibility = "hidden";
    document.getElementById("gif42").style.visibility="visible"
    document.getElementById("transbox46").style.visibility="hidden"
    document.getElementById("fiftynine").style.visibility="hidden"
    myTimeout=setTimeout(()=>{
      document.getElementById("gif42").style.visibility="hidden"
      document.getElementById("arrow23").style.visibility = "visible";
      document.getElementById("transbox47").style.visibility="visible"
      document.getElementById("sixty").style.visibility="visible"
    },7650)
  }
  
  function gif43(){
    document.getElementById("arrow23").style.visibility = "hidden";
    document.getElementById("gif43").style.visibility="visible"
    document.getElementById("transbox47").style.visibility="hidden"
    document.getElementById("sixty").style.visibility="hidden"
    myTimeout=setTimeout(()=>{
      document.getElementById("gif43").style.visibility="hidden"
      document.getElementById("transbox48").style.visibility="visible"
      document.getElementById("arrow24").style.visibility = "visible";
      document.getElementById("sixtyone").style.visibility="visible"
    },9500)
  }
  
  function gif44(){
    document.getElementById("arrow24").style.visibility = "hidden";
    document.getElementById("gif44").style.visibility="visible"
    document.getElementById("transbox48").style.visibility="hidden"
    document.getElementById("sixtyone").style.visibility="hidden"
    myTimeout=setTimeout(()=>{
      document.getElementById("gif44").style.visibility="hidden"
      document.getElementById("arrow23").style.visibility = "visible";
      document.getElementById("transbox49").style.visibility="visible"
      document.getElementById("sixtytwo").style.visibility="visible"
    },7650)
  }
  
  function gif45(){
    document.getElementById("arrow23").style.visibility = "hidden";
    document.getElementById("gif45").style.visibility="visible"
    document.getElementById("transbox49").style.visibility="hidden"
    document.getElementById("sixtytwo").style.visibility="hidden"
    myTimeout=setTimeout(()=>{
      document.getElementById("gif45").style.visibility="hidden"
      document.getElementById("transbox50").style.visibility="visible"
      document.getElementById("arrow24").style.visibility = "visible";
      document.getElementById("sixtythree").style.visibility="visible"
    },9500)
  }
  
  function gif46(){
    document.getElementById("arrow24").style.visibility = "hidden";
    document.getElementById("gif46").style.visibility="visible"
    document.getElementById("transbox50").style.visibility="hidden"
    document.getElementById("sixtythree").style.visibility="hidden"
    myTimeout=setTimeout(()=>{
      document.getElementById("gif46").style.visibility="hidden"
      document.getElementById("arrow20").style.visibility = "visible";
      document.getElementById("transbox51").style.visibility="visible"
      document.getElementById("sixtyfour").style.visibility="visible"
    },7650)
  }
  
  function gif47(){
    document.getElementById("arrow20").style.visibility = "hidden";
    document.getElementById("gif47").style.visibility="visible"
    document.getElementById("transbox51").style.visibility="hidden"
    document.getElementById("sixtyfour").style.visibility="hidden"
    myTimeout=setTimeout(()=>{
      document.getElementById("gif47").style.visibility="hidden"
      document.getElementById("next").style.visibility = "visible";
      document.getElementById("sixtyfive").style.visibility="visible"
    },9500)
  }
  
  function gif48(){
    document.getElementById("arrow15").style.visibility = "hidden";
    document.getElementById("transbox23").style.visibility="hidden"
    document.getElementById("sixtysix").style.visibility="hidden"
    document.getElementById("gif48").style.visibility="visible"
    myTimeout=setTimeout(()=>{
      document.getElementById("arrow15").style.visibility = "visible";
      document.getElementById("gif48").style.visibility="hidden"
      document.getElementById("transbox52").style.visibility="visible"
      document.getElementById("sixtyseven").style.visibility="visible"
    },5500)
  }
  
  function gif49(){
    document.getElementById("arrow15").style.visibility = "hidden";
    document.getElementById("transbox52").style.visibility="hidden"
    document.getElementById("sixtyseven").style.visibility="hidden"
    document.getElementById("gif49").style.visibility="visible"
    myTimeout=setTimeout(()=>{
      document.getElementById("gif49").style.visibility="hidden"
      document.getElementById("next").style.visibility = "visible";
      document.getElementById("sixtyeight").style.visibility="visible"
    },31000)
  }
  
  function gif50(){
    document.getElementById("arrow21").style.visibility = "hidden";
    document.getElementById("transbox40").style.visibility="hidden"
    document.getElementById("sixtynine").style.visibility="hidden"
    document.getElementById("gif50").style.visibility="visible"
    myTimeout=setTimeout(()=>{
      document.getElementById("gif50").style.visibility="hidden"
      document.getElementById("seventy").style.visibility="visible"
      document.getElementById("next").style.visibility = "visible";
    },4400)
  }
  
  function gif79(){
    document.getElementById("arrow17").style.visibility = "hidden";
    document.getElementById("transbox54").style.visibility="hidden"
    document.getElementById("sixtynine").style.visibility="hidden"
    document.getElementById("gif79").style.visibility="visible"
    myTimeout=setTimeout(()=>{
      document.getElementById("gif79").style.visibility="hidden"
      document.getElementById("seventy").style.visibility="visible"
      document.getElementById("next").style.visibility = "visible";
    },4400)
  }
  
  
  function gif51(){
    document.getElementById("arrow15").style.visibility = "hidden";
    document.getElementById("transbox23").style.visibility="hidden"
    document.getElementById("seventyone").style.visibility="hidden"
    document.getElementById("gif51").style.visibility="visible"
    myTimeout=setTimeout(()=>{
      document.getElementById("transbox41").style.visibility="visible"
      document.getElementById("arrow15").style.visibility = "visible";
      document.getElementById("gif51").style.visibility="hidden"
      document.getElementById("seventytwo").style.visibility="visible"
    },5500)
  }
  
  function gif52(){
    document.getElementById("arrow15").style.visibility = "hidden";
    document.getElementById("transbox41").style.visibility="hidden"
    document.getElementById("seventytwo").style.visibility="hidden"
    document.getElementById("gif52").style.visibility="visible"
    myTimeout=setTimeout(()=>{
      document.getElementById("gif52").style.visibility="hidden"
      document.getElementById("next").style.visibility = "visible";
      document.getElementById("seventythree").style.visibility="visible"
    },1500)
  }
  
  function gif53(){
    document.getElementById("arrow15").style.visibility = "hidden";
    document.getElementById("transbox23").style.visibility="hidden"
    document.getElementById("seventyfour").style.visibility="hidden"
    document.getElementById("gif53").style.visibility="visible"
    myTimeout=setTimeout(()=>{
      document.getElementById("arrow15").style.visibility = "visible";
      document.getElementById("gif53").style.visibility="hidden"
      document.getElementById("seventyfive").style.visibility="visible"
      document.getElementById("transbox24").style.visibility="visible"
    },5700)
  }
  
  function gif53P(){
    document.getElementById("arrow15").style.visibility = "hidden";
    document.getElementById("transbox23").style.visibility="hidden"
    document.getElementById("seventyfour").style.visibility="hidden"
    document.getElementById("gif53").style.visibility="visible"
    myTimeout=setTimeout(()=>{
      document.getElementById("arrow24").style.visibility = "visible";
      document.getElementById("gif53").style.visibility="hidden"
      document.getElementById("seventyfive").style.visibility="visible"
      document.getElementById("transbox44").style.visibility="visible"
    },5700)
  }
  
  function gif54(){
    document.getElementById("arrow15").style.visibility = "hidden";
    document.getElementById("transbox24").style.visibility="hidden"
    document.getElementById("seventyfive").style.visibility="hidden"
    document.getElementById("gif54").style.visibility="visible"
    myTimeout=setTimeout(()=>{
      document.getElementById("gif54").style.visibility="hidden"
      document.getElementById("seventysix").style.visibility="visible"
      document.getElementById("transbox58").style.visibility="visible"
      document.getElementById("arrow28").style.visibility = "visible";
    },3700)
  }
  
  function gif54P(){
    document.getElementById("arrow24").style.visibility = "hidden";
    document.getElementById("transbox44").style.visibility="hidden"
    document.getElementById("seventyfive").style.visibility="hidden"
    document.getElementById("gif54").style.visibility="visible"
    myTimeout=setTimeout(()=>{
      document.getElementById("gif54").style.visibility="hidden"
      document.getElementById("seventysix").style.visibility="visible"
      document.getElementById("transbox33").style.visibility="visible"
      document.getElementById("arrow20").style.visibility = "visible";
    },3700)
  }
  
  function gif55(){
    document.getElementById("arrow28").style.visibility = "hidden";
    document.getElementById("transbox58").style.visibility="hidden"
    document.getElementById("seventysix").style.visibility="hidden"
    document.getElementById("gif55").style.visibility="visible"
    myTimeout=setTimeout(()=>{
      document.getElementById("gif55").style.visibility="hidden"
      document.getElementById("seventyseven").style.visibility="visible"
      document.getElementById("next").style.visibility = "visible";
    },5900)
  }
  
  function gif55P(){
    document.getElementById("arrow20").style.visibility = "hidden";
    document.getElementById("transbox33").style.visibility="hidden"
    document.getElementById("seventysix").style.visibility="hidden"
    document.getElementById("gif55").style.visibility="visible"
    myTimeout=setTimeout(()=>{
      document.getElementById("gif55").style.visibility="hidden"
      document.getElementById("seventyseven").style.visibility="visible"
      document.getElementById("next").style.visibility = "visible";
    },5900)
  }
  
  function gif56(){
    document.getElementById("arrow12").style.visibility = "hidden";
    document.getElementById("transbox22").style.visibility="hidden"
    document.getElementById("seventyeight").style.visibility="hidden"
    document.getElementById("gif56").style.visibility="visible"
    myTimeout=setTimeout(()=>{
      document.getElementById("gif56").style.visibility="hidden"
      document.getElementById("seventynine").style.visibility="visible"
      document.getElementById("next").style.visibility = "visible";
    },7500)
  }
  
  function gif56P(){
    document.getElementById("arrow20").style.visibility = "hidden";
    document.getElementById("transbox33").style.visibility="hidden"
    document.getElementById("seventyeight").style.visibility="hidden"
    document.getElementById("gif56").style.visibility="visible"
    myTimeout=setTimeout(()=>{
      document.getElementById("gif56").style.visibility="hidden"
      document.getElementById("seventynine").style.visibility="visible"
      document.getElementById("next").style.visibility = "visible";
    },7500)
  }
  
  function gif57(){
    document.getElementById("arrow29").style.visibility = "hidden";
    document.getElementById("transbox22").style.visibility="hidden"
    document.getElementById("eighty").style.visibility="hidden"
    document.getElementById("gif57").style.visibility="visible"
    myTimeout=setTimeout(()=>{
      document.getElementById("gif57").style.visibility="hidden"
      document.getElementById("eightyone").style.visibility="visible"
      document.getElementById("next").style.visibility = "visible";
    },5600)
  }
  
  function gif57P(){
    document.getElementById("arrow20").style.visibility = "hidden";
    document.getElementById("transbox33").style.visibility="hidden"
    document.getElementById("eighty").style.visibility="hidden"
    document.getElementById("gif57").style.visibility="visible"
    myTimeout=setTimeout(()=>{
      document.getElementById("gif57").style.visibility="hidden"
      document.getElementById("eightyone").style.visibility="visible"
      document.getElementById("next").style.visibility = "visible";
    },5600)
  }
   
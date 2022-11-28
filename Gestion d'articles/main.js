let new_product = document.querySelector(".new");
let create_pd = document.querySelector(".article-inf");
let editt = document.querySelector(".article-inf-edit");
let closee = document.querySelector(".closee");
let closeee = document.querySelector(".closeee");
let dark = document.querySelector(".dark");
let submit = document.querySelector("#btn");
let submit2 = document.querySelector("#btn1");
let tst =document.querySelector("#add-pt");

new_product.onclick = function(){
    create_pd.style.display="block";
    dark.style.display="block";
    document.querySelector("#Nom").value =""
    document.querySelector("#Marque").value =""
    document.querySelector("#prix").value =""
    document.querySelector("#date").value =""
    document.querySelector("#type").value = "None"
}
closee.onclick = function() {
    create_pd.style.display="none";
    dark.style.display="none";
}
submit.onclick = function(){

    if (document.querySelector("#Nom").value ==="") {
        document.querySelector(".mis").innerHTML="Empty!"
    }else if(document.querySelector("#Marque").value ===""){
        document.querySelector(".mis1").innerHTML="Empty!"
    }else if(document.querySelector("#prix").value ===""){
        document.querySelector(".mis2").innerHTML="Empty!"
    }else if(document.querySelector("#date").value ===""){
        document.querySelector(".mis3").innerHTML="Choose a date!"
    }else if(document.querySelector("#type").value === "None"){
        document.querySelector(".mis4").innerHTML="Choose one!"
    }else if(!document.querySelector("#Nomm").checked && !document.querySelector("#Nomm2").checked){
        document.querySelector(".mis5").innerHTML="Choose one!"
    }
    else{
        document.querySelector(".mis5").innerHTML=""
        document.querySelector(".mis4").innerHTML=""
        document.querySelector(".mis3").innerHTML=""
        document.querySelector(".mis2").innerHTML=""
        document.querySelector(".mis1").innerHTML=""
        document.querySelector(".mis").innerHTML=""
        ////////////////////
        //////////////////////
 const cree = document.createElement("div");
 cree.className ="add";
tst.appendChild(cree);
////////////////
const Nom = document.createElement("h3");
const Marque = document.createElement("h3");
const Prix = document.createElement("h3");
const Date = document.createElement("h3");
const Type = document.createElement("h3");
const Promotion = document.createElement("h3");
const di = document.createElement("div");
const delet = document.createElement("button");
const edit = document.createElement("button");
////////////////
cree.appendChild(Nom)
cree.appendChild(Marque)
cree.appendChild(Prix)
cree.appendChild(Date)
cree.appendChild(Type)
cree.appendChild(Promotion)
cree.appendChild(di)
di.appendChild(delet)
di.appendChild(edit)
/////////////////
di.className="btns";
delet.className="delet";
edit.className="edit";
edit.setAttribute("onclick" , "edity(this)");
/////////////////
Nom.innerHTML = `Nom : <span class="lpl"> ${document.querySelector("#Nom").value}</span>`;
Marque.innerHTML =`Marque : <span class="lpl1">${document.querySelector("#Marque").value}</span>`;
Prix.innerHTML = `Prix : <span class="lpl2">${document.querySelector("#prix").value}</span>`;
Date.innerHTML = `Date : <span class="lpl3">${document.querySelector("#date").value}</span>`;
Type.innerHTML = `Type : <span class="lpl4">${document.querySelector("#type").value}</span>`;
Promotion.innerHTML = "Promotion :";
var ele = document.getElementsByName('prom');
    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked){
        Promotion.innerHTML =`Promotion : <span  class="lpl5">${ele[i].value}</span>`;
    }}
/////////////////
Nom.className="info";
Marque.className="info";
Prix.className="info";
Date.className="info";
Type.className="info";
Promotion.className="info";
//////////////////////
create_pd.style.display="none";
dark.style.display="none";
delet.onclick=function(){
    Swal.fire({
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, delete it!'
}).then((result) => {
  if (result.isConfirmed) {
cree.remove()
    Swal.fire(
      'Deleted!',
      'Your file has been deleted.',
      'success'
    )
  }
})
}
//////////////////////////formule

}
}
function edity(element){

    /////////////////////
    editt.style.display="block";
    dark.style.display="block";

    Nom1.value = element.parentElement.parentElement.children[0].lastChild.innerHTML;
    Marque1.value = element.parentElement.parentElement.children[1].lastChild.innerHTML;
    prix1.value= element.parentElement.parentElement.children[2].lastChild.innerHTML;
    date1.value= element.parentElement.parentElement.children[3].lastChild.innerHTML;
    type1.value= element.parentElement.parentElement.children[4].lastChild.innerHTML;
if (element.parentElement.parentElement.children[5].lastChild.textContent ==="Non") {
    non.setAttribute("checked","true")
}else if(element.parentElement.parentElement.children[5].lastChild.textContent ==="Oui"){
    oui.setAttribute("checked","true")
}       
    element.parentElement.parentElement.id="active" ;  
    closeee.onclick = function() {
        editt.style.display="none";
        dark.style.display="none";
        element.parentElement.parentElement.id="" ;  
    }
///////////////////////
    
}
submit2.onclick=function(){
       if (document.querySelector("#Nom1").value ==="") {
        document.querySelector(".mis6").innerHTML="Empty!"
    }else if(document.querySelector("#Marque1").value ===""){
        document.querySelector(".mis7").innerHTML="Empty!"
    }else if(document.querySelector("#prix1").value ===""){
        document.querySelector(".mis8").innerHTML="Empty!"
    }else if(document.querySelector("#date1").value ===""){
        document.querySelector(".mis9").innerHTML="Choose a date!"
    }else if(document.querySelector("#type1").value === "None"){
        document.querySelector(".mis10").innerHTML="Choose one!"
    }
    else{
        document.querySelector(".mis11").innerHTML=""
        document.querySelector(".mis10").innerHTML=""
        document.querySelector(".mis9").innerHTML=""
        document.querySelector(".mis8").innerHTML=""
        document.querySelector(".mis7").innerHTML=""
        document.querySelector(".mis6").innerHTML=""
        //////////////////
    document.getElementById("active").children[0].lastChild.innerHTML = document.querySelector("#Nom1").value  ;
    document.getElementById("active").children[1].lastChild.innerHTML = document.querySelector("#Marque1").value  ;
    document.getElementById("active").children[2].lastChild.innerHTML = document.querySelector("#prix1").value  ;
    document.getElementById("active").children[3].lastChild.innerHTML = document.querySelector("#date1").value  ;
    document.getElementById("active").children[4].lastChild.innerHTML = document.querySelector("#type1").value  ;
    if (non.checked) {
        document.getElementById("active").children[5].lastChild.innerHTML = document.querySelector("#non").value  ;
    }else if(oui.checked){
        document.getElementById("active").children[5].lastChild.innerHTML = document.querySelector("#oui").value  ;    
    }   
    document.querySelector("#active").id="";
    editt.style.display="none";
    dark.style.display="none";
    }}
//MEDIA RESPONSIVENESS

var x=window.matchMedia("(max-width:775px)");
function myFunc4(x){
    if(x.matches){
        document.getElementById("picname").innerHTML="Pic Name";
        document.getElementById("picupload").innerHTML="Upload";
    }
}
myFunc4(x);
x.addEventListener('change',function(Event){
    myFunc4(Event.target);
});

var x1=window.matchMedia("(min-width:775px)");
function myFunc5(x){
    if(x.matches){
        document.getElementById("picname").innerHTML="Enter the Picture Name";
        document.getElementById("picupload").innerHTML="Please Upload the Picture";
    }
}
myFunc5(x1);
x1.addEventListener('change',function(Event){
    myFunc5(Event.target);
});

/* **************************************************************************** */


// FILTERING FUNCTION TO SEARCH BY NAME

function search_name() {
    document.getElementById("hidee2").setAttribute("style","display: none;");
    document.getElementById("myInput2").setAttribute("style","display: none;");
    const divv=document.getElementById("mehnat2");
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput1");
    filter = input.value.toUpperCase();
    table = document.getElementById("table1");
    tr = table.getElementsByTagName("tr");
    if(filter==""){
        var e = document.getElementById("mehnat");
        var child = e.lastElementChild; 
        while (child) {
            e.removeChild(child);
            child = e.lastElementChild;
        }
        document.getElementById("hidee2").setAttribute("style","display: ;");
        document.getElementById("myInput2").setAttribute("style","display: ;");
    }
    else{
        var e = document.getElementById("mehnat");
        var child = e.lastElementChild; 
        while (child) {
            e.removeChild(child);
            child = e.lastElementChild;
        }
        for (i = 1; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[0];
            if (td) {
                txtValue = td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    var image=document.getElementById("table1").rows[i].cells[1].innerHTML;
                    tr[i].style.display = "none";

                    var divv2=document.getElementById("mehnat");
                    divv2.setAttribute("style","text-align:center; display:block; padding:16px; display: grid; grid-gap: 16px; grid-template-columns: repeat(4,1fr);)");
                    var div_temp=document.createElement("div");
                    div_temp.setAttribute("style","margin-bottom:26px;");
                    var el = document.createElement('img');
                    el.setAttribute('src', image);
                    el.setAttribute("style", "width: 300px; height: 300px;");
                    div_temp.appendChild(el);
                    div_temp.appendChild(document.createElement('br'));
                    var anch = document.createElement('a');
                    anch.setAttribute('href', image);
                    anch.setAttribute('target', '_blank');
                    var buttonn = document.createElement('button');
                    buttonn.setAttribute('type', 'button');
                    buttonn.setAttribute("style", "background-color: #555; color: white; font-size: 11px; padding: 12px 24px; border: none; cursor: pointer; border-radius: 5px; margin-top:5px; text-align: center;");
                    buttonn.innerHTML="VIEW";
                    anch.appendChild(buttonn);
                    div_temp.appendChild(anch);
                    var anch = document.createElement('a');
                    anch.setAttribute('href', image);
                    anch.setAttribute('download', image);
                    var buttonn1 = document.createElement('button');
                    buttonn1.setAttribute('type', 'button');
                    buttonn1.setAttribute("style","background-color: #555; color: white; font-size: 11px; padding: 12px 24px; border: none; cursor: pointer; border-radius: 5px; text-align: center; margin-top:5px; margin-left: 110px;");
                    buttonn1.innerHTML="DOWNLOAD";
                    anch.appendChild(buttonn1);
                    div_temp.appendChild(anch);
                    divv2.appendChild(div_temp);


                    //MEDIA RESPONSIVENESS

                    var x=window.matchMedia("(min-width:1300px)");
                    function myFunc3(x){
                        if(x.matches){
                            divv2.setAttribute("style","text-align:center; display:block; padding:16px; display: grid; grid-gap: 16px; grid-template-columns: repeat(4,1fr);)");
                        }
                    }
                    myFunc3(x);
                    x.addEventListener('change',function(Event){
                        myFunc3(Event.target);
                    });
                    
                    var x=window.matchMedia("(max-width:1300px) and (min-width:970px)");
                    function myFunc(x){
                        if(x.matches){
                            divv2.setAttribute("style","text-align:center; display:block; padding:16px; display: grid; grid-gap: 16px; grid-template-columns: repeat(3,1fr);)");
                        }
                    }
                    myFunc(x);
                    x.addEventListener('change',function(Event){
                        myFunc(Event.target);
                    });

                    var x=window.matchMedia("(max-width:970px) and (min-width:650px)");
                    function myFunc1(x){
                        if(x.matches){
                            divv2.setAttribute("style","text-align:center; display:block; padding:16px; display: grid; grid-gap: 16px; grid-template-columns: repeat(2,1fr);)");
                        }
                    }
                    myFunc1(x);
                    x.addEventListener('change',function(Event){
                        myFunc1(Event.target);
                    });

                    var x=window.matchMedia("(max-width:650px)");
                    function myFunc2(x){
                        if(x.matches){
                            divv2.setAttribute("style","text-align:center; display:block; padding:16px; display: grid; grid-gap: 16px; grid-template-columns: repeat(1,1fr);)");
                        }
                    }
                    myFunc2(x);
                    x.addEventListener('change',function(Event){
                        myFunc2(Event.target);
                    });

                    /* **************************************************************************** */

                    document.getElementById("mehnat2").appendChild(divv2);
                }
                else {
                    tr[i].style.display = "none";
                }
            }     
        }
    }
}

/* **************************************************************************** */


// FILTERING FUNCTION TO SEARCH BY DATE

function search_date() {
    document.getElementById("hidee1").setAttribute("style","display: none;");
    document.getElementById("myInput1").setAttribute("style","display: none;");
    const divv=document.getElementById("mehnat3");
    var input, filter, filter1, table, tr, td, i, txtValue;
    input = document.getElementById("myInput2");
    filter1 = input.value;
    table = document.getElementById("table1");
    tr = table.getElementsByTagName("tr");
    if(filter1==""){
        var e = document.getElementById("mehnat4");
        var child = e.lastElementChild; 
        while (child) {
            e.removeChild(child);
            child = e.lastElementChild;
        }
        document.getElementById("hidee1").setAttribute("style","display: ;");
        document.getElementById("myInput1").setAttribute("style","display: ;");
    }
    else{
        var arr1 = filter1.split('-');
        filter=arr1[2].concat("/",arr1[1],"/",arr1[0]);
        var e = document.getElementById("mehnat4");
        var child = e.lastElementChild; 
        while (child) {
            e.removeChild(child);
            child = e.lastElementChild;
        }
        for (i = 1; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[2];
            if (td) {
                txtValue = td.innerText;
                if (txtValue == filter) {
                    var image=document.getElementById("table1").rows[i].cells[1].innerHTML;
                    tr[i].style.display = "none";

                    var divv2=document.getElementById("mehnat4");
                    divv2.setAttribute("style","text-align:center; display:block; padding:16px; display: grid; grid-gap: 16px; grid-template-columns: repeat(4,1fr);)");
                    var div_temp=document.createElement("div");
                    div_temp.setAttribute("style","margin-bottom:26px;");
                    var el = document.createElement('img');
                    el.setAttribute('src', image);
                    el.setAttribute("style", "width: 300px; height: 300px;");
                    div_temp.appendChild(el);
                    div_temp.appendChild(document.createElement('br'));
                    var anch = document.createElement('a');
                    anch.setAttribute('href', image);
                    anch.setAttribute('target', '_blank');
                    var buttonn = document.createElement('button');
                    buttonn.setAttribute('type', 'button');
                    buttonn.setAttribute("style", "background-color: #555; color: white; font-size: 11px; padding: 12px 24px; border: none; cursor: pointer; border-radius: 5px; margin-top:5px; text-align: center;");
                    buttonn.innerHTML="VIEW";
                    anch.appendChild(buttonn);
                    div_temp.appendChild(anch);
                    var anch = document.createElement('a');
                    anch.setAttribute('href', image);
                    anch.setAttribute('download', image);
                    var buttonn1 = document.createElement('button');
                    buttonn1.setAttribute('type', 'button');
                    buttonn1.setAttribute("style","background-color: #555; color: white; font-size: 11px; padding: 12px 24px; border: none; cursor: pointer; border-radius: 5px; text-align: center; margin-top:5px; margin-left: 110px;");
                    buttonn1.innerHTML="DOWNLOAD";
                    anch.appendChild(buttonn1);
                    div_temp.appendChild(anch);
                    divv2.appendChild(div_temp);


                    //MEDIA RESPONSIVENESS

                    var x=window.matchMedia("(min-width:1300px)");
                    function myFunc3(x){
                        if(x.matches){
                            divv2.setAttribute("style","text-align:center; display:block; padding:16px; display: grid; grid-gap: 16px; grid-template-columns: repeat(4,1fr);)");
                        }
                    }
                    myFunc3(x);
                    x.addEventListener('change',function(Event){
                        myFunc3(Event.target);
                    });

                    var x=window.matchMedia("(max-width:1300px) and (min-width:970px)");
                    function myFunc(x){
                        if(x.matches){
                            divv2.setAttribute("style","text-align:center; display:block; padding:16px; display: grid; grid-gap: 16px; grid-template-columns: repeat(3,1fr);)");
                        }
                    }
                    myFunc(x);
                    x.addEventListener('change',function(Event){
                        myFunc(Event.target);
                    });

                    var x=window.matchMedia("(max-width:970px) and (min-width:650px)");
                    function myFunc1(x){
                        if(x.matches){
                            divv2.setAttribute("style","text-align:center; display:block; padding:16px; display: grid; grid-gap: 16px; grid-template-columns: repeat(2,1fr);)");
                        }
                    }
                    myFunc1(x);
                    x.addEventListener('change',function(Event){
                        myFunc1(Event.target);
                    });

                    var x=window.matchMedia("(max-width:650px)");
                    function myFunc2(x){
                        if(x.matches){
                            divv2.setAttribute("style","text-align:center; display:block; padding:16px; display: grid; grid-gap: 16px; grid-template-columns: repeat(1,1fr);)");
                        }
                    }
                    myFunc2(x);
                    x.addEventListener('change',function(Event){
                        myFunc2(Event.target);
                    });
                    
                    /* **************************************************************************** */

                    document.getElementById("mehnat3").appendChild(divv2);
                }
                else {
                    tr[i].style.display = "none";
                }
            }     
        }
    }
}

/* **************************************************************************** */
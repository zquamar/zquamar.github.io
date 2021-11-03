function myfunction()
{
  let x1=document.forms["form1"]["sub1"].value;
  let x2=document.forms["form1"]["sub2"].value;
  let x3=document.forms["form1"]["sub3"].value;
  let x4=document.forms["form1"]["sub4"].value;
  let x5=document.forms["form1"]["sub5"].value;
  let x6=document.forms["form1"]["sub6"].value;
  let y=[];
  let cgp=0;
  y[0]=x1*4;
  y[1]=x2*4;
  y[2]=x3*4;
  y[3]=x4*3;
  y[4]=x5*1.5;
  y[5]=x6*1.5;
  for (var i = 0; i < y.length; i++) {
    cgp  += y[i];
  }
  cgp = cgp/18;
  let fcgp=cgp.toFixed(2);
  document.getElementById("mytable").rows[8].cells[2].innerHTML=fcgp;
}

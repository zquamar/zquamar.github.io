function myfunction()
{
  let x1=document.forms["form1"]["sub1"].value;
  let x2=document.forms["form1"]["sub2"].value;
  let x3=document.forms["form1"]["sub3"].value;
  let x4=document.forms["form1"]["sub4"].value;
  let x5=document.forms["form1"]["sub5"].value;
  let x6=document.forms["form1"]["sub6"].value;
  let x7=document.forms["form1"]["sub7"].value;
  let x8=document.forms["form1"]["sub8"].value;
  let x9=document.forms["form1"]["sub9"].value;
  let y=[];
  let cgp=0;
  y[0]=x1*3;
  y[1]=x2*3;
  y[2]=x3*3;
  y[3]=x4*3;
  y[4]=x5*3;
  y[5]=x6*3;
  y[6]=x7*1.5;
  y[7]=x8*1.5;
  y[8]=x9*1;
  for (var i = 0; i < y.length; i++) {
    cgp  += y[i];
  }
  cgp = cgp/22;
  let fcgp=cgp.toFixed(2);
  document.getElementById("mytable").rows[12].cells[2].innerHTML=fcgp;
}

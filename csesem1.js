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
  let y=[];
  let cgp=0;
  y[0]=x1*4;
  y[1]=x2*4;
  y[2]=x3*3;
  y[3]=x4*2.5;
  y[4]=x5*2;
  y[5]=x6*1.5;
  y[6]=x7*1;
  y[7]=x8*1;
  for (var i = 0; i < y.length; i++) {
    cgp  += y[i];
  }
  cgp = cgp/19;
  let fcgp=cgp.toFixed(2);
  document.getElementById("mytable").rows[9].cells[2].innerHTML=fcgp;
}

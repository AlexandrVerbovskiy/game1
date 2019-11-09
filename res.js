let cvs = document.getElementById("myCanvas");
let ctx = cvs.getContext("2d");
let phon = new Image();
phon.src = "img/q.png";
function draw() { 

  ctx.drawImage(phon, 0, 0,800, 400);
  ctx.drawImage(photomen, xpos, ypos, w1, h1);
  ctx.drawImage(model1, xposm1, yposm1, wm1, hm1);
  ctx.drawImage(model2, xposm2, yposm2, wm2, hm2);
  ctx.drawImage(model3, xposm3, yposm3, wm3, hm3);
  ctx.drawImage(model4, xposm4, yposm4, wm4, hm4);
  ctx.drawImage(model4, xposm4, yposm4, wm4, hm4);
  ctx.drawImage(sht1, xpossh1, ypossh1, wsh1, hsh1);
  ctx.drawImage(sht2, xpossh2, ypossh2, wsh2, hsh2);
  ctx.drawImage(sht3, xpossh3, ypossh3, wsh3, hsh3);
  ctx.drawImage(sht4, xpossh4, ypossh4, wsh4, hsh4); 

}

function draw1() {
  ctx.drawImage(photomen, xpos, ypos, w1, h1);
  ctx.drawImage(sht1, xpossh1, ypossh1, wsh1, hsh1);
  ctx.drawImage(sht2, xpossh2, ypossh2, wsh2, hsh2);
  ctx.drawImage(sht3, xpossh3, ypossh3, wsh3, hsh3);
  ctx.drawImage(sht4, xpossh4, ypossh4, wsh4, hsh4);
  requestAnimationFrame(draw);
}
let photomen=new Image();
let model1 = new Image();
let model2 = new Image(); 
let model3 = new Image(); 
let model4 = new Image();
let sht1 = new Image();
let sht2 = new Image();
let sht3 = new Image();
let sht4 = new Image();
let b1= new Image();
photomen.src="img/p3.png";
model1.src = "img/m1.png";
model2.src = "img/m4.png";
model3.src = "img/m2.png";
model4.src = "img/m3.png";
sht1.src="img/sh1.png";
sht2.src="img/sh2.png";
sht3.src="img/sh2.png";
sht4.src="img/sh1.png";
model1.onload=draw;
let xpos=394;
let ypos=320;
let xposq=394;
let yposq=320;
let downLim=320;
let topLim=100;
let leftLim=194;
let rightLim=594;
let h1=50;
let w1=42;
let xposm1=100;
let yposm1=295;
let hm1=90;
let wm1=32;
let xposm2=695;
let yposm2=305;
let hm2=80;
let wm2=42;
let xposm3=100;
let yposm3=120;
let hm3=45;
let wm3=25.3;
let xposm4=700;
let yposm4=110;
let hm4=55;
let wm4=25.3;
let xpossh1=75;
let ypossh1=300;
let hsh1=90;
let wsh1=77;
let xpossh2=675;
let ypossh2=300;
let hsh2=90;
let wsh2=77;
let xpossh3=75;
let ypossh3=100;
let hsh3=71.15;
let wsh3=77;
let xpossh4=675;
let ypossh4=100;
let hsh4=71.15;
let wsh4=77;
let sh1Lim=125;
let sh2Lim=625;
let sh3Lim=125;
let sh4Lim=625;
let xpossh1s=75;
let xpossh2s=675;
let xpossh3s=75;
let xpossh4s=675;
/*function game(){
  let q1=0, q2=0, q3=0, q4=0, d=0;
let x=Math.random()*20;
if(x<=5){
    if(q1==1){
        if(q2==1){
                if(q3==1){
            d=4;
            q4=1;
        } else{
            d=3;
            q3=1;
        }
}else{
    d=2;
    q2=1;
}
}else{
    d=1;
    q1=1;
}
} else if(x<=10){
if(q2==1){
if(q1==1){
                if(q3==1){
            d=4;
            q4=1;
        } else{
            d=3;
            q3=1;
        }
}else{
    d=1;
    q1=1;
}
}else{
  q2=1;
  d=2;
}
} else if(x<=15){
  if(q3==1){
    if(q1==1){
        if(q2==1){
            d=4;
            q4=1;
        }else{
    d=2;
    q2=1;
}
}else{
    d=3;
    q3=1;
}
  }else{
    q3=1;
    d=3;
  }
} else {
   if(q4==1){
        if(q2==1){
                if(q3==1){
            d=1;
            q1=1;
        } else{
            d=3;
            q3=1;
        }
}else{
    d=2;
    q2=1;
}
}else{
    d=4;
    q4=1;
}

}
alert(d);
}
*/
let zp1=0;
let zp=1500;
document.onkeydown = function(e){

  e = e || window.event;
  let key = e.which || e.keyCode;
  if(key===81){
    alert(xpos);
    alert(ypos);
  }

  if(key===38){
    if(ypos>topLim){
      ypos -= 20;
      w1-=0.4;
      h1-=0.8;
      draw1();
    }
  } else if(key===40){
    if(ypos<downLim){
      ypos += 20;
      w1+=0.4;
      h1+=0.8;
      draw1();
    }
  } else if(key===39){
    photomen.src="img/p2.png";
    if(xpos<rightLim){
      xpos += x1;}
      draw1();
    } else if(key===37){
      photomen.src="img/p3.png";
      if(xpos>leftLim){
        xpos -= x1;}
        draw1();
      }

      if(key===13){

       document.getElementById("div").innerHTML =zp +"$";
//if(photomen.src==="img/1.png"){}
if(ypos===downLim||ypos===downLim-20){
  if(xpos===leftLim){
    if(xpossh1==sh1Lim){
     zp+=mph; 
     xpossh1 =xpossh1s;
   } else{
    alert("об'єкт прихований від сторонніх очей");
           zp-=15;
  }

} else if(xpos===rightLim){     if(xpossh2==sh2Lim){
 zp+=mph; 
 xpossh2 =xpossh2s;
} else{
  alert("об'єкт прихований від сторонніх очей");
         zp-=15;
}}else{
  alert("зміни позицію");
         zp-=15;
}
} else if(ypos===topLim||ypos===topLim+20||ypos===topLim+40){
  if(xpos===leftLim){
    if(xpossh3==sh3Lim){
      xpossh3 =xpossh3s;
      zp+=mph; 
    } else{
       alert("об'єкт прихований від сторонніх очей");
             zp-=15;
    }} else if(xpos===rightLim){     if(xpossh4==sh4Lim){
      xpossh4 =xpossh4s;
      zp+=mph; 
    } else{
       alert("об'єкт прихований від сторонніх очей");
             zp-=15;
    }}else{
      alert("зміни позицію");

             zp-=15;
    }
  } else{
    alert("зміни позицію");
           zp-=15;
  }

  draw1();
  document.getElementById("div").innerHTML =zp +"$";
}

}






let k1=2000, k2=2000, k3=2000, k4=2000;
//як зробити щоб через інтервал часу картинки вертались на місце
let interval = setInterval(

  function game() {
    if(zp<15){
      alert("you lose");
      zp=1500;
x1=20;
      xpos=xposq;
      ypos=yposq;
      t=2.5;
      zp1=0;
      sl=0;
      sl1=0;
       mph=100;
       u4=750;
           u1=150;
     p1=0;
 p4=0;
sl1=100;
 u5=100;
 p5=0;
  u3=500;
 p3=0;
  u2=250;
 p2=0;
 sl=0;
       document.getElementById("div").innerHTML =zp +"$";
      document.getElementById("div1").innerHTML =0 +"$";
      document.getElementById("menu1").innerHTML =u1 +"$";
      document.getElementById("menu2").innerHTML =u2 +"$";
      document.getElementById("menu3").innerHTML =u3 +"$";
      document.getElementById("menu4").innerHTML =u4 +"$";
      document.getElementById("menu5").innerHTML =u5 +"$";
    }

    let x=Math.random()*20;
    if(x<=5){
      if(xpossh1!=sh1Lim){
        k1=2000;
        xpossh1 += 50;
        draw1();
      } else{
        k1+=2000;
      }
    }
    else if(x<=10){
      if(xpossh2!=sh2Lim){
        k2=2000;

        xpossh2 -= 50;
        draw1();
      }else{
        k2+=2000;
      }
    } else if(x<=15){
      if(xpossh3!=sh3Lim){
        k3=2000;

        xpossh3 += 50;
        draw1();  }else{
          k3+=2000;
        }
      } else if(x<=20){
        if(xpossh4!=sh4Lim){
          k4=2000;

          xpossh4 -= 50;
          draw1();  } else{
           k4+=2000;
         }
       }

/*if(k1!=0){
  k1--;
}else{
  xpossh1 = xpossh1s;
  draw1();
}*/
}
, 1000);
let interval1 = setInterval( function q1() {xpossh1 =xpossh1s;if(zp>0){
  zp-=t;
  document.getElementById("div").innerHTML =zp +"$";
}

draw1();}
,k1);
let interval2 = setInterval( function q2() {xpossh2 = xpossh2s; if(zp>0){
  zp-=t;
  document.getElementById("div").innerHTML =zp +"$";
}
draw1();}
,k2);
let interval3 = setInterval( function q3() {xpossh3 = xpossh3s;if(zp>0){
  zp-=t;
  document.getElementById("div").innerHTML =zp +"$";
}
draw1();}
,k3);
let interval4 = setInterval( function q4() {xpossh4 = xpossh4s;if(zp>0){
  zp-=t;
  document.getElementById("div").innerHTML =zp +"$";
}
draw1();}
,k4);
    let u1=150;
    let p1=0;
function shop1(){
  if(p1<10){
      if(zp>=u1){
zp-=u1;
t-=0.25;
u1*=2;
p1++;
  document.getElementById("menu1").innerHTML =u1+"$";
} else {
  alert("Зароби більше грошей");
}

  }else{
    alert("ліміт вичерпано");
  }
}
let u2=250;
let p2=0;
let sl=0;
function shop2(){
  if(p1!=5){
    alert("прокачай попередній скіл до 5 рівня!");}
    else{
    if(p2<10){
      if(zp>=u2){
        sl++;
zp-=u2;
u2*=2;
p2++;
let interval5 = setInterval( function q5() {zp1+=sl; 
 document.getElementById("div1").innerHTML =zp1+"Val";}
,1000);
document.getElementById("menu2").innerHTML =u2+"$";
} else {
  alert("Зароби більше грошей");
}

  }else{
    alert("ліміт вичерпано");
  }
}
}
let u3=500;
let p3=0;
function shop3(){
    if(p2!=5){
    alert("прокачай попередній скіл до 5 рівня!");}
    else{
      if(p3<10){
      if(zp>=u3){
zp-=u3;
u3*=2;
p3++;
x1+=5;
  document.getElementById("menu3").innerHTML =u3+"$";
} else {
  alert("Зароби більше грошей");
}

  }else{
    alert("ліміт вичерпано");
  }
}
}
let u4=750;
let p4=0;
let sl1=100;
function shop4(){
    if(p5!=5){
    alert("прокачай попередній скіл до 5 рівня!");}
    else{
      if(p4<10){
      if(zp1>=u4){
zp1-=u4;
u4*=2;
p4++;
sl1+=20;
let interval5 = setInterval( function q5() {zp+=sl1; 
 document.getElementById("div1").innerHTML =zp+"$";}
,5000);
  document.getElementById("menu5").innerHTML =u4+"Val";
} else {
  alert("Зароби більше грошей");
}

  }else{
    alert("ліміт вичерпано");
  }
}
}
let u5=100;
let p5=0;
function shop5(){
      if(p5<10){
      if(zp1>=u5){
zp1-=u5;
u5*=2;
p5++;
mph+=20;
  document.getElementById("menu4").innerHTML =u5+"Val";
} else {
  alert("Зароби більше грошей");
}

  }else{
    alert("ліміт вичерпано");
  }
}
let t=2.5;
let mph=100;
let x1=20;
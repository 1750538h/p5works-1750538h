// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
      if((i+j)%2==1){
       fill(128);
       }
    else{
       fill(255);
   }
      rect(size*i, size*j, size, size);


      }
  }
  for(let x =0;x<8; x++){
    for(let y =0; y < 3; y++){
      if((x+y)%2==1){
        fill(255,0,0);
        ellipse(25*x+12.5,25*y+12.5,size*0.9,size*0.9);
      }
    }
  }
  for(let a =0;a<8; a++){
    for(let b =5; b < 8; b++){
      if((a+b)%2==1){
        fill(0);
        ellipse(25*a+12.5,25*b+12.5,size*0.9,size*0.9);
      }
    }
  }
}

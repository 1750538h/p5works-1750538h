// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  //noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
      rect(size * i, size * j, size, size);
       if((i+j) % 2 == 0 && j<4){
        fill(196);
        //fill(255,0,0);
        //elipse(size*i, size*j size);
       }
       else if((i+j)%2==0 && j<4){
         fill(144);
       }
       else if((i+j)%2==0){
         fill(14);
       }
     else{
        fill(255);
    }
     }
  }
}

// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon("I love keyakizaka46",93,100,150);
}

function balloon(t,n,x,y){
  let w = textWidth(t);
  let h = textAscent(t) + textDescent(t);
  let p = 2;
  noStroke();
  fill(n);
  rect(x, y, w + p * 2, h + p * 2);
  noStroke();
  fill(n);
  triangle(x+w+p*2 ,+y+h+p*2-10, x+w+p*2, y+h+p*2, x+w+p*2+30, y+h+p*2);
  fill(255);
  text(t, x+p, y+h + p);
}

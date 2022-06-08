let result = document.querySelector(".result")
let block = [];


let tern = "x";
function game(id)
{
   let element = document.getElementById(id);
   if ( tern ==="x" && element.innerHTML == "")
   {
      element.innerHTML="X";
      result.innerHTML="O";
      tern="o";

   }
   
   else if (tern ==="o" && element.innerHTML == "")
   {
      element.innerHTML="O";
      result.innerHTML="X";
      tern="x";
   }
   winner ()
}

function end (num1,num2,num3)
{
   result.innerHTML = `${block[num1]} winner`;
   document.getElementById("block"+ num1).style.backgroundColor="black";
   document.getElementById("block"+ num2).style.backgroundColor="black";
   document.getElementById("block"+ num3).style.backgroundColor="black";
   document.getElementById("block"+ num1).style.color="white";
   document.getElementById("block"+ num2).style.color="white";
   document.getElementById("block"+ num3).style.color="white";
   setTimeout(function(){ location.reload()},3500);
   setInterval(function(){result.innerHTML+="."},1000)
   
   let ele1 =  document.getElementById("block1");
   ele1.removeAttribute("onclick");
  
   let ele2 =  document.getElementById("block2");
   ele2.removeAttribute("onclick");
  
   let ele3 =  document.getElementById("block3");
   ele3.removeAttribute("onclick");
  
   let ele4 =  document.getElementById("block4");
   ele4.removeAttribute("onclick");
  
   let ele5 =  document.getElementById("block5");
   ele5.removeAttribute("onclick");
  
   let ele6=  document.getElementById("block6");
   ele6.removeAttribute("onclick");

   let ele7=  document.getElementById("block7");
   ele7.removeAttribute("onclick");

   let ele8=  document.getElementById("block8");
   ele8.removeAttribute("onclick");

   let ele9=  document.getElementById("block9");
   ele9.removeAttribute("onclick");

  
  
   

}

function winner ()
{
   for(let i=1;i<10;i++)
   {
      block[i]= document.getElementById("block"+i).innerHTML;      
     
   }
   
   if(block[1] == block[2] && block[2] == block[3] && block[1]!="")
   {
      end (1,2,3)
   }
   if(block[1] == block[4] && block[4] == block[7] && block[1]!="")
   {
      end (1,4,7)
   }
   if(block[3] == block[6] && block[6] == block[9] && block[9]!="")
   {
      end (3,6,9)
   }
   if(block[7] == block[8] && block[8] == block[9] && block[9]!="")
   {
      end (7,8,9)
   }
   if(block[1] == block[5] && block[5] == block[9] && block[9]!="")
   {
      end (1,5,9)
   }
   if(block[3] == block[5] && block[5] == block[7] && block[7]!="")
   {
      end (3,5,7)
   }
   if(block[2] == block[5] && block[5] == block[8] && block[8]!="")
   {
      end (2,5,8)
   }
   if(block[4] == block[5] && block[5] == block[6] && block[6]!="")
   {
      end (4,5,6)
   }
   
}


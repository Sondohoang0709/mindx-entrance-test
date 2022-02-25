

const numberbar = document.getElementById("Numberbar")
const button = document.getElementById("button")
const result= document.getElementById("result")

  
button.onclick= function(){
if ( numberbar.value == "" ) 
{ result.innerHTML="Nhập lại nhé! Bạn không được để trống! "
}
if (numberbar.value !== "" && numberbar.value.length <= 2    )

{ result.innerHTML="Rất tiếc! Chúc bạn may mắn lần sau!"
  }

  
  
if (numberbar.value== 79) 
{  result.innerHTML="Chúc mừng! Bạn là người may mắn nhất thế giới!"          }

if (numberbar.value.length > 2  ) 
{  result.innerHTML="Nhập lại nhé! Bạn chỉ được nhập đúng số theo quy định!"     }

  if (numberbar.value < 0)
  {  result.innerHTML="Nhập lại nhé! Bạn chỉ được nhập đúng số theo quy định!"               }
 }


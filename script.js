let b=document.querySelectorAll(".button");
let inp=document.querySelector("#inp");
inp.innerHTML="";  
let op;
let val1;
b.forEach(b=>{
    function display(b)
    {

        let d=b.firstElementChild.innerHTML;
        //console.log(isNaN(inp.innerHTML))
        if(d==1 || d==2 || d==3 || d==4 || d==5 || d==6 || d==7 || d==8 || d==9 || d==0)
        {
            d=parseInt(d);
            if(inp.innerHTML=='+' ||  inp.innerHTML=='-' || inp.innerHTML=='*' || inp.innerHTML=='/'){
                op=inp.innerHTML;
                inp.innerHTML="";
            }
            if(inp.innerHTML=="")
            {
                inp.innerHTML=0;
                let val=parseInt(inp.innerHTML); 
                inp.innerHTML=(val*10)+d;

            }
            else
            {
                let val=parseInt(inp.innerHTML); 
                inp.innerHTML=(val*10)+d;
            }
        }
        else if(d=='+')
        {
            val1=parseInt(inp.innerHTML);
            inp.innerHTML='+';
        }
        else if(d=='-')
        {
            val1=parseInt(inp.innerHTML);
            inp.innerHTML='-';
        }
        else if(d=='*')
        {
            val1=parseInt(inp.innerHTML);
            inp.innerHTML='*';
        }
        else if(d=='/')
        {
            val1=parseInt(inp.innerHTML);
            inp.innerHTML='/';
        }
        else if(d=='=')
        {
            let result;
            val2=parseInt(inp.innerHTML);
            if(op=='+')
            {
                result=val1+val2;
            }
            if(op=='-')
            {
                result=val1-val2;
            }
            if(op=='*')
            {
                result=val1*val2;
            }
            if(op=='/')
            {
                result=val1/val2;
            }
            inp.innerHTML=result;
        }
        else if(d=="AC")
        {
            inp.innerHTML="";
        }
        

    }
    b.addEventListener("click",()=>{
        display(b)
    })
})
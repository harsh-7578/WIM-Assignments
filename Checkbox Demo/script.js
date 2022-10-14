const checkboxes=document.querySelectorAll('.checkboxDemo input');
const labels=document.querySelectorAll('label');
console.log(checkboxes);
const op=document.querySelector('.outputCB');
for(let i=0;i<checkboxes.length;i++)
{
    checkboxes[i].value=labels[i].innerText;
    checkboxes[i].addEventListener('click',()=>{
        let val=checkboxes[i].value;
        console.log(val);
        if(checkboxes[i].checked==true)
        {
        let para=document.createElement('p');
        para.setAttribute('id','cb'+val);
        para.innerText=val;
        op.append(para);
        }
        else{
            document.getElementById('cb'+val).remove();
        }
    })
}
const brandTags = () => {
    const checkboxes=$('input:checkbox[name=brands]');
    const filterContent=document.getElementById('filterContent');
    const filterChildren=filterContent.children;

    for(let i=0; i < checkboxes.length; i++) {

        checkboxes[i].addEventListener('click',function(){
            if(this.checked && this.getAttribute('type')=='checkbox'){
                const span = document.createElement('span');
                span.innerHTML = '<span>' + checkboxes[i].value + '</span>' + '<img src="./assets/icons/close.svg">' + '</img>';
                filterContent.appendChild(span);
                for(let j=0; j < filterChildren.length; j++){
                    filterChildren[j].addEventListener('click', function setCheck(){
                        for(let i=0; i < checkboxes.length; i++){
                            if(filterChildren[j].children[0].innerHTML == checkboxes[i].value){
                                checkboxes[i].checked=false;
                            }
                        }
                        filterContent.removeChild(filterChildren[j])
                    })
                }
            }
            else{
                for(let i=0; i < filterChildren.length; i++){
                    if(filterChildren[i].children[0].innerHTML == checkboxes[i].value){
                        filterContent.removeChild(filterChildren[i]);
                    }
                }

            }
        })
    }
}
export default brandTags
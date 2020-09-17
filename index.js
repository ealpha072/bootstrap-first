let images= 
['images/logos/Apple.png','images/logos/Huawei.png','images/logos/Infinix.png','images/logos/Nokia.png',
'images/logos/oppo.png','images/logos/Tecno.png','images/logos/Xiaomi.png','images/logos/Ulefone.png']

const logos = document.getElementById('mylogos');


function setAttribute(el,attr){
    for(var key in attr){
        el.setAttribute(key,attr[key]);
    }
}

images.forEach((image)=>{
    const imageDiv = document.createElement('div')
    setAttribute(imageDiv,{'class':'col-3'})
    const imageLink =  document.createElement('a');
    setAttribute(imageLink,{'href':''})
    const img = document.createElement('img');
    setAttribute(img,{'src':image,'class':'img-fluid'});
    imageLink.appendChild(img);
    imageDiv.appendChild(imageLink);
    logos.appendChild(imageDiv);
})
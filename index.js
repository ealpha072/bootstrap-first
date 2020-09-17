let images= 
['images/logos/Apple.png','images/logos/Huawei.png','images/logos/Infinix.png','images/logos/Nokia.png',
'images/logos/oppo.png','images/logos/Tecno.png','images/logos/Xiaomi.png','images/logos/Ulefone.png']

const logos = document.getElementById('mylogos');
const phoneDiv =document.getElementById('phone-row');

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

/*<div>
    <div img><img></div>
    <div info>
       p-official store
       h3-
       p-price/current 
       p-old/price
    </div>
</div>*/

let phones= [{
    'img':"images/phones/1.jpg",
    'official':"Official Store",
    'name':"Vivo Y30 - 6.47\'\' - 128GB+4GB RAM - Dual SIM - 4G - 5000mAh - Moonstone White",
    'current':"15,999",
    'old':"21,999"
    },{
    'img':"images/phones/huawei.jpg",
    'official':"Official Store",
    'name':"Huawei Y8p, 6.3\" OLED, 128GB + 6GB(Dual SIM), Breathing Crystal",
    'current':"22,999",
    'old':"28,999"
    },{
    'img':"images/phones/nokia.jpg",
    'official':"Official Store",
    'name':"Nokia-105-Dual-sim-FM-radio-torch-800mAh-battery-black",
    'current':"1,400",
    'old':"2,800"
    },{
    'img':"images/phones/ss.jpg",
    'official':"shipped",
    'name':"Samsung-Galaxy-a21s-6.5-64GB-4GB-RAM-Dual-Sim-4000-mAh-Black",
    'current':"19,999",
    'old':"30,000"
    },{
    'img':"images/phones/ulefon.jpg",
    'official':"Official Store",
    'name':"Ulefone-note-7-pro-6.1-3-gb-32-gb-dual-sim-twilight",
    'current':"6000",
    'old':"6500"
    },{
    'img':"images/phones/ulefon2.jpg",
    'official':"Official Store",
    'name':"ulefone-note-9p-6.52-4-gb-64-gb-dual-sim-aurora-blue",
    'current':"11500",
    'old':"14500"
    },{
    'img':"images/phones/umidigi.jpg",
    'official':"Official Store",
    'name':"umidigi-a7-pro-6.3-4gb128gb-rom-android-10.0-quad-camera-dual-4g-smartphone",
    'current':"15000",
    'old':"22000"
    },{
    'img':"images/phones/apple.jpg",
    'official':"Official Store",
    'name':"iphone-11-pro-max-256gb-physical-dual-sim-midnight-green-apple",
    'current':"155000",
    'old':"16000"
    },{
    'img':"images/phones/apple2.jpg",
    'official':"Official Store",
    'name':"iphone-7-plus-128gb-3gb-ram-5.5-12mp-camera-black-apple",
    'current':"39000",
    'old':"52000"
}]

phones.forEach(phone=>{
    //create elements
    const coldiv= document.createElement('div');
    const imgdiv=document.createElement('div');
    const infodiv=document.createElement('div');
    const divlink =document.createElement('a');
    const store =document.createElement('p');
    const abt =document.createElement('p')
    const current=document.createElement('h4');
    const old =document.createElement('h4');
    const img =document.createElement('img');
    const shopbtn =document.createElement('button')

    //attributes;
    setAttribute(coldiv,{"class":'col-6 col-md-4'});
    setAttribute(img,{"src":phone.img,"class":"img-fluid"});
    setAttribute(infodiv,{"class":"info"});
    setAttribute(divlink,{"href":''})
    setAttribute(shopbtn,{"class":"btn btn-block btn-primary"})

    //text contents
    store.textContent=phone.official;
    abt.textContent =phone.name;
    current.textContent= "Ksh "+phone.current;
    old.textContent = "Ksh " +phone.old;
    shopbtn.textContent= "ADD TO CART"

    //styling;
    divlink.style.textDecoration="none";
    divlink.style.color ="black";
    store.style.width="fit-content"
    divlink.style.boxShadow ="box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.7);"
    if(store.textContent=='Official Store'){
        store.style.backgroundColor = "red"
    }else{
        store.style.backgroundColor="blue";
    }



    //appending
    imgdiv.appendChild(img);
    infodiv.append(store,abt,current,old,shopbtn);
    divlink.append(imgdiv,infodiv);
    coldiv.appendChild(divlink);
    phoneDiv.appendChild(coldiv);

})

let addproducts=async()=>{
    const details={
        id:document.querySelector("#id").value,
        name:document.querySelector("#name").value,
        price:document.querySelector("#price").value,
        images:document.querySelector("#image").value,
        review:document.querySelector("#review").value,
    }
    let response=await fetch(`http://localhost:5000/api/products`,{
        method:"POST",
        body:JSON.stringify(details),
        headers:{'Content-Type':'application/json'}
    });

    let comming=await response.json();
}

let bomma=async()=>{
    let here=await fetch('http://localhost:5000/api/products');
    let there=await here.json();
    appendinghere(there)
}
bomma();

let here=document.querySelector("#boom");
    let appendinghere=(databro)=>{
        databro.forEach((ele,index) => {
            
            let cre=document.createElement("div");
            let wo=document.createElement("h2");
            wo.innerText=`Id: ${ele.id}`;

            let one=document.createElement("img");
            one.setAttribute("src",ele.images);

            let two=document.createElement("h2");
            two.innerText=`Name: ${ele.name}`;

            let three=document.createElement("h3");
            three.innerText=`💰 :${ele.price}`;

            let four=document.createElement("h2");
            four.innerText=`⭐ :${ele.review}`;

            cre.append(one,wo,two,three,four);
            here.append(cre);
        });
    }




let deleteproducts=async()=>{
    let id=document.querySelector("#del").value;
    let deletefun=await fetch(`http://localhost:5000/api/products/${id}`,{
        method:"DELETE",
        headers:{'Content-Type':'application/json'}
    })
    let output=await deletefun.json();
}

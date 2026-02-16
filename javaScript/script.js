const loadCategories=async()=>{
   const res = await fetch('https://fakestoreapi.com/products/categories');
   const data = await res.json();
   displayCategories(data);
}
const displayCategories = (categories)=>{
    // console.log(categories);
    const allCategories = document.getElementById("all-categories");
    allCategories.innerHTML=""
    categories.map(category=>{
        // console.log(category);
        const createDiv = document.createElement('div');
        createDiv.innerHTML=`
             <button class="btn rounded-3xl">${category}</button>
        `
        allCategories.append(createDiv)
    })
}

const loadAllProducts=async()=>{
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    displayAllProduct(data);
    
}
const displayAllProduct = (products)=>{
    // console.log(products);

    
}
loadCategories()
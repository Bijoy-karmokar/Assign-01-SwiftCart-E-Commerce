  document.addEventListener("DOMContentLoaded", function () {

    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    document.querySelectorAll(".menu a").forEach(link => {
      const linkPage = link.pathname.split("/").pop();

      if (linkPage === currentPage) {
        link.classList.add("active");
      }
    });

  });

const loadAllProducts=async()=>{
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    displayTopRatedProducts(data);
    
}
const displayTopRatedProducts = (products) => {
    // Sort by rating and take top 3
    const topProducts = products
        .filter(p => p.rating && p.rating.rate)
        .sort((a, b) => b.rating.rate - a.rating.rate)
        .slice(0, 3);

    const container = document.getElementById("top-products");
    if (!container) return; // safety check
    container.innerHTML = "";

    topProducts.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("card", "bg-base-100", "shadow-md", "w-72");

        card.innerHTML = `
            <figure class="bg-gray-200">
                <img src="${product.image}" class="w-44 h-44 p-4 object-contain" alt="${product.title}">
            </figure>
            <div class="card-body">
                <div class="flex justify-between items-center font-semibold gap-10 w-full">
                    <div class="badge badge-soft badge-primary">${product.category}</div>
                    <p><i class="fa-solid text-yellow-400 fa-star"></i> ${product.rating.rate} (${product.rating.count})</p>
                </div>
                <p class="truncate font-semibold mt-2">${product.title}</p>
                <p class="font-semibold mt-1">$ ${product.price}</p>
                <div class="card-actions justify-between mt-2">
                    <button class="btn px-5">
                        <i class="fa-regular fa-eye"></i> Details
                    </button>
                    <button class="btn btn-primary px-5">
                        <i class="fa-solid fa-cart-shopping"></i> Add
                    </button>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
};

document.addEventListener("DOMContentLoaded", () => {
    loadAllProducts();
});
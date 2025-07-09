const container = document.getElementById('product-container');

fetch('https://dummyjson.com/products')
    .then(res=>res.json())
    .then(data=>{
        // console.log("DATA",data)
        const productData = data.products;
        productData.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');
            productDiv.innerHTML = `
                <h2>${product.title}</h2>
                <p>Price: $${product.price}</p>
                <img src="${product.image}" alt="${product.title}">
            `;
            container.appendChild(productDiv);
        })
    })
  .catch(err => {
    console.error(err);
});
const carrito = document.querySelector('#carrito');
const template = document.querySelector('#template');
const fragment = document.createDocumentFragment()
const btns = document.querySelectorAll('.card .btn');


// console.log(carrito);
// console.log(template);
// console.log(btns);

const carritoObjeto = [];

const agregarCarrito = (e) => {

    const producto = {
        titulo: e.target.dataset.fruit,
        id: e.target.dataset.fruit,
        cantidad: 1,
    };

    const indice = carritoObjeto.findIndex((item) => item.id === producto.id);

    console.log(indice);

    if (indice === -1) {
        carritoObjeto.push(producto)
    } else {
        carritoObjeto[indice].cantidad++;
    }
    pintarCarrito(carritoObjeto)

    console.log(carritoObjeto);

}

const pintarCarrito = (array) => {

    carrito.textContent = '';

    array.forEach(item => {
        const clone = template.content.firstElementChild.cloneNode(true);
        clone.querySelector('.lead').textContent = item.titulo
        clone.querySelector('.badge').textContent = item.cantidad


        fragment.appendChild(clone)
    })

    carrito.appendChild(fragment)
}

btns.forEach((btn) => btn.addEventListener('click', agregarCarrito))
const recorrerCarrito = () => {

}
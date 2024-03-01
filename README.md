


# Example shopping cart using objets and template.

##template
```html
    <template id="template">
            <li class="list-group-item d-flex justify-content-between aling-items-center">
                <span class="lead">Strawberry</span>
                <span class="badge bg-primary rounded-pill">12</span>
            </li>
        </template>
```
```js
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
```
## Try it at: 
### Have a nice day. Thank you for stopping by!
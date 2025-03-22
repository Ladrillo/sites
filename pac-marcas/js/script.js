const conciertos = {
    Madrid: {
        fecha: '10/05/2025',
        precio: { general: 60, vip: 100 }
    },
    Barcelona: {
        fecha: '15/06/2025',
        precio: { general: 70, vip: 120 }
    },
    Pamplona: {
        fecha: '20/07/2025',
        precio: { general: 50, vip: 80 }
    },
}
if (document.body.classList.contains('index')) {
    index()
} else if (document.body.classList.contains('confirmacion')) {
    confirmacion()
}
function index() {
    const form = document.querySelector('form')
    form.addEventListener('submit', e => {
        e.preventDefault()
        const nombre = document.querySelector('#nombre').value
        const lugar = document.querySelector('#lugar').value
        const cantidad = document.querySelector('#cantidad').value
        const categoria = document.querySelector('#categoria').value
        const metodo_pago = document.querySelector('input[name="metodo_pago"]:checked').value
        window.sessionStorage.setItem('nombre', nombre)
        window.sessionStorage.setItem('lugar', lugar)
        window.sessionStorage.setItem('cantidad', cantidad)
        window.sessionStorage.setItem('categoria', categoria)
        window.sessionStorage.setItem('metodo_pago', metodo_pago)
        window.location.href = 'confirmacion.html'
    })
}
function confirmacion() {
    const nombre = window.sessionStorage.getItem('nombre')
    const lugar = window.sessionStorage.getItem('lugar')
    const categoria = window.sessionStorage.getItem('categoria')
    const metodo_pago = window.sessionStorage.getItem('metodo_pago')
    const cantidad = Number(window.sessionStorage.getItem('cantidad'))
    const fecha = conciertos[lugar].fecha
    const total = conciertos[lugar].precio[categoria] * cantidad
    document.querySelector('#nombre').textContent = nombre
    document.querySelector('#lugar').textContent = lugar
    document.querySelector('#fecha').textContent = fecha
    document.querySelector('#cantidad').textContent = cantidad
    document.querySelector('#categoria').textContent = categoria
    document.querySelector('#metodo_pago').textContent = metodo_pago
    document.querySelector('#total').textContent = `${total} €`
}


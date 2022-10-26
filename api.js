const url = 'https://www.dolarsi.com/api/api.php?type=valoresprincipales'

fetch(url)
.then(response => response.json() )
.then(data => {
    valor_blue = data[1].casa.venta;
    document.getElementById('dolar').innerHTML = 'Las cotizaciones se harán a un valor de dolar de $'+valor_blue;
})
.catch(err=>console.log(err))
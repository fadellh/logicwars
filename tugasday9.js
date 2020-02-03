let products = []

function addNewProduct(){
    let namaProduct = document.getElementById('name').value;
    let hargaProduct = document.getElementById('price').value
    let category = document.getElementById('category').value;
    let condition = document.querySelector('input[name=condition]:checked').value

    let obj = {
        namaProduct,hargaProduct,category,condition
    }
    products.push(obj)
    showList()
}

function showList(){
    let list = products.map(function(element){
        return(
            `
                <tr>
                    <td>${element.namaProduct}</td>
                    <td>${element.hargaProduct}</td>
                    <td>${element.category}</td>
                    <td>${element.condition}</td>
                </tr>
            `
        )

    })
    document.getElementById('hasil').innerHTML = list.join('')
    document.getElementById('form1').reset();
}
showList()


let Hewan = []

function tambahkan(){
    let namaHewan = document.getElementById('namaHewan').value;
    let hargaHewan = document.getElementById('hargaHewan').value;
    let kelaminHewan = document.querySelector('input[name=kelamin]:checked').value
    let jenisHewan = document.querySelector('input[name=Jenis]:checked').value

    let objek = {
        namaHewan,hargaHewan,kelaminHewan,jenisHewan
    } 
    Hewan.push(objek)
    showListHewan()
}

function showListHewan(){
    let listHewan = Hewan.map(function(element){
        return (
            `
            <tr>
                    <td>${element.namaHewan}</td>
                    <td>${element.hargaHewan}</td>
                    <td>${element.kelaminHewan}</td>
                    <td>${element.jenisHewan}</td>
                    
                </tr>
             `
        )
      }
    )
    document.getElementById('result').innerHTML = listHewan.join('')
    document.getElementById('form2').reset();
}
showListHewan()
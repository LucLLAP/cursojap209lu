//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

//var category = {};

/*function showImagesGallery(array){

    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){
        let imageSrc = array[i];

        htmlContentToAppend += `
        <div class="col-lg-3 col-md-4 col-6">
            <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="` + imageSrc + `" alt="">
            </div>
        </div>
        `

        document.getElementById("productImagesGallery").innerHTML = htmlContentToAppend;
    }
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(CATEGORY_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            category = resultObj.data;

            let categoryNameHTML  = document.getElementById("categoryName");
            let categoryDescriptionHTML = document.getElementById("categoryDescription");
            let productCountHTML = document.getElementById("productCount");
            let productCriteriaHTML = document.getElementById("productCriteria");
        
            categoryNameHTML.innerHTML = category.name;
            categoryDescriptionHTML.innerHTML = category.description;
            productCountHTML.innerHTML = category.productCount;
            productCriteriaHTML.innerHTML = category.productCriteria;

            //Muestro las imagenes en forma de galería
            showImagesGallery(category.images);
        }
    });
});*/

getJSONData(PRODUCTS_URL).then(function(resultObj){
    if (resultObj.status === "ok"){
        relacionados = resultObj.data;
        productosRelacionados();
    }
});
getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultObj){
    if (resultObj.status === "ok"){
        comentarios = resultObj.data;
        mostrarComentarios();
    }
});

function productosRelacionados(){
    let related= [];
    let listProduct = "";
    
    for (let a=0; a<relacionados.length; i++){
if (a===1 || a===3){
    related.push(relacionados[a])
    listProduct+=  `<a href="product-info.html" class="list-group-item list-group-item-action">
   <div class="row">
   <div class= "col-3">
   <ing src="` + relacionados[a].imagSrc + `" alt="` + relacionados[a].description +`"class=ing-thumbnail">
 </div>
 <div class="col">
 <div class= "d-flexn-100 justify-content-between">
 <h4 class="mb-1"> `+relacionados[a].name +`</h4>
 <small class="tex-nuted">`+ relacionados[a].currency + ` ` + relacionados[a].cost + `<br>` + relacionados[a]`
 </div>
 <p class="mb-1">
     </div>
     </div>
    </a>`
}
    }
    document.getElementById("relacionados").innerHTML= listProduct;
}

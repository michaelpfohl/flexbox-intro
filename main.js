console.log("Finally, flexbox!")
 
const addCats = (catImage) => {
    for (let i=0; i<99; i++){
        let image = document.createElement("img");
        image.setAttribute("src", catImage)
        document.getElementById("cats").appendChild(image);
    }
}

addCats("https://fatcatart.com/wp-content/uploads/2011/02/Malevich_Black_Square-cat-sm1.jpg");
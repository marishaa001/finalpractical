function process() {
    var searchTerm = document.getElementById("findbox").value;
    document.getElementById("findbox").value = "";
    var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`;




    fetch(url)
    .then(res => res.json())
    .then(data => display(data.meals));
}




function display(items) {
    var container = document.getElementById("container");
    container.textContent = "";




    var maxToShow = 5;




    for (var i = 0; i < items.length; i++) {
        if (i < maxToShow) {
            var newDiv = document.createElement("div");
            newDiv.innerHTML = `Meal ID: <b>${items[i].idMeal}</b> <br> Meal Title: <b>${items[i].strMeal}</b><br>
                                <img src="${items[i].strMealThumb}"><br>
                               <b> Cooking Instruction: </b> ${items[i].strInstructions}<br><br>`;
            newDiv.classList.add("innerStyle");
            container.appendChild(newDiv);
        } else {
            if (i === maxToShow) {
                var showMoreButton = document.createElement("button");
                showMoreButton.textContent = "Show More";
                showMoreButton.onclick = function() {
                    for (var j = maxToShow; j < items.length; j++) {
                        var newDiv = document.createElement("div");
                        newDiv.innerHTML = `Meal ID: <b>${items[j].idMeal}</b> <br>  Meal Title: <b>${items[j].strMeal}</b><br>
                                            <img src="${items[j].strMealThumb}"><br>
                                            <b>Cooking Instruction:</b> ${items[j].strInstructions}<br><br>`;
                        newDiv.classList.add("innerStyle");
                        container.appendChild(newDiv);
                    }
                    showMoreButton.style.display = "none";
                };
                container.appendChild(showMoreButton);
            }
        }
    }
}
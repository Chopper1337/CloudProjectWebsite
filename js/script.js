function API(){
    //Fetch from API
    fetch("https://aqtbxxpcwc.execute-api.eu-west-1.amazonaws.com/GetData", {
        "method": "GET"
    })
    .then(function(response){
        return response.json() //Format the response as JSON

    })
    .then(function(data){
        //Create div of class row
        console.log(data)

        var base = document.getElementById("appendToHere")
        
        //Creating a game card
        function createGameCard(Title,Description,Developer,Platform,ReleaseYear,SuggestedEmulator,imageURL){
            //Create main card element
            var cardElement = document.createElement("div")
            cardElement.className = "card"
            base.append(cardElement)
            
            //Create image element
            var image = document.createElement("img")
            image.className = "card-img-top"
            image.attributes.src=imageURL
            cardElement.append(image)
          
            //Create card body element
            var cardBody = document.createElement("div")
            cardBody.className="card-body"
            cardElement.append(cardBody)

            //Create title element
            var titleElement = document.createElement("h5")
            titleElement.className = "card-title"
            titleElement.innerHTML = Title
            cardBody.append(titleElement)
          
            //Create description element
            var cardText = document.createElement("p")
            cardText.className = "card-text"
            cardText.innerHTML = Description
            cardBody.append(titleElement)
            
            // Create unordered list element
            var unorderedList = document.createElement("ul")
            unorderedList.className = "list-group list-group-flush"
            cardElement.append(unorderedList)
          
            // Create release year element
            var listitemReleaseYear = document.createElement("li")
            listitemReleaseYear.className = "list-group-item"
            listitemReleaseYear.innerHTML = ReleaseYear
            unorderedList.append(listitemReleaseYear)

            // Create developer element
            var listitemDev = document.createElement("li")
            listitemDev.className = "list-group-item"
            listitemDev.innerHTML = Developer
            unorderedList.append(listitemDev)

            // Create platform element
            var listitemPlat = document.createElement("li")
            listitemPlat.className = "list-group-item"
            listitemPlat.innerHTML = Platform
            unorderedList.append(listitemPlat)

            // Create suggested emulator element
            var listitemEmu = document.createElement("li")
            listitemEmu.className = "list-group-item"
            listitemEmu.innerHTML = SuggestedEmulator
            unorderedList.append(listitemEmu)
        }
  
        var i = 0;
        //For each of the arrays contents
        while(i < 6){
      
            //If title value is greater than zero, do this function and pass through required values, else exit loop
            createGameCard()
            i++;
        }
    })
    .catch(err => {
        //Never been used B)
        console.error(err);
    }); 
}
  
function CreateGame(){
    //function createGameCard(Title,Description,Developer,Platform,ReleaseYear,SuggestedEmulator,imageURL)
    var title = document.getElementById("gameTitle").value
    console.log(title)

    const requestOptions = {
        method: 'PUT',
        headers: {  
            'Access-Control-Allow-Origin' : '*',
            'mode':'no-cors'
            /*'Content-Type': 'application/json',
            'Authorization': 'Bearer my-token',
            'My-Custom-Header': 'foobar'*/
        },
        body: JSON.stringify({
            "id":10,
            "Title": title
        })
    };
    fetch("https://g4mby9pos7.execute-api.eu-west-1.amazonaws.com/AddData", requestOptions)
}
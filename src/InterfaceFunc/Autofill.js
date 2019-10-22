const uniqueId = require( '../Events/Events');

 const keyDownActiveOption = (currentOptions) => {
    for (var i = 0; i < currentOptions.length; i++) {
            let elementId = document.getElementById('searchBar'+currentOptions[i].id)
        if( i !== currentOptions.length -1){
            let nextelementId = document.getElementById('searchBar'+currentOptions[i+1].id)
            if(elementId.classList.contains("active")){
                elementId.classList.remove("active")
                nextelementId.classList.add("active")
                console.log('occurs')
                return;
            }
        }else if(elementId.classList.contains("active")){
            return 
        }
    }
 document.getElementById('searchBar'+currentOptions[0].id).classList.add("active");
}

const keyUpActiveOption = (currentOptions) => {
    for (var i = currentOptions.length-1; i >= 0; i--) {
        let elementId = document.getElementById('searchBar'+currentOptions[i].id)
        if(i === 0){
            elementId.classList.remove("active")
            return 
        }else if( i !== 0 && i > -1 ){
            let nextelementId = document.getElementById('searchBar'+currentOptions[i-1].id)
            if(elementId.classList.contains("active")){
                elementId.classList.remove("active")
                nextelementId.classList.add("active")
                return;
            }
        }
    }
}


const keySubmission = (currentOptions) => {
    for (var i = 0; i < currentOptions.length; i++) {
        let elementId = document.getElementById('searchBar'+currentOptions[i].id)
        if(elementId.classList.contains("active")){
            window.uniqueId = currentOptions[i].id
            window.dispatchEvent(uniqueId)
            document.getElementById("Search-Bar-Id").value = "";
            return;
        }
    }
}

module.exports = { keyDownActiveOption, keyUpActiveOption, keySubmission }
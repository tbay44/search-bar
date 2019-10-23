const uniqueId = require( '../Events/Events');

 const keyDownActiveOption = (currentOptions) => {
    for (var i = 0; i < currentOptions.length; i++) {
            let elementId = document.getElementById('searchBar'+currentOptions[i].id)
        if( i !== currentOptions.length -1){
            let nextelementId = document.getElementById('searchBar'+currentOptions[i+1].id)
            if(elementId.classList.contains("active-autofill")){
                elementId.classList.remove("active-autofill")
                nextelementId.classList.add("active-autofill")
                console.log('occurs')
                return;
            }
        }else if(elementId.classList.contains("active-autofill")){
            return 
        }
    }
 document.getElementById('searchBar'+currentOptions[0].id).classList.add("active-autofill");
}

const keyUpActiveOption = (currentOptions) => {
    for (var i = currentOptions.length-1; i >= 0; i--) {
        let elementId = document.getElementById('searchBar'+currentOptions[i].id)
        if(i === 0){
            elementId.classList.remove("active-autofill")
            return 
        }else if( i !== 0 && i > -1 ){
            let nextelementId = document.getElementById('searchBar'+currentOptions[i-1].id)
            if(elementId.classList.contains("active-autofill")){
                elementId.classList.remove("active-autofill")
                nextelementId.classList.add("active-autofill")
                return;
            }
        }
    }
}


const keySubmission = (currentOptions) => {
    for (var i = 0; i < currentOptions.length; i++) {
        let elementId = document.getElementById('searchBar'+currentOptions[i].id)
        if(elementId.classList.contains("active-autofill")){
            window.uniqueId = currentOptions[i].id
            window.dispatchEvent(uniqueId)
            document.getElementById("Search-Bar-Id").value = "";
            return;
        }
    }
}

module.exports = { keyDownActiveOption, keyUpActiveOption, keySubmission }
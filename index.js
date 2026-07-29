const characters = ["A", "B", "C", "D", "E", "F","G", "H","I","J", "K","L","M", "N", "O", "P", "Q","R", "U","v", "w", "x", "Y", "Z", "a", "b", "c", "d", "e","f", "g",
    "h", "i","j","k","l","m", "n", "o","p","q","t", "u", "v", "w",
    "x", "y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`",
    "!", "@", "$", "%", "A", ",","^", "&", "*","(",")","_","-","+","=", 
    "{","[","}","]",",","|",":",";","<",">",".","?","/"];


let pass1El = document.getElementById("pass1-el")
let pass2El = document.getElementById("pass2-el")
let genpass = document.getElementById("genpass")


genpass.addEventListener("click", function(){

    let password1 = ""
    let password2 = ""

    for (let i=0; i < 15 ; i++){

        let randomIndex1 = Math.floor(Math.random() * characters.length)
        let randomIndex2 = Math.floor(Math.random() * characters.length)

        password1 += characters[randomIndex1]
        password2 += characters[randomIndex2]
        
    }

    pass1El.textContent = password1
    pass2El.textContent = password2

})

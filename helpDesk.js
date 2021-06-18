function signedIn(){
    alert("You are successfully signed In.")
}
// let suggestion = [
//     "I see a 'Verify Mobile Number' message every time I try to log in. What should I do now?",

//     "What are flexible contests?",
//      "How Do I withdraw my winnings?",
//      "How do I change my email ID?",
//      "How do I change my mobile number?",
//      "How do I change my bank account?",
//      "How can I keep my Dream11 account safe?",
//      "The New Invite Friends Program"

// ]
var suggestion = []
var suggestionItems =document.querySelectorAll('li')
for(i=0;i<suggestionItems.length;i++){
    let temp = suggestionItems[i].textContent.trim()
 suggestion.push(temp) 

}

console.log(suggestion)

const searchWrapper = document.querySelector(".searchInput")
const inpuBox = searchWrapper.querySelector("input")
const suggBox = searchWrapper.querySelector(".autoCompleteBox")

// console.log(searchWrapper,inpuBox,suggBox)

inpuBox.onkeyup = function(e){
   let userInput =  e.target.value
   let tempArray = []
   //console.log(userInput)
   if(userInput){
       //dragging the data from list which starts with the given user Input
          tempArray = suggestion.filter(function(data){
            return data.toLocaleLowerCase().startsWith(userInput.toLocaleLowerCase())
       })
       //just Adding a list tag in order to insert in Html
        tempArray = tempArray.map(function(data){
            return data = "<li>" + data+"</li>"
        })
        //  console.log(tempArray)
        searchWrapper.classList.add("activate")//used to show autocomplete box
        showSuggestion(tempArray)
        var wholeList = suggBox.querySelectorAll("li");
        for(var i=0;i<wholeList.length;i++){
            //adding onclick attribute to each element of the list
           wholeList[i].setAttribute('onclick','selectItem(this)')
        }

    }
    else{
        searchWrapper.classList.remove("activate")//hide autocomplete box
    }
    
   }

   function showSuggestion(items){
       let itemsList ;
       if(!items.length){
           userInput = inpuBox.value
           itemsList ="<li>"+ userInput+"</li>"
           
       }
       else{
        itemsList = items.join("")
       }
       suggBox.innerHTML = itemsList
       
   }
   function selectItem(element){
       const listItemContent = element.textContent
     //    console.log(listItemContent)
    inpuBox.value = listItemContent
    

    searchWrapper.classList.remove("activate")
   }
  

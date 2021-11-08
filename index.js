var striked = false;

var purchasedItems = [];
var unpurchasedItems = [];
var combinedItems;

function strikeThrough(button) {
    if(!striked) {
        button.style.textDecoration = "line-through";

        striked = true;
    }
    else {
        button.style.textDecoration = "none";

        striked = false;
    }
}

function groAdd() {
    if(combinedItems) {
        let newList = document.createElement("ol");
        newList.setAttribute("id", "list");

        document.body.replaceChild(newList, document.getElementById("list"));

        for(let item of combinedItems) {
            newList.appendChild(item);
        }
    }
    
    let list = document.getElementById("list");
    let gro = window.prompt("Enter a grocery");
    let item = document.createElement("li");

    item.innerHTML = gro;
    item.setAttribute("onclick", "strikeThrough(this)");

    list.appendChild(item);

    if(combinedItems) {
        combinedItems.push(item);

        purchasedItems = [];
        unpurchasedItems = [];
    }
}

function showPurchased(choice) {
    let items = document.getElementsByTagName("li");
    
    for(let item of items) {
        if(item.style.getPropertyValue("text-decoration") == "line-through") {
            purchasedItems.push(item);
        }
        else {
            unpurchasedItems.push(item); 
        }

        console.log(item);
    }

    var oldList = document.getElementById("list");

    if(choice) {
        let newList = document.createElement("ol");
        newList.setAttribute("id", "list");
        
        document.body.replaceChild(newList, oldList);

        for(let item of purchasedItems) {
            newList.appendChild(item);
        }
    }
    else {
        let newList = document.createElement("ol");
        newList.setAttribute("id", "list");

        document.body.replaceChild(newList, oldList);

        for(let item of unpurchasedItems) {
            newList.appendChild(item);
        }
    }

    combinedItems = purchasedItems.concat(unpurchasedItems);
}
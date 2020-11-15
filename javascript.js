//Mattias Källström

var userInput=document.getElementById("add-item");
var addButton=document.getElementsByTagName("button")[0];
var NotDone=document.getElementById("itemsToDo");
var DoneDone=document.getElementById("itemsDone");


var createNewTaskElement=function(taskString){

	var listItem=document.createElement("li");
	var finishedButton=document.createElement("button");
	var label=document.createElement("label");
	var editInput=document.createElement("input");
	var editButton=document.createElement("button");
	var deleteButton=document.createElement("button");

	label.innerText=taskString;

	finishedButton.innerText="\u2713";
	finishedButton.className="finished";
	editInput.type="text";

	editButton.innerText="Redigera";
	editButton.className="edit";
	deleteButton.innerText="Ta bort";
	deleteButton.className="delete";



	
	
	listItem.appendChild(label);
	listItem.appendChild(editInput);
	listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);
    listItem.appendChild(finishedButton);
	return listItem;
}



var addTask=function(){
	
	
    var listItem=createNewTaskElement(userInput.value);
  	NotDone.appendChild(listItem);
	bindTaskEvents(listItem, completed);

	userInput.value="";

}



var editTask=function(){
var listItem=this.parentNode;

var editInput=listItem.querySelector('input[type=text]');
var label=listItem.querySelector("label");
var containsClass=listItem.classList.contains("editText");
		
		if(containsClass){
			label.innerText=editInput.value;
		}else{
			editInput.value=label.innerText;
		}

		listItem.classList.toggle("editText");
}

var deleteTask=function(){

		var listItem=this.parentNode;
		var ul=listItem.parentNode;
		
		ul.removeChild(listItem);

}

var completed=function(){
		
	
	var listItem=this.parentNode;
	DoneDone.appendChild(listItem);
				bindTaskEvents(listItem, notCompleted);

}

var notCompleted=function(){

		var listItem=this.parentNode;
	NotDone.appendChild(listItem);
			bindTaskEvents(listItem,completed);
}



var ajaxRequest=function(){
}


addButton.addEventListener("click",addTask);
addButton.addEventListener("click",ajaxRequest);


var bindTaskEvents=function(taskListItem,completed){

	var finishedButton=taskListItem.querySelector("button.finished");
	var editButton=taskListItem.querySelector("button.edit");
    var deleteButton=taskListItem.querySelector("button.delete");
    
			editButton.onclick=editTask;
			
			deleteButton.onclick=deleteTask;
			
			finishedButton.onclick=completed;
}

	for (var i=0; i<NotDone.children.length;i++){
		
		bindTaskEvents(NotDone.children[i],completed);
	}
	for (var i=0; i<DoneDone.children.length;i++){
	
		bindTaskEvents(DoneDone.children[i],notCompleted);
	}

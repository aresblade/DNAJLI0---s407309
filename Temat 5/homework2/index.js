
function getTemplate(Obj) {
    return  "<div class='list-row' style=' display: inline-block;'>" + 
						 Obj + 
					"</div>  " +
            "<button class='List-remove'>-</div>";
}

function readList() {
 	   var ListValue = document.querySelector('#List');
	   
    return {
        List: ListValue.value,
    };
}


window.addEventListener('DOMContentLoaded', function () {
	

		var AddToListBtn = document.querySelector('#AddToList');
		
	    AddToListBtn.addEventListener('click', function() {
			 
			 
			   var list = [];	
			   
			   var ListValue = document.querySelector('#List').value;
			
				var Listlist = document.querySelector('#Listlist');	
			
				var template = getTemplate(ListValue);	
				var DomElement = document.createElement('li'); 
				list.push(ListValue);	
				DomElement.innerHTML = template;	
				if (ListValue.length > 0)	
				{

				Listlist.appendChild(DomElement);
				}
				
				
				var removeBtn = DomElement.querySelector('.List-remove');	
				removeBtn.addEventListener('click', function() {
				
					var index = list.indexOf(ListValue);	
					if (index >= 0) {
						list.splice(index, 1);
					}
					
					Listlist.removeChild(DomElement);


				
				});
    });
});

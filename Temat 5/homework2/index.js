//Ta śmieszna funkcja dodaje tzw. listy, tworzy checkboxa oraz ten drugi śmieszny pliczek
function getTemplate(Obj) {
    return  "<div class='list-row' style=' display: inline-block;'>" + 
						 Obj + 
					"</div>" +
				"<input type='checkbox' id='myCheck'>" +
            "<button class='List-remove'>-</div>";
}
//Na początku był tu obiekt, ale teraz nie ma znaczenia skoro jest to jeden argument, bezużyteczne na ten moment
function readList() {
 	   var ListValue = document.querySelector('#List');
	   
    return {
        List: ListValue.value,
    };
}


//To jest ważne
window.addEventListener('DOMContentLoaded', function () {
	
		var zlicz = 0;
		var max = 0;
		 document.getElementById("max").innerHTML = max;	// wypisuje od razu ile jest max elementow
		  document.getElementById("ilosc").innerHTML = zlicz; // Wypisuje od razu ile jest obecnie zaznaczonych elementow
		var AddToListBtn = document.querySelector('#AddToList');	// Biere buttona do selectora
		
	    AddToListBtn.addEventListener('click', function() {	// tworze z tym smiesznym buttonem akcje
			 
			 
			   var list = [];	// Bartek, to tworzy tablice
			   
			   var ListValue = document.querySelector('#List').value;	// tutaj pobieram wartosc z pola textowego
			
				var Listlist = document.querySelector('#Listlist');	
			
				var template = getTemplate(ListValue);	// Proste przypisanie wartosci z textu do templatki
				var DomElement = document.createElement('li'); // nie mam pojęcia po co to jest, ale działa więc niech będzie, 
				list.push(ListValue);	
				DomElement.innerHTML = template;	
				if (ListValue.length > 0)	// sprawdzam czy dlugosc tekstu jest wieksza niz 0
				{
				max++;
				document.getElementById("max").innerHTML = max;	// po zwiekszeniu wypisuje
				Listlist.appendChild(DomElement);	// wrzucam cala templatke
				}
				
				
				var removeBtn = DomElement.querySelector('.List-remove');	//tworzymy buttona z -
				removeBtn.addEventListener('click', function() {
				
					var index = list.indexOf(ListValue);	// pobieram indexa tego elementu ktory sobie zaznacze // chyba
					if (index >= 0) {
						list.splice(index, 1);
					}
					
					Listlist.removeChild(DomElement);	// wiadomo	
				      max--;
					 document.getElementById("max").innerHTML = max;	
					if ( Checkbox.checked && zlicz > 0)	
					{
					 zlicz--;
					 document.getElementById("ilosc").innerHTML = zlicz;
					}
				
				});
				
				var Checkbox = DomElement.querySelector('#myCheck');	//to samo co wyzej
				Checkbox.addEventListener('change', function() {
				if (Checkbox.checked) {
					zlicz++;
					document.getElementById("ilosc").innerHTML = zlicz;
				} else {
					zlicz--;
					 document.getElementById("ilosc").innerHTML = zlicz;
				}
			});
		
		
    });
	

	
	
	
	
});
function templatka(Obj)
{
	return "<div>"+
			 Obj + "    " +
			 "<button id='usun'> - </button>"+
			 "<input type= 'checkbox' id ='check' />"+
			"</div>";
}


	var list =[];
	var click = document.getElementById("Add");
	click.addEventListener('click', function() {
		var dodaj = document.getElementById("Historyjka").value;
		
		var gdziemabyc = document.getElementById("tutaj");
		var template = templatka(dodaj);
		var DOM = document.createElement("li");
		list.push(dodaj);
		DOM.innerHTML = template;
		gdziemabyc.appendChild(DOM);
		
		var usun = DOM.querySelector("#usun");
		usun.addEventListener('click', function() {
			
			var index = list.indexOf(dodaj);
			if(index >=0)
			{
				list.splice(index,1);
			}
			tutaj.removeChild(DOM);
		});
		
		var checkbox = DOM.querySelector("#check");
		checkbox.addEventListener('change', function() {
			if (checkbox.checked)
			{
			var gdzie=	document.getElementById("zaznaczone");
			gdzie.innerHTML = "Zaznaczyłeś mnie";
			}
			else
			{
			document.getElementById("zaznaczone").innerHTML= "Odznaczyłeś mnie";
			}
			
		});
		
	});
	
	
	

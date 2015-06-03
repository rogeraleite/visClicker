
var vis = ["ScatterPlot","BarChart","TreeMap","HBE","ParallelCoordinates"];
var counter = [0,0,0,0,0];



	function clickCounter(i){
		console.debug("aaa");
		
		counter[i]++;

		//$("#clicker-count").text("VisClicker: "+counter);
		$("#"+vis[i]).find("h2").textContent = vis[i]+": "+counter[i];
	};	

	function generateElements(){
		//console.debug("aaa");
		for(var i=0; i<vis.length;i++){
			//Cria div para cada Vis
			var elem = document.createElement('div');
			elem.id = vis[i];

			//Faz titulo
			var title = document.createElement('h2');
			title.textContent = vis[i]+": "+counter[i];
			elem.appendChild(title);
			
			//Faz e busca imagem correspondente
			var img = document.createElement('img');
			img.src = picAddressByName(vis[i]);
			
			//Adiciona funcionalidade
			img.addEventListener('click',(function(iCopy){
				return function(){
					console.debug("aaa");		
					counter[iCopy]++;
					$("#"+vis[iCopy]).find("h2").text(vis[iCopy]+": "+counter[iCopy]);
				}
			})(i));
			

			elem.appendChild(img);
			document.body.appendChild(elem);
		}
	};

	function picAddressByName(name){
		switch(name){
			case "ScatterPlot":
				return "plot.png";
				break;
			case "BarChart":
				return "bar.png";
				break;
			case "TreeMap":
			    return "treemap.png";
				break;
			case "HBE": 
				return "edge.png";
				break;
			case "ParallelCoordinates":
				return "coor.png";
				break;
			default: return "erro.png";
		}
	};

var vis = ["ScatterPlot","BarChart","TreeMap","HBE","ParallelCoordinates"];
var counter = [0,0,0,0,0];



	function generateElements(){
		//console.debug("aaa");
		generateImages();
		generateList();		
	};


	function generateList(){
		
		var listDiv = $("#main-list");
		var listElement = document.createElement("ul");
		
		for(var i=0; i<vis.length; i++){
			var li = document.createElement('li');
			var id = vis[i];
			li.id = id;
			li.textContent = id;
			li.addEventListener('click',turnVisible);
			listElement.appendChild(li);
		}

		listDiv.append(listElement); //append() vem do jQuery
	}

	function generateImages(){
		var imageList = $("#image-list");
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
					console.debug("aaa: "+counter[iCopy]);       
					counter[iCopy]++;
					imageList.find("#"+vis[iCopy]).find("h2").text(vis[iCopy]+": "+counter[iCopy]);
				}
			})(i));         

			elem.appendChild(img);
			elem.style.float = "left";//alinha horizontalmente as imagens
			elem.style.visibility = "hidden";
			imageList.append(elem);
		}
	}

	function picAddressByName(name){
		switch(name){
			case "ScatterPlot":
				return "plot.png";
			case "BarChart":
				return "bar.png";
			case "TreeMap":
				return "treemap.png";
			case "HBE": 
				return "edge.png";
			case "ParallelCoordinates":
				return "coor.png";
			default: 
				return "error.png";
		}
	};

	function turnVisible(){
		
		var images = $("#image-list"); 
		//debugger;
		//always gives you a nodeList object, that's why we need to get the first element '[0]'
		images.find("#"+this.id)[0].style.visibility = "visible";

		for(var i=0; i<vis.length; i++){
			if(vis[i]!=this.id){
				
				console.debug(vis[i]);
				images.find("#"+vis[i])[0].style.visibility = "hidden";
			}//end if
		}//end for

	}
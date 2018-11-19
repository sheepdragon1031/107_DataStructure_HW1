(()=>{
	let data = [[0,1,2],[],[]]
	const main = document.getElementById('main')
	let view = () =>{
		main.innerHTML = '';
		data.map((element , index) => {
			main.innerHTML += `<div class='batang' data-id=${index}>`;
			data[index].map((elements , indexs) => {
				main.children[index].innerHTML += `<div class="brick w${elements}" data-id=${elements}></div>`;
			})
		})
		$( ".brick" ).draggable({ 
			scroll: true,
			revert: "invalid"
		});
		$( ".batang" ).sortable({
			revert: true
		  });
		$('.batang').droppable({
			drop: (elementx) => {
				let oragin = $(elementx.toElement.offsetParent);
				let index = $(elementx.target);
				let value = $(elementx.toElement);
				if(data[index.attr('data-id')].length == 0){
					if(value.attr('data-id') == data[oragin.attr('data-id')][0]){
					data[index.attr('data-id')] = [value.attr('data-id')];
					data[oragin.attr('data-id')].splice(0,1);
					value.remove();
					}
				}
				else{
					if(data[index.attr('data-id')][0] > value.attr('data-id')){
							data[index.attr('data-id')].unshift(value.attr('data-id'));
							data[oragin.attr('data-id')].splice(0,1);
							value.remove();
					}	
				}
				view()
			}
		});
	}
	view()	
})()

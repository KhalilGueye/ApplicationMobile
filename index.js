function addTask() {
	let newTask = document.createElement('li');
	newTask.innerHTML = task.value;
	$(newTask).on('swipeleft', gererSwipeLeft);
	$(newTask).on('swiperight', gererSwipeRight);
	const taskList = document.getElementById('taskList');
	taskList.appendChild(newTask)
	$(taskList).listview('refresh');
}
	
function reinitialiser(){
taskList.innerHTML = '';
}
function gererSwipeRight(){
	$(this).toggleClass('done');
}
function gererSwipeLeft(){
	$(this).hide('slow', function(){
		$(this).remove()
	});
}
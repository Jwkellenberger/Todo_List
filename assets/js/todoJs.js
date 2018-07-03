//jQuery Way
$('.todoList').on('click', '.todoText',function(event){
    $(this).toggleClass('crossed');
    event.stopPropagation;
});

//javascript way
//var listItem = document.getElementsByClassName('todo');
//function crossOut(){
//    this.classList.toggle('crossed');
//}
//for(var i = 0; i<listItem.length; i++){
//    listItem[i].addEventListener('click', crossOut);
//}

function paintOdd(){
    $('.todo:even').addClass('even').removeClass('odd');
    $('.todo:odd').addClass('odd').removeClass('even');
}

// document.querySelector('.todoList').children.length

function addTodo(event){
    if(event.which == 13 && $(this).val() !== "" && document.querySelector('.todoList').children.length < 14){
        var value = $(this).val();
        var txt = "";
        $('.todoList').append("<li class='todo'> <i class='fas fa-trash deleteTodo'></i><span class='todoText'>" + value + "</span></li>");
        $(this).val("");
        $('.todoList').css('background', 'white');
    }
    else if(event.which == 13){
        $(this).val("List Full!");
    }
}

function deleteTodo(){
    $(this).parent().fadeOut(1000,function(){
        $(this).remove();
    });
}

//paintOdd();
//$('.deleteTodo').on('click',deleteTodo); this way would require us to reADD delete to newly made todos
$('.todoList').on('click', '.deleteTodo', deleteTodo); //more robust method that auto adds method to all li that enter ul.
$('#newTodo').on('keydown', addTodo);
$('#plusIcon').on('click', function(){
    $('input[type="text"]').fadeToggle(300);
    console.log('working');
});

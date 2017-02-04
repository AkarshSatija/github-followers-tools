debugger;

var me='akarshsatija';

var list=$('.d-table.col-12.width-full.py-4.border-bottom.border-gray-light > .pr-3 > .mb-1 ');

list.append('<span> [Follows You]</span>');

window.onpopstate=function(){
	console.log("state changed")
}


// get number of following https://api.github.com/users/akarshsatija
//get all following
// save in DB or local storage


$.get('https://api.github.com/users/'+me+'/following?per_page=100')

var udata=localStorage.getItem('uinfo');
var user=JSON.parse(udata);
 //alert(user[0]);
if(user==null){
 window.location='login.html'
}
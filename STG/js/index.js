//获取菜单 c
var inst = new mdui.Menu('#menuBtn', '#menu');
var menuBtn = document.getElementById("menuBtn");
menuBtn.addEventListener("click", function(e){
    inst.open();
});

//功能
function back_to_index(){
    window.location.href='index.html'
}

function add_group_admin(){
    window.open('mqqwpa://im/chat?chat_type=wpa&uin=2315810596&version=1&src_type=web&web_src=oicqzone.com')
}
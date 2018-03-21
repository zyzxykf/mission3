var pfhover = document.getElementById("pf");

var pfmenu = document.getElementById("pfmenu");

var brimenuWrap = document.querySelector(".brimenu-wrapper");

var bri = document.querySelector(".bri");

pfhover.onmouseover = function () {
	pfmenu.style.display = "block";
}

function pfmenuout(pfout) {
	pfout.style.display = "none";
}


bri.onmouseover = function () {
	brimenuWrap.style.display = "block";
}

function brimenuWrapper(brimenuout) {
	brimenuWrap.style.display = "none";
}

var iptFocus = document.getElementById("kw");

var siptwap =document.getElementsByClassName("s_ipt_wap");

iptFocus.onfocus = function() {
	siptwap[0].classList.add("iptfocus");
}

iptFocus.onblur = function() {
	siptwap[0].classList.remove("iptfocus");
}

var btnhovers = document.getElementsByClassName("s_btn");

btnhovers[0].onmouseover = function () {
	btnhovers[0].classList.add("btnhover");
}

btnhovers[0].onmouseleave = function () {
	btnhovers[0].classList.remove("btnhover");
}
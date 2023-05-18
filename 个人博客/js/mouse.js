function pop_none() {
	document.querySelector('.F12').style = "transform: translateX(330px);"
}

function pop_block() {
	document.querySelector('.F12').style = "transform: translateX(40px);"
	document.addEventListener('click', function(event) {
		pop_none()
	});
}

window.addEventListener('mousewheel', function(event) {
	if (event.ctrlKey === true || event.metaKey) {
		event.preventDefault();
	}
}, {
	passive: false
});

window.addEventListener('DOMMouseScroll', function(event) {
	if (event.ctrlKey === true || event.metaKey) {
		event.preventDefault();
	}
}, {
	passive: false
});

document.addEventListener('keydown', function(event) {
	if (event.ctrlKey && event.keyCode === 85) {
		event.preventDefault();
		pop_block()
		setTimeout(pop_none, 5000)
	}
	if (event.ctrlKey && event.keyCode === 83) {
		event.preventDefault();
		pop_block()
		setTimeout(pop_none, 5000)
	}
	if (event.keyCode === 123) {
		event.preventDefault();
		pop_block()
		setTimeout(pop_none, 5000)
	}
	if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
		event.preventDefault();
		pop_block()
		setTimeout(pop_none, 5000)
	}
});

setInterval(function() {
	check();
}, 2000);
var check = function() {
	function doCheck(a) {
		if (('' + a / a)['length'] !== 1 || a % 20 === 0) {
			(function() {} ['constructor']('debugger')());
		} else {
			(function() {} ['constructor']('debugger')());
		}
		doCheck(++a);
	}
	try {
		doCheck(0);
	} catch (err) {}
};
check();
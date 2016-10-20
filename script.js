var hamb = document.querySelector('.hamburger');
var hambBg = document.querySelector('#hamb-bg');

hamb.onclick = function()
{
	if (hamb.classList.contains('is-active'))
	{
		hamb.classList.remove('is-active');
		hambBg.style.width = '0px';
		hambBg.style.right = '-400px';
		hambBg.style.opacity = '0';
	}
	else
	{
		hamb.classList.add('is-active');
		hambBg.classList.remove('displayNone');
		hambBg.style.width = '400px';
		hambBg.style.right = '0px';
		hambBg.style.opacity = '1';
	}
}

var mapy = document.querySelector('.mapy');
var map = document.querySelector('#map');

map.classList.add('scroll-off');

mapy.onmouseup = function ()
{
	map.classList.add('scroll-off');
}

mapy.onmousedown = function ()
{
	map.classList.remove('scroll-off');
}

mapy.onmouseleave = function ()
{
	map.classList.add('scroll-off');
}



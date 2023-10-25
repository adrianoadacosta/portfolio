/** @format */
document.addEventListener('DOMContentLoaded', function () {
	const linkSobreMim = document.getElementById('link-sobre-mim');
	const linkHome = document.getElementById('link-home');

	if (window.location.href.indexOf('projetos.html') > -1) {
		// Se estiver na página de projetos, oculte o link "Sobre mim" e mostre o link "Home"
		linkSobreMim.style.display = 'none';
		linkHome.style.display = 'block';
	} else if (window.location.href.indexOf('pessoal.html') > -1) {
		linkSobreMim.style.display = 'none';
		linkHome.style.display = 'block';
	} else {
		// Se estiver em qualquer outra página (por exemplo, a página inicial), faça o contrário
		linkSobreMim.style.display = 'block';
		linkHome.style.display = 'none';
	}
});

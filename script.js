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

	const navItems = document.querySelectorAll('.nav-item');

	// Função para adicionar a classe 'active' ao item do menu correspondente à página atual
	function setActiveMenuItem() {
		const currentPage = window.location.href;

		navItems.forEach((item) => {
			item.classList.remove('active');

			// Verifica se a URL do item do menu corresponde à página atual
			if (currentPage.includes(item.querySelector('a').getAttribute('href'))) {
				item.classList.add('active');
			}
		});
	}

	window.addEventListener('scroll', function () {
		var backToTopButton = document.getElementById('back-to-top');
		if (window.pageYOffset > 300) {
			// Altere este valor conforme necessário
			backToTopButton.style.display = 'block';
		} else {
			backToTopButton.style.display = 'none';
		}
	});

	document.getElementById('back-to-top').addEventListener('click', function () {
		window.scrollTo({ top: 0, behavior: 'smooth' }); // Para fazer a rolagem suave
	});

	// Adiciona a classe 'active' ao carregar a página
	window.onload = setActiveMenuItem;

	// Adiciona um evento de clique a cada item do menu
	navItems.forEach((item) => {
		item.addEventListener('click', function () {
			// Remove a classe 'active' de todos os itens do menu
			navItems.forEach((item) => {
				item.classList.remove('active');
			});

			// Adiciona a classe 'active' ao item clicado
			this.classList.add('active');
		});
	});
});

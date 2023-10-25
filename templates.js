/** @format */
document.addEventListener('DOMContentLoaded', function () {
	const navigationTemplate = `
	<header>
				<nav class="navbar fixed-top navbar-expand-lg">
					<button
						class="navbar-toggler custom-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span class="navbar-toggler-icon"></span>
					</button>
					<div
						class="collapse navbar-collapse"
						id="navbarNav"
					>
						<ul class="navbar-nav">
							<li class="nav-item">
								<a href="#sobre-mim" id="link-sobre-mim">Sobre mim</a>
							</li>
							<li class="nav-item">
								<a href="index.html" id="link-home">Home</a>
							</li>
							<li class="nav-item">
								<a href="projetos.html">Projetos de aulas</a>
							</li>
							<li class="nav-item">
								<a href="pessoal.html">Projetos de pessoais</a>
							</li>
							<li class="nav-item">
								<a href="#social-midia">Contato</a>
							</li>
						</ul>
					</div>
				</nav>
			</header>
	`;

	document
		.getElementById('menu-inicial')
		.insertAdjacentHTML('afterbegin', navigationTemplate);

	const footerTemplate = `
	<footer>
				<section
					id="social-midia"
					class="social-midia"
				>
					<a
						href="https://github.com/adrianoadacosta"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							src="img/midia/icons8-github.svg"
							alt="Github"
						/>
					</a>
					<a
						href="https://linkedin.com/in/adriano-costa-987999119"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							src="img/midia/icons8-linkedin.svg"
							alt="Linkedin"
						/>
					</a>
					<a
						href="https://wa.me/5551986248474?text=Ol%C3%A1+meu+nome+%C3%A9+Adriano+e+irei+responder+a+mensagem+assim+que+poss%C3%ADvel"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							src="img/midia/icons8-whatsapp.svg"
							alt="Whatsapp"
						/>
					</a>
					<a
						href="https://t.me/Adrianoadacosta"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							src="img/midia/icons8-telegram-logo.svg"
							alt="Telegram"
						/>
					</a>
					<a
						href="https://discord.gg/CtYvu4YuVU"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							src="img/midia/icons8-logo-discord.svg"
							alt="Discord"
						/>
					</a>
				</section>
				<div class="footer-text">
					© 2023 Copyright: &lt;AdrianoCosta /&gt;<br />version 1.1
				</div>
			</footer>
	`;

	document
		.getElementById('footer-contatos')
		.insertAdjacentHTML('afterbegin', footerTemplate);
});

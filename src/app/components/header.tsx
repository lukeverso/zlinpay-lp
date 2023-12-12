import ButtonWithBg from "./ui/button-with-bg";
import ButtonWithBorder from "./ui/button-with-border";

export default function Header() {
	return (
		<header className="flex justify-between items-center px-5 sm:px-36 py-10 bg-white fixed w-full">
			<a href="">
				<img src="/logo.svg" alt="" className="h-8 sm:h-12" />
			</a>
			<div className="flex items-center gap-10">
				<a href="" className="hidden sm:flex text-black hover:text-green-300">Início</a>
				<a href="" className="hidden sm:flex text-black hover:text-green-300">Sobre</a>
				<a href="" className="hidden sm:flex text-black hover:text-green-300">Contato</a>
				<ButtonWithBg title="Comece já!" />
				<ButtonWithBorder title="Acessar conta" style="hidden sm:flex" />
			</div>
		</header>
	);
};
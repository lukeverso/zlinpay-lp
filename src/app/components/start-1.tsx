import ButtonWithBg from "./ui/button-with-bg";

export default function Start1() {
	return (
		<section className="px-5 sm:px-36 flex flex-col sm:flex-row items-center gap-10 sm:gap-36 pt-36 pb-10 sm:pb-20">
			<img src="/image1.png" alt="" className="sm:hidden w-60" />
			<div className="flex flex-col gap-5 flex-1">
				<span className="text-5xl sm:text-6xl font-semibold italic leading-tight">
					Inclua pagamentos online de forma <span className="text-green-300">simplificada</span>
				</span>
				<p>
					Com a ZlinPay, é muito simples começar a vender online em seu site, nós conectamos você a novos clientes.
				</p>
				<ButtonWithBg title="Comece agora" />
			</div>
			<img src="/image1.png" alt="" className="hidden sm:flex flex-1" />
		</section>
	);
};
import { Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
	return (
		<footer className="flex flex-col sm:flex-row justify-between items-center px-10 sm:px-36 py-10 bg-green-300 gap-10 sm:gap-0">
			<div className="flex flex-col items-start gap-10">
				<img src="/logo_white.svg" alt="" className="h-10" />
				<span className="text-sm">
					Copyright © 2023 ZlinPay LTDA.<br />
					Todos os direitos reservados.
				</span>
				<div className="flex w-full justify-between">
					<a href="">
						<div className="p-2 rounded-full hover:bg-green-400">
							<Instagram className="text-white" />
						</div>
					</a>
					<a href="">
						<div className="p-2 rounded-full hover:bg-green-400">
							<Twitter className="text-white" />
						</div>
					</a>
					<a href="">
						<div className="p-2 rounded-full hover:bg-green-400">
							<Youtube className="text-white" />
						</div>
					</a>
				</div>
			</div>
			<div className="flex flex-col sm:flex-row gap-5 sm:gap-16 items-start">
				<div className="flex flex-col gap-3">
					<span className="text-white">
						Serviços
					</span>
					<span className="text-sm">
						Meios de pagamentos
					</span>
				</div>
				<div className="flex flex-col gap-3">
					<span className="text-white">
						Quer ser nosso cliente?
					</span>
					<span className="text-sm">
						Quero ser cliente<br /><br />
						Horários de atendimento:<br />
						Seg a Sex 8h às 18h
					</span>
				</div>
				<div className="flex flex-col gap-3">
					<span className="text-white">
						Precisa de ajuda?
					</span>
					<span className="text-sm">
						Atendimento ao cliente<br /><br />
						Horários de atendimento:<br />
						Dom a Dom, 24h
					</span>
				</div>
			</div>
		</footer>
	);
};
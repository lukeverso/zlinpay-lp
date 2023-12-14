import { BarChart3, FolderEdit, Receipt, Shield } from "lucide-react";

export default function Start4() {
	return (
		<section className="flex flex-col px-10 sm:px-36 justify-between items-center gap-10 sm:gap-20 py-10">
			<div className="flex flex-col text-center gap-2">
				<span className="text-5xl font-light italic">
					Ganhe <span className="text-green-300 font-semibold not-italic">tempo</span> e <span className="text-green-300 font-semibold not-italic">dinheiro</span>
				</span>
				<span>
					Potencialize o volume de transações e crie novas linhas de receita na sua empresa com soluções bancárias completas<br />
					e fáceis de gerir e implantar. Sem burocracias, sem barreiras tecnológicas e livre de obstáculos jurídicos.
				</span>
			</div>
			<div className="flex flex-col sm:flex-row gap-5 sm:gap-0 justify-between w-full sm:px-52">
				<div className="sm:max-w-[240px] flex flex-col gap-3 items-center text-center">
					<Shield className="text-green-300" size={36} />
					<span className="font-bold text-green-300 text-3xl">
						Tecnologia <br className="hidden sm:flex" />robusta
					</span>
					<p className="text-sm">
						APIs e SDKs com aderência <br className="hidden sm:flex" />
						instantânea às normas exigidas, <br className="hidden sm:flex" />
						opere com segurança, seguindo <br className="hidden sm:flex" />
						regulamentações e padrões <br className="hidden sm:flex" />
						da indústria.
					</p>
				</div>
				<div className="sm:max-w-[240px] flex flex-col gap-3 items-center text-center">
					<FolderEdit className="text-green-300" size={36} />
					<span className="font-bold text-green-300 text-3xl">
						Gestão <br className="hidden sm:flex" />simplificada
					</span>
					<p className="text-sm">
						Receba pagamentos <br className="hidden sm:flex" />
						e gerencie tudo em <br className="hidden sm:flex" />
						um só lugar
					</p>
				</div>
				<div className="sm:max-w-[240px] flex flex-col gap-3 items-center text-center">
					<Receipt className="text-green-300" size={36} />
					<span className="font-bold text-green-300 text-3xl">
						Aumente <br className="hidden sm:flex" />suas vendas
					</span>
					<p className="text-sm">
						Ofereça mais formas <br className="hidden sm:flex" />
						de pagamentos para os <br className="hidden sm:flex" />
						seus clientes
					</p>
				</div>
				<div className="sm:max-w-[240px] flex flex-col gap-3 items-center text-center">
					<BarChart3 className="text-green-300" size={36} />
					<span className="font-bold text-green-300 text-3xl">
						Gráficos
					</span>
					<p className="text-sm">
						Aproveite os benefícios <br className="hidden sm:flex" />
						de monitoramento e analise <br className="hidden sm:flex" />
						seus pagamentos eficientemente <br className="hidden sm:flex" />
						com nosso painel.
					</p>
				</div>
			</div>
			<span className="font-medium text-3xl text-center">
				<span className="text-green-300">Amplie</span> seu negócio e aumente suas vendas com a <span className="text-green-300">ZlinPay</span>
			</span>
		</section>
	);
};
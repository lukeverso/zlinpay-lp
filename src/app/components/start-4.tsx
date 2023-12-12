import { BarChart3, FolderEdit, Receipt, Shield } from "lucide-react";

export default function Start4() {
	return (
		<section className="flex flex-col px-10 sm:px-36 justify-between items-center gap-10 sm:gap-20 py-10 sm:py-20">
			<div className="flex flex-col text-center gap-2">
				<span className="text-5xl font-light italic">
					Ganhe <span className="text-green-300 font-semibold not-italic">tempo</span> e <span className="text-green-300 font-semibold not-italic">dinheiro</span>
				</span>
				<span>
					Potencialize o volume de transações e crie novas linhas de receita na sua empresa com soluções bancárias completas e fáceis de gerir e implantar. Sem burocracias, sem barreiras tecnológicas e livre de obstáculos jurídicos.
				</span>
			</div>
			<div className="flex flex-col items-center sm:flex-row gap-5 sm:gap-0 justify-between w-full">
				<div className="max-w-[240px] flex flex-col gap-3 items-center text-center">
					<Shield className="text-green-300" size={36} />
					<span className="font-bold text-green-300 text-3xl">
						Tecnologia robusta
					</span>
					<p className="text-sm">
						APIs e SDKs com aderência instantânea às normas exigidas, opere com segurança, seguindo regulamentações e padrões da indústria.
					</p>
				</div>
				<div className="max-w-[240px] flex flex-col gap-3 items-center text-center">
					<FolderEdit className="text-green-300" size={36} />
					<span className="font-bold text-green-300 text-3xl">
						Gestão simplificada
					</span>
					<p className="text-sm">
						Receba pagamentos e gerencie tudo em um só lugar
					</p>
				</div>
				<div className="max-w-[240px] flex flex-col gap-3 items-center text-center">
					<Receipt className="text-green-300" size={36} />
					<span className="font-bold text-green-300 text-3xl">
						Aumente suas vendas
					</span>
					<p className="text-sm">
						Ofereça mais formas de pagamentos para os seus clientes
					</p>
				</div>
				<div className="max-w-[240px] flex flex-col gap-3 items-center text-center">
					<BarChart3 className="text-green-300" size={36} />
					<span className="font-bold text-green-300 text-3xl">
						Gráficos
					</span>
					<p className="text-sm">
						Aproveite os benefícios de monitoramento e analise seus pagamentos eficientemente com nosso painel.
					</p>
				</div>
			</div>
			<span className="font-medium text-3xl">
				<span className="text-green-300">Amplie</span> seu negócio e aumente suas vendas com a <span className="text-green-300">ZlinPay</span>
			</span>
		</section>
	);
};
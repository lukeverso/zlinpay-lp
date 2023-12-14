import { Coins, DollarSign, Headphones, UsersRound } from "lucide-react"

export default function Start2() {
	return (
		<section className="bg-green-300 flex flex-col sm:flex-row px-10 sm:px-36 justify-between py-10 items-center gap-10 sm:gap-36">
			<span className="text-4xl text-white italic font-semibold gap-36 flex-1 text-center sm:text-left">
				Amplie suas vendas no online,<br />
				seja um cliente ZlinPay
			</span>
			<div className="grid grid-cols-2 gap-5 flex-1">
				<div className="flex items-center gap-5">
					<UsersRound className="text-white" />
					<div className="flex flex-col">
						<span className="text-white text-2xl">
							200+
						</span>
						<span className="text-white text-sm">
							clientes
						</span>
					</div>
				</div>
				<div className="flex items-center gap-5">
					<Headphones className="text-white" />
					<div className="flex flex-col">
						<span className="text-white text-2xl">
							24/7
						</span>
						<span className="text-white text-sm">
							atendimento
						</span>
					</div>
				</div>
				<div className="flex items-center gap-5">
					<Coins className="text-white" />
					<div className="flex flex-col">
						<span className="text-white text-2xl">
							3 formas
						</span>
						<span className="text-white text-sm">
							de pagamento
						</span>
					</div>
				</div>
				<div className="flex items-center gap-5">
					<DollarSign className="text-white" />
					<div className="flex flex-col">
						<span className="text-white text-2xl">
							240 MI+
						</span>
						<span className="text-white text-sm">
							Processados mensalmente
						</span>
					</div>
				</div>
			</div>
		</section>
	);
};

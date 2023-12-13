import ButtonWithBg from "./ui/button-with-bg";

export default function About3() {
	return (
		<section className="px-10 sm:px-36 flex flex-col sm:flex-row items-center gap-10 sm:gap-36 py-10 sm:py-20">
			<div className="flex-1 flex justify-center sm:hidden">
				<img src="/image5.svg" alt="" />
			</div>
			<div className="flex-1 flex flex-col gap-5">
				<span className="font-semibold text-3xl text-center sm:text-left">
					Quer saber se a <span className="text-green-300">ZlinPay</span> é pra você?
				</span>
				<ul className="list-disc">
					<li>
						Se você tem um negócio que conecta múltiplos vendedores e compradores.
					</li>
					<li>
						Se precisa integrar soluções eficientes de meios de pagamentos e conciliar de forma fácil.
					</li>
					<li>
						Se tem que dividir o valor de duas vendas entre vários participantes ou então quer agregar soluções bancárias para sua cadeia de clientes.
					</li>
				</ul>
				<ButtonWithBg title="Saiba mais" />
			</div>
			<div className="flex-1 sm:flex justify-center hidden">
				<img src="/image5.svg" alt="" />
			</div>
		</section>
	);
};
export default function About2() {
	return (
		<section className="px-10 sm:px-36 flex items-center gap-36 py-10 sm:py-20 bg-green-300">
			<div className="flex-1 justify-center hidden sm:flex">
				<img src="/image4.png" alt="" />
			</div>
			<div className="flex-1 flex flex-col gap-5 text-white">
				<span className="font-light italic text-4xl">
					BUSCAMOS o extraordinário
				</span>
				<p>
					Acreditamos que a tecnologia é a resposta para boa parte das demandas e necessidades do nosso mundo atual. E é nisso que nos baseamos: tecnologia! Empreender em um país tão repleto de oportunidades como o Brasil também traz muitos desafios. E é através da tecnologia que a ZlinPay busca entregar soluções simples e ao mesmo tempo robustas para solucionar um desses desafios: receber pagamentos pela internet.
					Nosso foco é fazer com que você possa focar na gestão e direção do seu negócio, enquanto oferecemos todas as ferramentas de análise, intermediação e gestão de pagamentos para o seu negócio.
				</p>
				<div className="flex flex-col">
					<span className="italic">
						“A TECNOLOGIA MOVE O MUNDO”
					</span>
					<span className="text-xs">
						Steve Jobs / Fundador da Apple
					</span>
				</div>
			</div>
		</section>
	);
};
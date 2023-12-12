export default function About1() {
	return (
		<section className="px-10 sm:px-36 flex flex-col sm:flex-row items-center gap-5 sm:gap-36 py-10 sm:py-20">
			<div className="flex flex-col gap-5 flex-1">
				<span className="text-6xl font-semibold italic leading-tight">
					Sobre a <span className="text-green-300">ZlinPay</span>
				</span>
				<p>
					A ZlinPay é uma intermediadora de cobranças brasileira focada em gestão de pagamentos online. Desde 2019, processamos pagamentos de diversos sites, nacionais e internacionais, com segurança e agilidade, dando ao nosso cliente foco em seu negócio e deixando a burocracia das operações financeiras de lado.
				</p>
			</div>
			<div className="flex-1 flex justify-center">
				<img src="/image3.png" alt="" />
			</div>
		</section>
	);
};
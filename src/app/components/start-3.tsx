import ButtonWithBg from "./ui/button-with-bg";

export default function Start3() {
	return (
		<section className="flex flex-col px-10 sm:px-36 justify-between py-10 sm:py-20 items-center gap-20">
			<div className="flex items-center gap-36">
				<div className="flex-1 flex flex-col gap-5">
					<span className="text-5xl leading-tight font-light italic">
						Como podemos ajudar sua <span className="text-green-300">empresa?</span>
					</span>
					<p>
						Explore nossas soluções de pagamento inovadoras para potencializar o crescimento da sua empresa. Aprimore a experiência de pagamento em cada mercado com nosso conhecimento local.
					</p>
					<ButtonWithBg title="Saiba mais" />
				</div>
				<div className="flex-1 sm:flex justify-center hidden">
					<img src="/image2.svg" alt="" />
				</div>
			</div>
			<div className="flex flex-col gap-2 text-center">
				<span className=" text-4xl font-semibold">
					O que <span className="text-green-300">oferecemos?</span>
				</span>
				<p>
					Nossa API tem a combinação perfeita para o seu negócio, é simples para integrar e robusta para o trabalho, não importa qual seja o tamanho do seu negócio.
				</p>
			</div>
		</section>
	);
};
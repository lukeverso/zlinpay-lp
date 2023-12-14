import ButtonWithBg from "./ui/button-with-bg";

export default function Start3() {
	return (
		<section className="flex flex-col px-10 sm:px-36 justify-between py-10 items-center gap-20">
			<div className="flex items-center gap-36">
				<div className="flex-1 flex flex-col gap-5">
					<span className="text-center sm:text-left text-5xl leading-tight font-light italic">
						Como podemos <br className="hidden sm:flex" />
						ajudar sua <span className="text-green-300">empresa?</span>
					</span>
					<p className="text-center sm:text-justify">
						Explore nossas soluções de pagamento inovadoras para potencializar o crescimento da sua empresa. Aprimore a experiência de pagamento em cada mercado com nosso conhecimento local.
					</p>
					<div className="flex justify-center sm:justify-start">
						<ButtonWithBg title="Saiba mais" />
					</div>
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
					Nossa API tem a combinação perfeita para o seu negócio, é simples para integrar e robusta <br className="hidden sm:flex" />
					para o trabalho, não importa qual seja o tamanho do seu negócio.
				</p>
			</div>
		</section>
	);
};
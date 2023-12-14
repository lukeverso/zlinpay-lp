import { Frame } from "lucide-react";

export default function About4() {
	return (
		<section className="px-10 sm:px-36 flex flex-col items-center gap-4 py-10">
			<span className="font-semibold italic text-3xl">
				Nossos <span className="text-green-300">clientes</span>
			</span>
			<span>
				Não perca tempo, faça igual nossos clientes e aumente suas vendas.
			</span>
			<div className="w-full flex items-center gap-20 h-24 sm:w-[800px] px-5 overflow-x-auto">
				<img src="/pix-gold.png" alt="" className="h-5 sm:grayscale hover:grayscale-0 hover:scale-125 transition-all duration-500 cursor-pointer z-50" />
				<img src="/pix-gold.png" alt="" className="h-5 sm:grayscale hover:grayscale-0 hover:scale-125 transition-all duration-500 cursor-pointer z-50" />
				<img src="/pix-gold.png" alt="" className="h-5 sm:grayscale hover:grayscale-0 hover:scale-125 transition-all duration-500 cursor-pointer z-50" />
				<img src="/pix-gold.png" alt="" className="h-5 sm:grayscale hover:grayscale-0 hover:scale-125 transition-all duration-500 cursor-pointer z-50" />
				<img src="/pix-gold.png" alt="" className="h-5 sm:grayscale hover:grayscale-0 hover:scale-125 transition-all duration-500 cursor-pointer z-50" />
				<img src="/pix-gold.png" alt="" className="h-5 sm:grayscale hover:grayscale-0 hover:scale-125 transition-all duration-500 cursor-pointer z-50" />
				<img src="/pix-gold.png" alt="" className="h-5 sm:grayscale hover:grayscale-0 hover:scale-125 transition-all duration-500 cursor-pointer z-50" />
				<img src="/pix-gold.png" alt="" className="h-5 sm:grayscale hover:grayscale-0 hover:scale-125 transition-all duration-500 cursor-pointer z-50" />
			</div>
		</section>
	);
};
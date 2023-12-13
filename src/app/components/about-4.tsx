import { Frame } from "lucide-react";

export default function About4() {
	return (
		<section className="px-10 sm:px-36 flex flex-col items-center gap-4 py-10 sm:py-20">
			<span className="font-semibold italic text-3xl">
				Nossos <span className="text-green-300">clientes</span>
			</span>
			<span>
				Não perca tempo, faça igual nossos clientes e aumente suas vendas.
			</span>
			<div className="sm:px-40 sm:flex w-full justify-evenly items-center grid grid-cols-4">
				<div className="w-20 h-20 flex justify-center items-center">
					<Frame />
				</div>
				<div className="w-20 h-20 flex justify-center items-center">
					<Frame />
				</div>
				<div className="w-20 h-20 flex justify-center items-center">
					<Frame />
				</div>
				<div className="w-20 h-20 flex justify-center items-center">
					<Frame />
				</div>
				<div className="w-20 h-20 flex justify-center items-center">
					<Frame />
				</div>
				<div className="w-20 h-20 flex justify-center items-center">
					<Frame />
				</div>
				<div className="w-20 h-20 flex justify-center items-center">
					<Frame />
				</div>
			</div>
		</section>
	);
};
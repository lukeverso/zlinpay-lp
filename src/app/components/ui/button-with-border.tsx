interface ButtonWithBorderProps {
	style?: string;
	title: string;
};

export default function ButtonWithBorder({ style, title }: ButtonWithBorderProps) {
	return (
		<a href="" className={`px-5 py-3 border border-green-300 rounded text-green-300 hover:bg-green-300 hover:text-white ${style}`}>
			{title}
		</a>
	);
};
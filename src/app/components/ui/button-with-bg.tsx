interface ButtonWithBgProps {
	style?: string;
	title: string;
};

export default function ButtonWithBg({ style, title }: ButtonWithBgProps) {
	return (
		<a href="" className={`px-5 py-3 bg-green-300 rounded text-white hover:bg-green-400 w-fit ${style}`}>
			{title}
		</a>
	);
};
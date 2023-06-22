import { Providers } from "./providers";

export const metadata = {
	title: 'MyOwly',
	description: 'MyOwly',
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<Providers>
					{children}
				</Providers>
			</body>
		</html>
	)
}
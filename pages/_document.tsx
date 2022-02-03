import Document, { Html, Head, Main, NextScript } from 'next/document';

/**
 * This class is used as the Custom Document for all the pages on the website.
 *
 * @version 1.0.0
 * @author Aayush Goyal
 * @created 2022-02-03
 * @modifier
 * @modified
 * @since 1.0.0
 */
class CustomDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html>
				<Head>
					<link rel="shortcut icon" href="/icons/favicon.png" />
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link
						href="https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap"
						rel="stylesheet"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default CustomDocument;

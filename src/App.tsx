import './App.css'
import { TonConnectButton, TonConnectUIProvider } from '@tonconnect/ui-react'

function App() {

	return (
		<TonConnectUIProvider manifestUrl="https://localhost:5173/tonconnect-manifest.json">
			<header>
				<TonConnectButton />
			</header>
			<main>

			</main>
		</TonConnectUIProvider>
	)
}

export default App

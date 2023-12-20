import './App.css'
import { TonConnectButton, TonConnectUIProvider } from '@tonconnect/ui-react'
import { Button, Card } from './components'

function App() {

	return (
		<TonConnectUIProvider manifestUrl="https://localhost:5173/tonconnect-manifest.json">
			<header>
				<TonConnectButton />
			</header>
			<main>
				<Card imgSrc='/banshee.jpg'>
					<Button>Buy</Button>
				</Card>
			</main>
		</TonConnectUIProvider>
	)
}

export default App

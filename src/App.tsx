import './App.css'
import { TonConnectButton, TonConnectUIProvider } from '@tonconnect/ui-react'
import { Button, Card } from './components'

function App() {

	return (
		<TonConnectUIProvider manifestUrl="https://cryptosubscriptions.github.io/frontend-TWA/tonconnect-manifest.json" actionsConfiguration={{
			twaReturnUrl: 'https://t.me/value_manager_bot/con_market'
		}}>
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

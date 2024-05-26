import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import { SWRConfig } from 'swr'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <ChakraProvider>
        <BrowserRouter>
            <SWRConfig
                value={{
                    revalidateIfStale: false,
                    shouldRetryOnError: false,
                    revalidateOnFocus: false,
                }}
            >
                <App />
            </SWRConfig>
        </BrowserRouter>
    </ChakraProvider>,
)

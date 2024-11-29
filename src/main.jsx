import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistor, store } from './hooks/redux/store.js';
import { PersistGate } from 'redux-persist/integration/react';
import { SnackbarProvider } from 'notistack';

createRoot(document.getElementById('root')).render(
// 	<StrictMode>
		<Provider store={store}>
			<PersistGate
				loading={
					<div className='w-full flex-row justify-center'>
						<h2>Đang tải dữ liệu...</h2>
					</div>
				}
				persistor={persistor}
			>
				<BrowserRouter>
					<SnackbarProvider
						maxSnack={3}
						anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
						autoHideDuration={3000}
					>
						<App />
					</SnackbarProvider>
				</BrowserRouter>
			</PersistGate>
		</Provider>
// 	</StrictMode>,

);

import React from 'react';
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import JoinGame from './pages/JoinGame';
import Home from './pages/Home';
import Download from './pages/Download';
import Header from './elements/Header';
import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
    return (
        <div className="App bg-secondary bg-gradient">
            <main>
                <Container className="p-2 d-flex align-items-center justify-content-center min-vh-100 text-center">
                    <div className="p-5 mb-2 bg-dark text-white rounded-3 h-100 vw-100">
                        <Header />
                        <QueryClientProvider client={queryClient}>
                            <Routes>
                                <Route path='/' element={<Home />} />
                                <Route path='/download' element={<Download />} />
                                <Route path='g'>
                                    <Route path=':game/:host::port' element={<JoinGame />} />
                                    <Route path=':game/:host' element={<JoinGame />} />
                                </Route>
                                <Route path="*" element={<h1 className="text-white-50 display-6">Nothing to see here, double check the URL.</h1>} />
                            </Routes>
                        </QueryClientProvider>
                    </div>
                </Container>
            </main>
        </div>
    );
}

export default App;

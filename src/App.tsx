import React from 'react';
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import JoinContainer from './components/JoinContainer';
import LinkBuilder from './components/LinkBuilder';

function App() {
    return (
        <div className="App bg-secondary bg-gradient">
            <main>
                <Container className="d-flex align-items-center justify-content-center vh-100 text-center">
                    <div className="p-5 mb-2 bg-dark text-white rounded-3 mw-75">
                        <Routes>
                            <Route path='/' element={<LinkBuilder />} />
                            <Route path='g'>
                                <Route path=':game/:ip::port' element={<JoinContainer />} />
                            </Route>
                            <Route path="*" element={<h1 className="text-white-50 display-6">Nothing to see here, double check the URL.</h1>} />
                        </Routes>

                    </div>
                </Container>

            </main>
        </div>
    );
}

export default App;

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './pages/Home';
import EditorPage from './pages/EditorPage';
import { RecoilRoot } from "recoil";

function App() {
    return (
        <RecoilRoot>
            <BrowserRouter>
                <div>
                    <Toaster
                        position="top-center"
                        toastOptions={{
                            success: {
                                theme: {
                                    primary: '#4aed88',
                                },
                            },
                        }}
                    />
                </div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/editor/:roomId" element={<EditorPage />} />
                    {/* Optional: Add a 404 route */}
                    <Route path="*" element={<h1>404 | Page Not Found</h1>} />
                </Routes>
            </BrowserRouter>
        </RecoilRoot>
    );
}

export default App;

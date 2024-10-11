import Blog from '@components/Blog/Blog';
import HomePage from '@components/HomePage/HomePage';
import { Suspense } from 'react';

// Cài đặt react-routers-dom
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//Import Router.
import routers from '../src/routers/routers';

function App() {
    return (
        <BrowserRouter fallback={<div> Loading ...</div>}>
        <Suspense>
        <Routes>
                {routers.map((item, index) => {
                    return (
                        <Route
                            path={item.path}
                            element={<item.component />}
                            key={index}
                        />
                    );
                })}
            </Routes>
            </Suspense> 
        </BrowserRouter>
    );
}

export default App;

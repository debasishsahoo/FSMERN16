import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import PageRoutes from './routes/Pagerouts'
function App() {
    return (
        <Router>
            <div><PageRoutes /></div>
        </Router>
    )
}
export default App
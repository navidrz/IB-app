import React, { useState, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Drawer from './components/Drawer';
import Footer from './components/Footer';

// Lazy Loading برای صفحه سیگنال آپشن
const OptionSignalsPage = React.lazy(() => import('./modules/optionsSignals/pages/OptionSignalsPage'));

const App: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const handleToggleDrawer = () => setDrawerOpen(!drawerOpen);
  const handleCloseDrawer = () => setDrawerOpen(false);

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Header onToggleDrawer={handleToggleDrawer}/>
        <div className="flex flex-1">
          <Drawer isOpen={drawerOpen} onClose={handleCloseDrawer} />
          <main className="flex-1 p-4 overflow-auto">
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                <Route path="/" exact component={OptionSignalsPage} />
              </Switch>
            </Suspense>
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

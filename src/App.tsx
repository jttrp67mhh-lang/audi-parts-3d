import { useState } from 'react';
import { Scene } from './components/Scene';
import { PartsPanel } from './components/PartsPanel';
import './App.css';
export default function App() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  return (
    <div className="app">
      <header className="header">
        <span className="logo">🚗 Audi Parts 3D</span>
        <span className="model">Audi A6 C7 · 3.0 TDI · 2013</span>
      </header>
      <main className="main">
        <div className="viewer">
          <Scene selectedId={selectedId} onSelect={(id) => setSelectedId(id || null)} />
        </div>
        <PartsPanel selectedId={selectedId} />
      </main>
    </div>
  );
}

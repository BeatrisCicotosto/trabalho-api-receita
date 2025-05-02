import React, { useState } from 'react';
import ListaReceitas from './components/ListaReceitas';
import ReceitaDetalhada from './components/ReceitaDetalhada';

function App() {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className="App">
      {selectedId ? (
        <ReceitaDetalhada id={selectedId} onBack={() => setSelectedId(null)} />
      ) : (
        <ListaReceitas onSelect={setSelectedId} />
      )}
    </div>
  );
}

export default App;

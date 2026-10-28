import { CATALOG } from '../data/catalog';
export function PartsPanel({ selectedId }: { selectedId: string | null }) {
  const node = selectedId ? CATALOG[selectedId] : undefined;
  if (!selectedId) return (<div className="panel"><h2>Audi A6 C7 · 3.0 TDI · 2013</h2><p className="hint">Кликните по узлу автомобиля, чтобы увидеть каталожные номера</p></div>);
  if (!node) return (<div className="panel"><h2>Audi A6 C7 · 3.0 TDI · 2013</h2><p className="hint">Узел «{selectedId}» пока не в каталоге</p></div>);
  return (
    <div className="panel">
      <h2>{node.title}</h2><p className="subtitle">Найдено деталей: {node.parts.length}</p>
      <div className="parts">
        {node.parts.map((p) => (<div className="part" key={p.num}><div className="part-name">{p.name}</div><div className="part-num">{p.num}</div></div>))}
      </div>
    </div>
  );
}

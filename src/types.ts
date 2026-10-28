export interface Part { name: string; num: string; }
export interface NodeCatalog { title: string; parts: Part[]; }
export type Catalog = Record<string, NodeCatalog>;

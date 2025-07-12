import React from 'react';

export default function FilterBar({
  search,
  setSearch,
  sort,
  setSort,
  filterType,
  setFilterType,
  filterFabric,
  setFilterFabric,
  resetFilters,
}) {
  const types = ['Shirt', 'Pant', 'T-Shirt', 'Shoe', 'Accessory'];
  const fabrics = ['Cotton', 'Linen', 'Denim', 'Silk', 'Synthetic'];

  return (
    <div className="flex flex-wrap items-center gap-4">
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="px-4 py-2 border border-gray-300 rounded-lg w-full sm:w-60 focus:outline-none focus:ring-2 focus:ring-green-500"
      />

      <select value={sort} onChange={e => setSort(e.target.value)} className="border px-4 py-2 rounded-lg">
        <option>Latest</option>
        <option>Oldest</option>
      </select>

      <select value={filterType} onChange={e => setFilterType(e.target.value)} className="border px-4 py-2 rounded-lg">
        <option value="">All Types</option>
        {types.map(type => <option key={type}>{type}</option>)}
      </select>

      <select value={filterFabric} onChange={e => setFilterFabric(e.target.value)} className="border px-4 py-2 rounded-lg">
        <option value="">All Fabrics</option>
        {fabrics.map(f => <option key={f}>{f}</option>)}
      </select>

      <button onClick={resetFilters} className="text-green-600 underline text-sm ml-auto">Reset Filters</button>
    </div>
  );
}

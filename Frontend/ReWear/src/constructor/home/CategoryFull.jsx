// import React, { useState, useEffect } from 'react';
// import FilterBar from '../Product/FilterBar';
// import ProductCard from '../Product/ProductCard';
// import products from '../../assets/products';
// console.log('Loaded Products:', products);

// const CATEGORIES = ['Men', 'Women', 'Kids', 'Other'];
// function CategoryFull() {
//   const [activeCategory, setActiveCategory] = useState('Men');
//   const [search, setSearch] = useState('');
//   const [sort, setSort] = useState('Latest');
//   const [filterType, setFilterType] = useState('');
//   const [filterFabric, setFilterFabric] = useState('');
//   const [filteredProducts, setFilteredProducts] = useState([]);

//   useEffect(() => {
//     let data = products.filter(p => p.category === activeCategory);
//     if (search) data = data.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));
//     if (filterType) data = data.filter(p => p.type === filterType);
//     if (filterFabric) data = data.filter(p => p.fabric === filterFabric);

//     if (sort === 'Latest') data.sort((a, b) => new Date(b.uploadedAt) - new Date(a.uploadedAt));
//     if (sort === 'Oldest') data.sort((a, b) => new Date(a.uploadedAt) - new Date(b.uploadedAt));

//     setFilteredProducts(data.slice(0, 10));
//   }, [activeCategory, search, sort, filterType, filterFabric]);

//   const resetFilters = () => {
//     setSearch('');
//     setSort('Latest');
//     setFilterType('');
//     setFilterFabric('');
//   };

//   return (
//     <div className="p-6 max-w-6xl mx-auto">
//       <div className="flex gap-4 mb-6 border-b pb-2">
//         {CATEGORIES.map(cat => (
//           <button
//             key={cat}
//             onClick={() => setActiveCategory(cat)}
//             className={`px-4 py-2 text-sm rounded-full transition ${
//               activeCategory === cat ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700'
//             }`}
//           >
//             {cat}
//           </button>
//         ))}
//       </div>

//       <FilterBar
//         search={search}
//         setSearch={setSearch}
//         sort={sort}
//         setSort={setSort}
//         filterType={filterType}
//         setFilterType={setFilterType}
//         filterFabric={filterFabric}
//         setFilterFabric={setFilterFabric}
//         resetFilters={resetFilters}
//       />

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
//         {filteredProducts.map(product => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default CategoryFull;
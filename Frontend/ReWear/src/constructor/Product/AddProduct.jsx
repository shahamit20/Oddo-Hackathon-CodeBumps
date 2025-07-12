import React, { useState } from 'react';
import { FiTrash2, FiUploadCloud } from 'react-icons/fi';

export default function AddProduct() {
  const [images, setImages] = useState([]);
  const [description, setDescription] = useState('');
  const [condition, setCondition] = useState('New');
  const [userType, setUserType] = useState('Male');
  const [category, setCategory] = useState('Shirt');
  const [size, setSize] = useState('');
  const [tags, setTags] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Category-specific
  const [fabric, setFabric] = useState('');
  const [pantType, setPantType] = useState('');

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const preview = files.map(file => ({
      file,
      url: URL.createObjectURL(file)
    }));
    setImages(prev => [...prev, ...preview]);
  };

  const removeImage = (index) => {
    const updated = [...images];
    updated.splice(index, 1);
    setImages(updated);
  };

  const generateTags = () => {
    const words = description
      .toLowerCase()
      .split(' ')
      .filter(w => w.length > 3 && w.length < 15);
    const selected = [...new Set(words.slice(0, 5))];
    setTags(selected);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!description || images.length === 0) return;
    setIsSubmitting(true);

    // Handle your backend logic here (with fabric/pantType)

    setTimeout(() => {
      alert('Product uploaded!');
      setImages([]);
      setDescription('');
      setTags([]);
      setIsSubmitting(false);
      setFabric('');
      setPantType('');
    }, 1500);
  };

  const getSizeOptions = () => {
    switch (category) {
      case 'Shirt':
      case 'Pant':
      case 'T-Shirt':
        return ['S', 'M', 'L', 'XL', 'XXL'];
      case 'Shoe':
        return ['6', '7', '8', '9', '10', '11'];
      case 'Accessory':
        return ['Free Size', 'One Size'];
      default:
        return ['N/A'];
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-2xl shadow-lg mt-10 border border-gray-200">
      <h2 className="text-3xl font-bold mb-6 text-green-700">Upload Your Product</h2>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Product Images</label>
          <label className="w-full h-40 border-2 border-dashed border-green-400 rounded-xl flex flex-col items-center justify-center cursor-pointer hover:border-green-600 transition">
            <FiUploadCloud className="text-3xl text-green-400 mb-2" />
            <span className="text-gray-500 text-sm">Click or drag images here</span>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageUpload}
              className="hidden"
            />
          </label>

          {images.length > 0 && (
            <div className="grid grid-cols-3 md:grid-cols-4 gap-4 mt-4">
              {images.map((img, idx) => (
                <div key={idx} className="relative group">
                  <img
                    src={img.url}
                    alt="preview"
                    className="h-28 w-full object-cover rounded-lg shadow-sm"
                  />
                  <button
                    type="button"
                    onClick={() => removeImage(idx)}
                    className="absolute top-1 right-1 bg-white p-1 rounded-full shadow hover:bg-red-100 transition"
                  >
                    <FiTrash2 className="text-red-500" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
          <textarea
            rows="4"
            value={description}
            onChange={e => setDescription(e.target.value)}
            placeholder="Describe the item, condition, size, brand..."
            className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Condition */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Condition</label>
          <select
            value={condition}
            onChange={e => setCondition(e.target.value)}
            className="w-full border border-gray-300 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option>New</option>
            <option>Good</option>
            <option>Medium</option>
          </select>
        </div>

        {/* Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
          <select
            value={userType}
            onChange={e => setUserType(e.target.value)}
            className="w-full border border-gray-300 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option>Male</option>
            <option>Female</option>
            <option>Kids</option>
            <option>Other</option>
          </select>
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
          <select
            value={category}
            onChange={e => {
              setCategory(e.target.value);
              setFabric('');
              setPantType('');
            }}
            className="w-full border border-gray-300 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option>Shirt</option>
            <option>Pant</option>
            <option>Shoe</option>
            <option>Accessory</option>
          </select>
        </div>

        {/* Category-specific inputs */}
        {category === 'Shirt' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Fabric Type</label>
            <input
              type="text"
              value={fabric}
              onChange={e => setFabric(e.target.value)}
              placeholder="e.g., Cotton, Linen, Rayon..."
              className="w-full border border-gray-300 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        )}

        {category === 'Pant' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Pant Type</label>
            <select
              value={pantType}
              onChange={e => setPantType(e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="">Select type</option>
              <option>Jeans</option>
              <option>Formal</option>
              <option>Cotton</option>
              <option>Elastic</option>
            </select>
          </div>
        )}

        {/* Size */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Size</label>
          <select
            value={size}
            onChange={e => setSize(e.target.value)}
            className="w-full border border-gray-300 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="">Select size</option>
            {getSizeOptions().map((opt, i) => (
              <option key={i}>{opt}</option>
            ))}
          </select>
        </div>

        {/* Tags */}
        <div>
          <button
            type="button"
            onClick={generateTags}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            Generate Tags
          </button>
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full border border-green-300"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Submit */}
        <div>
          <button
            type="submit"
            disabled={isSubmitting || !description || images.length === 0}
            className={`w-full px-4 py-3 rounded-xl text-white font-semibold text-sm transition ${
              isSubmitting || !description || images.length === 0
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-green-600 hover:bg-green-700'
            }`}
          >
            {isSubmitting ? 'Uploading...' : 'Upload Product'}
          </button>
        </div>
      </form>
    </div>
  );
}

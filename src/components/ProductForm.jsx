import { useState, useEffect } from 'react';

export const ProductForm = ({ product, onSave }) => {
  const [formData, setFormData] = useState({
    id: 0,
    name: '',
    price: 0,
    description: '',
    category: '',
    image: ''
  });

  useEffect(() => {
    if (product) {
      setFormData(product);
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: name === 'price' ? parseFloat(value) || 0 : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div>
    <form onSubmit={handleSubmit} className="space-y-4">
    <div>
      <label htmlFor="name" className="block text-sm font-medium text-gray-700">Product Name</label>
      <input
        id="name"
        name="title"
        value={formData.title}
        onChange={handleChange}
        required
        className="p-2 mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
    </div>
    <div>
      <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
      <input
        id="price"
        name="price"
        type="number"
        step="0.01"
        value={formData.price}
        onChange={handleChange}
        required
        className="p-2 mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 sm:text-sm"
      />
    </div>
    <div>
      <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
      <textarea
        id="description"
        name="description"
        value={formData.description}
        onChange={handleChange}
        required
        className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
    </div>
    <div>
      <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
      <input
        id="category"
        name="category"
        value={formData.category}
        onChange={handleChange}
        required
        className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
    </div>
    <div>
      <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image URL</label>
      <input
        id="image"
        name="images"
        value={formData.images}
        onChange={handleChange}
        required
        className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
    </div>
    <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save Changes</button>
  </form>
    </div>
  );
}

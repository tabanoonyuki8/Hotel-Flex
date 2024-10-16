import React, { useEffect, useState } from 'react';

// Function to get initial customers from local storage
const getInitialCustomers = () => {
  const savedCustomers = localStorage.getItem('customers');
  return savedCustomers ? JSON.parse(savedCustomers) : [];
};

const Customers = () => {
  const [customers, setCustomers] = useState(getInitialCustomers);
  const [newCustomer, setNewCustomer] = useState({ name: '', email: '', phone: '' });

  // Effect to save customers to local storage whenever the customers state changes
  useEffect(() => {
    localStorage.setItem('customers', JSON.stringify(customers));
  }, [customers]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCustomer({ ...newCustomer, [name]: value });
  };

  const handleAddCustomer = (e) => {
    e.preventDefault();
    if (newCustomer.name && newCustomer.email && newCustomer.phone) {
      setCustomers([...customers, { id: Date.now(), ...newCustomer }]);
      setNewCustomer({ name: '', email: '', phone: '' }); // Reset the form
    }
  };

  const handleDeleteCustomer = (id) => {
    setCustomers(customers.filter((customer) => customer.id !== id));
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-6">Customer List</h1>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Add New Customer</h2>
        <form onSubmit={handleAddCustomer} className="flex flex-col space-y-4">
          <input
            type="text"
            name="name"
            value={newCustomer.name}
            onChange={handleInputChange}
            placeholder="Name"
            className="border p-2 rounded"
            required
          />
          <input
            type="email"
            name="email"
            value={newCustomer.email}
            onChange={handleInputChange}
            placeholder="Email"
            className="border p-2 rounded"
            required
          />
          <input
            type="text"
            name="phone"
            value={newCustomer.phone}
            onChange={handleInputChange}
            placeholder="Phone"
            className="border p-2 rounded"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          >
            Add Customer
          </button>
        </form>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2">ID</th>
              <th className="border border-gray-300 p-2">Name</th>
              <th className="border border-gray-300 p-2">Email</th>
              <th className="border border-gray-300 p-2">Phone</th>
              <th className="border border-gray-300 p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id} className="hover:bg-gray-50">
                <td className="border border-gray-300 p-2">{customer.id}</td>
                <td className="border border-gray-300 p-2">{customer.name}</td>
                <td className="border border-gray-300 p-2">{customer.email}</td>
                <td className="border border-gray-300 p-2">{customer.phone}</td>
                <td className="border border-gray-300 p-2">
                  <button
                    onClick={() => handleDeleteCustomer(customer.id)}
                    className="bg-red-600 text-white p-1 rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Customers;

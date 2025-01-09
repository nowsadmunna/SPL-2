import {useState} from 'react';

export default function Registration() {
  return(
    <>  
      <main className="my-form bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="w-full max-w-4xl">
          <div className="bg-white shadow-lg rounded-lg">
            <div className="bg-blue-500 text-white text-center py-4 rounded-t-lg">
              <h2 className="text-2xl font-bold">User Registration</h2>
            </div>
            <div className="p-6">
              <form
                name="my-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  const password = e.target.password.value;
                  const confirmPassword = e.target.confirm_password.value;
                  if (password !== confirmPassword) {
                    alert("Passwords do not match. Please try again.");
                    return;
                  }
                  // Proceed with form submission logic
                }}
              >
                <div className="mb-4">
                  <label htmlFor="registration_no" className="block text-gray-700 font-medium mb-2">
                    Registration No
                  </label>
                  <input
                    type="text"
                    id="registration_no"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    name="registration-no"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="full_name" className="block text-gray-700 font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="full_name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    name="full-name"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="email_address" className="block text-gray-700 font-medium mb-2">
                    E-Mail Address
                  </label>
                  <input
                    type="email"
                    id="email_address"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    name="email-address"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="user_name" className="block text-gray-700 font-medium mb-2">
                    User Name
                  </label>
                  <input
                    type="text"
                    id="user_name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    name="username"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    name="password"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="confirm_password" className="block text-gray-700 font-medium mb-2">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirm_password"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    name="confirm_password"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="phone_number" className="block text-gray-700 font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="phone_number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    name="phone-number"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="department" className="block text-gray-700 font-medium mb-2">
                    Department
                  </label>
                  <input
                    type="text"
                    id="department"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    name="department"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="session" className="block text-gray-700 font-medium mb-2">
                    Session
                  </label>
                  <input
                    type="text"
                    id="session"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    name="session"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="year" className="block text-gray-700 font-medium mb-2">
                    Year
                  </label>
                  <input
                    type="number"
                    id="year"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    name="year"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="payment_method" className="block text-gray-700 font-medium mb-2">
                    Payment Method
                  </label>
                  <select
                    id="payment_method"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    name="payment-method"
                    required
                    onChange={(e) => {
                      const transactionField = document.getElementById("transaction_id_field");
                      const proceedButton = document.getElementById("proceed_payment_button");
                      if (e.target.value === "offline") {
                        transactionField.style.display = "none";
                        proceedButton.style.display = "none";
                      } else {                        
                        proceedButton.style.display = "block";
                        transactionField.style.display = "block";
                      }
                    }}
                  >
                    <option value="online">Online</option>
                    <option value="offline">Offline</option>
                  </select>
                </div>

                
                <div id="proceed_payment_button" className="text-center mb-4" style={{ display: "none" }}>
                  <button
                    type="button"
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                    onClick={() => {
                      window.location.href = "https://payment-gateway.example.com";
                    }}
                  >
                    Proceed to Payment
                  </button>
                </div>
                <div id="transaction_id_field" className="mb-4" style={{ display: "none" }}>
                  <label htmlFor="transaction_id" className="block text-gray-700 font-medium mb-2">
                    Transaction ID
                  </label>
                  <input
                    type="text"
                    id="transaction_id"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    name="transaction-id"
                  />
                </div>


                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>


    </>
  );
  
}

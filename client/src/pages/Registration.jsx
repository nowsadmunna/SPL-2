import React from 'react'

export default function Registration() {
  const [registrationNumber, setRegistrationNumber] = useState("");
    const [otp, setOtp] = useState("");
    const [isOtpSent, setIsOtpSent] = useState(false);
    const [message, setMessage] = useState("");
  
    const handleRequestOtp = () => {
      if (registrationNumber.trim() === "") {
        setMessage("Please enter your registration number.");
        return;
      }
  
      // Simulate OTP request
      setIsOtpSent(true);
      setMessage("OTP has been sent to your registered mobile number.");
    };
  
    const handleVerifyOtp = () => {
      if (otp.trim() === "") {
        setMessage("Please enter the OTP.");
        return;
      }
  
      // Simulate OTP verification
      if (otp === "123456") { // Replace "123456" with actual OTP logic
        setMessage("Registration successful!");
        setIsOtpSent(false);
        setRegistrationNumber("");
        setOtp("");
      } else {
        setMessage("Invalid OTP. Please try again.");
      }
    };
  
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-xl w-80">
        <h2 className="text-3xl font-extrabold text-center text-indigo-600 mb-6">Registration System</h2>
        {!isOtpSent ? (
          <div className="flex flex-col gap-6">
            <label className="block">
              <span className="text-gray-700 font-medium">Registration Number:</span>
              <input
                type="text"
                value={registrationNumber}
                onChange={(e) => setRegistrationNumber(e.target.value)}
                placeholder="Enter your registration number"
                className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3"
              />
            </label>
            <button
              onClick={handleRequestOtp}
              className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white py-3 px-6 rounded-lg hover:from-indigo-600 hover:to-blue-600 text-lg font-semibold"
            >
              Request OTP
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            <label className="block">
              <span className="text-gray-700 font-medium">Enter OTP:</span>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter the OTP"
                className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3"
              />
            </label>
            <button
              onClick={handleVerifyOtp}
              className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white py-3 px-6 rounded-lg hover:from-indigo-600 hover:to-blue-600 text-lg font-semibold"
            >
              Verify OTP
            </button>
          </div>
        )}
        {message && <p className="text-center text-indigo-700 font-medium mt-6">{message}</p>}
      </div>
    </div>
  );
}

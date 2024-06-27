import React, { useState } from "react";

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const handleChangeCurrentPassword = (e) => {
    setCurrentPassword(e.target.value);
  };

  const handleChangeNewPassword = (e) => {
    setNewPassword(e.target.value);
  };

  const handleChangeConfirmNewPassword = (e) => {
    setConfirmNewPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement change password logic here
    console.log("Change password submitted:", {
      currentPassword,
      newPassword,
      confirmNewPassword,
    });
    // Reset form fields after submission
    setCurrentPassword("");
    setNewPassword("");
    setConfirmNewPassword("");
  };

  return (
    <div className="w-[500px] mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Change Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="currentPassword"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Current Password
          </label>
          <input
            type="password"
            id="currentPassword"
            value={currentPassword}
            onChange={handleChangeCurrentPassword}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter current password"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="newPassword"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            New Password
          </label>
          <input
            type="password"
            id="newPassword"
            value={newPassword}
            onChange={handleChangeNewPassword}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter new password"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="confirmNewPassword"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Confirm New Password
          </label>
          <input
            type="password"
            id="confirmNewPassword"
            value={confirmNewPassword}
            onChange={handleChangeConfirmNewPassword}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Confirm new password"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Change Password
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;

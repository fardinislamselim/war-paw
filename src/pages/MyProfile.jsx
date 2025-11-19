import React, { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import defaultAvatar from "../assets/image.png";

const MyProfile = () => {
  const { user, setUser, updateUser } = useContext(AuthContext);
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!user) return;

    const updatedName = name.trim() || user.displayName;
    const updatedPhoto = photo.trim() || user.photoURL;

    updateUser({ displayName: updatedName, photoURL: updatedPhoto })
      .then(() => {
        setUser({ ...user, displayName: updatedName, photoURL: updatedPhoto });
        toast.success("Profile updated successfully!");
        setEditing(false);
      })
      .catch((error) => {
        toast.error("Failed to update profile. Try again!");
        to;
      });
  };

  return (
    <section className=" flex items-center justify-center bg-base-200 px-4 py-10">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="bg-base-100 shadow-xl rounded-2xl p-8 max-w-md w-full text-center">
        {!editing ? (
          <>
            <div className="avatar mb-4">
              <div className="w-28 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mx-auto">
                <img src={user?.photoURL || defaultAvatar} alt="User" />
              </div>
            </div>

            <h2 className="text-3xl font-bold text-primary mb-2">
              {user?.displayName || "Anonymous User"}
            </h2>
            <p className="text-gray-600 mb-6">
              {user?.email || "No email found"}
            </p>

            <button
              onClick={() => setEditing(true)}
              className="btn btn-primary w-full text-base-100 font-semibold rounded-full hover:scale-105 transition-transform duration-300"
            >
              Update Profile
            </button>
          </>
        ) : (
          <form onSubmit={handleUpdate} className="space-y-4">
            <h2 className="text-2xl font-bold text-primary mb-4">
              Update Your Profile
            </h2>

            <div className="flex flex-col text-left">
              <label className="font-semibold text-neutral mb-1">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter new name"
                className="input input-bordered w-full"
              />
            </div>

            <div className="flex flex-col text-left">
              <label className="font-semibold text-neutral mb-1">
                Photo URL
              </label>
              <input
                type="text"
                value={photo}
                onChange={(e) => setPhoto(e.target.value)}
                placeholder="Enter new photo URL (optional)"
                className="input input-bordered w-full"
              />
            </div>

            <div className="flex gap-3 mt-6">
              <button
                type="submit"
                className="btn btn-primary flex-1 text-base-100 font-semibold rounded-full"
              >
                Save Changes
              </button>
              <button
                type="button"
                onClick={() => setEditing(false)}
                className="btn btn-outline flex-1 rounded-full"
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default MyProfile;

import React from "react";

function ProfilePic() {
  return (
    <div className="flex justify-center items-center">
      <div className="bg-gradient-to-l from-yellow-400 to-white p-1 rounded-full">
        <div className="bg-white rounded-full p-1">
          <img
            src="https://th.bing.com/th/id/OIP.IGNf7GuQaCqz_RPq5wCkPgHaLH?rs=1&pid=ImgDetMain"
            alt="profile"
            className="w-32 h-32 rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default ProfilePic;

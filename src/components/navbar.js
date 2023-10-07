import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import Profile from "./profile"; // Correct the import path

const Navbar = () => {
  const [profile, setProfile] = useState(false);

  function handleProfile() {
    setProfile(!profile);
  }
  return (
    <div className="bg-[#F5F3EB] h-[100px]">
      <div className="flex justify-end pt-6 pr-6 text-2xl  ">
        <FaBars onClick={handleProfile} className="xl:hidden" />
      </div>
      <Profile profile={profile} setProfile={setProfile} />
    </div>
  );
};

export default Navbar;

import React, { useState } from "react";
import SideBar from "../../Components/Sidebar/SideBar";
import profilepicture from "../../assets/profilepicture.svg";
import { useNavigate } from "react-router-dom";
//import Label from './../../Components/Label/Label';

const Profile = (props) => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [setDepartment] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="flex flex-row ml-10 mt-10">
      <div className="">
        <div className="place-items-start align-top items-center">
          <SideBar />
        </div>
        <div className=" text-black w-64 h-full p-4"></div>
      </div>

      <div>
        <h1 className="text-[#4743E0] text-xl lg:text-6xl font-extrabold mb-3 lg:mb-8 mt-5 lg:mt-10">
          Hello Wade Warren,
        </h1>
        <p className="mx-auto my-auto text-opacity-50 lg:w-1/2 lg:ml-0 opacity-40">
          To access your account, please enter your credentials below. By
          logging in, you agree to our terms and conditions. Make sure to review
          our GDPR compliance for data protection.
        </p>
        <hr className="mx-auto border-dashed rounded-md w-[1000%] lg:w-[1000px] mt-12 mb-5" />
        <label className="text-[#4743E0] lg:ml-0 font-semibold mb-2 ">
          Change the Profile Details
        </label>
        <div className="flex flex-col lg:flex-row justify-around py-2 my-5">
          <div className="flex flex-col lg:flex-col mx-auto items-start justify-around mb-4 lg:mb-0">
            <label className="lg:ml-2 mb-2">First Name</label>
            <input
              Label={"First Name"}
              type={"text"}
              placeholder={"John"}
              name={"firstName"}
              className="border rounded-full py-2 px-3 mb-4 text-grey-darker w-72 mb-10"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
            />

            <label className="mb-2 lg:ml-2 lg:ml-4">Department</label>
            <select
              className="border rounded-full py-2 px-4 mb-4 text-grey-darker w-72"
              defaultValue=""
              onChange={(e) => setDepartment(e.target.value)}
            >
              <option value="">Select Department</option>
              <option value="Civil">CEE</option>
              <option value="Electrical">EIE</option>
              <option value="Mechanical">MME</option>
              <option value="IS">IS</option>
            </select>
            <label className="lg:ml-2 mb-2 mt-10">Contact Number</label>
            <input
              label={"Contact Number"}
              type={"tel"}
              placeholder={"+94 00 000 0000"}
              name={"contactNumber"}
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              className="border rounded-full py-2 px-4 mb-4 text-grey-darker w-72"
            />
            <div className="mt-4 lg:justify-between flex flex-col gap-5 items-left  w-full lg:w-[80%]">
              <div className="flex flex-col lg:flex-row   justify-between items-center mt-4">
                <div className="mt-3 lg:mt-4 w-full">
                  <button
                    className="px-5 py-2 bg-[#4743E0] text-white rounded-3xl lg:w-60"
                    onClick={() => navigate()}
                  >
                    Save Details
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-col mx-auto items-start justify-around py-">
            <div className="flex flex-col lg:flex-col mx-auto items-start justify-around mb-4 lg:mb-0">
              <label className="lg:ml-2 mb-2">Last Name</label>
              <input
                label={"Last Name"}
                type={"text"}
                placeholder={"smith"}
                name={"lastName"}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="border rounded-full py-2 px-4 mb-4 text-grey-darker w-72"
              />
              <label className="lg:ml-2 mb-2 mt-10">Work Email</label>
              <input
                label={"Work Email"}
                type={"text"}
                placeholder={"johnsmith@gmail.com"}
                name={"email"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border rounded-full py-2 px-3 mb-4 text-grey-darker w-72"
              />
            </div>
          </div>
        </div>
        <hr className="mx-auto border-dashed rounded-md w-[1000%] lg:w-[1000px] mt-12 mb-5" />
        <label className="text-[#4743E0] lg:ml-0 font-semibold mb-2 ">
          Change the Password
        </label>
        <div className="flex flex-col lg:flex-row justify-around py-2 my-5">
          <div className="flex flex-col lg:flex-col mx-auto items-start justify-around mb-4 lg:mb-0">
            <label className="lg:ml-2 mb-2">Password</label>
            <input
              label={"Password"}
              type={"text"}
              placeholder={"*******"}
              name={"password"}
              className="border rounded-full py-2 px-3 mb-4 text-grey-darker w-72 mb-10"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <div className="mt-4 lg:justify-between flex flex-col gap-5 items-left  w-full lg:w-[80%]">
              <div className="flex flex-col lg:flex-row   justify-between items-center mt-4">
                <div className="mt-3 lg:mt-4 w-full">
                  <button
                    className="px-5 py-2 bg-[#4743E0] text-white rounded-3xl lg:w-60"
                    onClick={() => navigate()}
                  >
                    Save Password
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-col mx-auto items-start justify-around py-">
            <div className="flex flex-col lg:flex-col mx-auto items-start justify-around mb-4 lg:mb-0">
              <label className="lg:ml-2 mb-2">Confirm Password</label>
              <input
                label={"Confirm Password"}
                type={"text"}
                placeholder={"*******"}
                name={"confirmPassword"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="border rounded-full py-2 px-4 mb-4 text-grey-darker w-73"
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <img
          src={profilepicture}
          alt="no internet"
          width={300}
          className="mt-10 lg:mt-5"
        />
      </div>
    </div>
  );
};

export default Profile;

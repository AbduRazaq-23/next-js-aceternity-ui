import React from "react";

const Footer = () => {
  return (
    <div className="w-full p-10  grid sm:grid-cols-2 md:grid-cols-4 gap-10  ">
      <div className="space-y-5">
        <h1 className="font-semibold">AboutUs</h1>
        <p className="text-sm">
          A music school is an institution dedicated to teaching various aspects
          of music, including vocal training, instrument playing, music theory,
          and composition. It caters to students of all ages and skill levels,
        </p>
      </div>
      <div className="space-y-5">
        <h1 className="text-semibold">Quick Links</h1>
        <ul className="text-sm">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="space-y-5">
        <h1 className="text-semibold">Follow Us</h1>
        <ul className="text-sm">
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Instagram</li>
        </ul>
      </div>
      <div className="space-y-5">
        <h1 className="text-semibold">Contact Us</h1>
        <ul className="text-sm">
          <li>Peshawar</li>
          <li>Email: abdurazaq.dev23@gmail.com</li>
          <li>Phone: 00923065011190</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

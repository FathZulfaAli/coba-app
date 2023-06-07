import React from "react";

import Contact from "./components/Contact";

function App() {
  const contactItems = [
    {
      id: 1,
      name: "Angle Lord",
      phone:"08912345678"
    },
    {
      id: 2,
      name: "Frost Man",
      phone:"08109876543"
    },
    {
      id: 3,
      name: "Many Kiro",
      phone:"012983794319"
    },
    {
      id: 4,
      name: "Tri Yoji",
      phone:"123790894102"
    },
    {
      id: 5,
      name: "Port Aman",
      phone:"123123455091"
    }
  ];

  return (
    <div>
      {contactItems.map((item) => (
           <Contact key={item.id} name={item.name} phone={item.phone} />
                //key harus ada pada fungsi looping, setiap item memanggil
      ))}
    </div>
  );
}

export default App;

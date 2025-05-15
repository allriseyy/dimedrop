import React, { useState } from 'react';
import { Heart, Sword, Shield, AArrowDownIcon, MoveRight } from 'lucide-react';

export default function ChatgptUI() {
  const [attributes, setAttributes] = useState({
    con: 10,
    str: 8,
    agi: 5,
    luc: 3,
  });

  const inventory = [
    { id: 1, name: 'Broad Sword', icon: '🗡️', quantity: 1 },
    { id: 2, name: 'Red Potion', icon: '🧪', quantity: 2 },
    { id: 3, name: 'Purple Potion', icon: '🧪', quantity: 3 },
    { id: 4, name: 'Green Potion', icon: '🧪', quantity: 1 },
    { id: 5, name: 'Wood', icon: '🪵', quantity: 3 },
    { id: 6, name: 'Iron Ingot', icon: '🧱', quantity: 2 },
    { id: 7, name: 'Hammer', icon: '🔨', quantity: 1 },
    { id: 8, name: 'Shield Part', icon: '🛡️', quantity: 1 },
    { id: 9, name: 'Bone', icon: '🦴', quantity: 1 },
    { id: 10, name: 'Tomato', icon: '🍅', quantity: 1 },
  ];

  return (
    <div className="min-h-screen bg-[#d9c3a3] p-4 font-pixel text-sm text-[#3e2e1a]">
      {/* TOP BAR */}
      <div className="flex justify-between items-center mb-4">
        {/* Health / Mana */}
        <div className="flex space-x-4 items-center">
          <div className="flex items-center space-x-1">
            <Heart className="text-red-500" size={20} />
            <div className="w-32 h-4 bg-red-100 border border-red-300">
              <div className="h-full bg-red-500 w-[100%]" />
            </div>
            <span>100 / 100</span>
          </div>
          <div className="flex items-center space-x-1">
            <AArrowDownIcon className="text-blue-400" size={20} />
            <div className="w-32 h-4 bg-blue-100 border border-blue-300">
              <div className="h-full bg-blue-500 w-[100%]" />
            </div>
            <span>50 / 50</span>
          </div>
        </div>
        {/* Gold */}
        <div className="text-lg font-bold">🪙 200</div>
      </div>

      {/* MAIN PANEL */}
      <div className="grid grid-cols-5 gap-4">
        {/* STATUS */}
        <div className="bg-[#4b3842] border-4 border-yellow-300 p-2 rounded-lg text-white space-y-2 col-span-1">
          <h2 className="text-center text-yellow-200 text-lg">STATUS</h2>
          <div>Health: 124 <span className="text-green-400">(+10)</span></div>
          <div>Attack: 34 <span className="text-green-400">(+5)</span></div>
          <div>Speed: 34 <span className="text-green-400">(+5)</span></div>
          {/* <div>Magic: 34 <span className="text-green-400">(+5)</span></div> */}
          <div className="mt-2 bg-yellow-200 text-black p-1 text-xs">
            Constitution: Attribute that will increase health.
          </div>
        </div>

        {/* ATTRIBUTES */}
        <div className="bg-[#4b3842] border-4 border-yellow-300 p-2 rounded-lg text-white space-y-2 col-span-1">
          <h2 className="text-center text-yellow-200 text-lg">ATTRIBUTES</h2>
          <div>Level 10 <span className="text-green-300">+2</span></div>
          {Object.entries(attributes).map(([key, val]) => (
            <div key={key} className="flex justify-between">
              <div className="capitalize">{key}</div>
              <div className="text-yellow-400">{"▮".repeat(val)}</div>
            </div>
          ))}
          <button className="bg-yellow-500 text-black font-bold w-full mt-2 rounded px-2 py-1">
            CONFIRM
          </button>
        </div>

        {/* EQUIPMENT */}
        <div className="bg-[#4b3842] border-4 border-yellow-300 p-2 rounded-lg text-white col-span-1">
          <h2 className="text-center text-yellow-200 text-lg">EQUIPMENT</h2>
          <div className="flex justify-center mb-2">
            <img
              src="https://images.pexels.com/photos/6803548/pexels-photo-6803548.jpeg"
              alt="character"
              className="w-16 h-16 rounded-full border-2 border-yellow-300"
            />
          </div>
          <div className="text-center">
            <div className="text-sm text-yellow-100">Equipped:</div>
            <div>🗡️ Broad Sword <span className="text-red-400">10</span></div>
          </div>
        </div>

        {/* INVENTORY */}
        <div className="bg-[#4b3842] border-4 border-yellow-300 p-2 rounded-lg text-white col-span-2">
          <h2 className="text-center text-yellow-200 text-lg">asdas</h2>
          <div className="grid grid-cols-5 gap-2 mt-2">
            {inventory.map(item => (
              <div
                key={item.id}
                className="bg-[#2f1e1e] border border-yellow-300 rounded-lg p-2 text-center text-xs"
              >
                <div className="text-xl">{item.icon}</div>
                <div className="truncate">{item.name}</div>
                <div className="text-yellow-300">x{item.quantity}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM MENU */}
      <div className="flex justify-center space-x-4 mt-6">
        {['START', 'SETTINGS', 'CONTINUE', 'QUIT'].map(label => (
          <button
            key={label}
            className="bg-yellow-300 text-black px-4 py-1 rounded shadow-md hover:bg-yellow-400"
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}

import React from 'react';

type Props = {
  money: number;
  time: number;
};

export default function FarmCard({ money, time }: Props) {
  return (
    <div className="card">
      <h2>Farm Status</h2>
      <p>💰 Money: ${money.toLocaleString()}</p>
      <p>⏰ Time: {time}:00</p>
    </div>
  );
}

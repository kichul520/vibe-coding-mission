import React from 'react';

export const Stat = ({ label, value, trend }: { label: string; value: string; trend?: string }) => (
  <div className="flex justify-between items-center mb-2">
    <span className="text-gray-400">{label}</span>
    <div className="text-right">
      <div className="text-lg font-semibold text-white">{value}</div>
      {trend && <div className="text-xs text-green-400">{trend}</div>}
    </div>
  </div>
);

import React from 'react';

interface CardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const Card = ({ title, children, className = "" }: CardProps) => (
  <div className={`bg-gray-800 border border-gray-700 rounded-lg p-5 shadow-lg ${className}`}>
    <h3 className="text-xl font-bold text-blue-400 mb-4 border-b border-gray-700 pb-2">{title}</h3>
    {children}
  </div>
);

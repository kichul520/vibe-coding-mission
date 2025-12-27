import React from 'react';
import { Card } from './Card';

export const SentimentChart = () => {
  return (
    <Card title="💬 SNS 여론">
        <div className="flex items-center gap-2 mb-3">
            <span className="text-2xl font-bold text-blue-400">긍정 65%</span>
            <span className="text-sm text-gray-500">/ 부정 12%</span>
        </div>
        <div className="space-y-2">
             <div className="text-xs text-gray-400 bg-gray-900 p-2 rounded">
                "우리 동네에도 이런 변화가 필요해요 #김태관"
             </div>
             <div className="text-xs text-gray-400 bg-gray-900 p-2 rounded">
                "교통 문제 해결해주세요"
             </div>
        </div>
    </Card>
  );
};

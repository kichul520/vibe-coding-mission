import React from 'react';
import { Card } from './Card';

export const SummaryCard = () => {
  return (
    <Card title="🤖 AI 정무적 요약 (Beta)">
      <div className="bg-gray-900/50 p-4 rounded text-gray-300 leading-relaxed animate-pulse">
        Gemini API를 통해 지역 이슈를 분석하고 있습니다...
        <br />
        (API 연동 후 실제 요약 데이터가 표시됩니다.)
      </div>
    </Card>
  );
};

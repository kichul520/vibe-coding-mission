import React from 'react';
import { Card } from './Card';

interface NewsCardProps {
    region: string;
}

export const NewsCard = ({ region }: NewsCardProps) => {
    return (
        <Card title="📰 주요 뉴스">
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex gap-2">
                <span className="text-blue-400 shrink-0">●</span>
                <span className="line-clamp-2 hover:text-white cursor-pointer transition">{region} 지역 발전 협의회 개최 소식</span>
            </li>
            <li className="flex gap-2">
                <span className="text-blue-400 shrink-0">●</span>
                <span className="line-clamp-2 hover:text-white cursor-pointer transition">주민 편의 시설 확충 관련 보도</span>
            </li>
            <li className="flex gap-2">
                <span className="text-gray-600 shrink-0">●</span>
                <span className="text-gray-500">관련 기사 없음</span>
            </li>
          </ul>
        </Card>
    );
}

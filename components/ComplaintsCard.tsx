import React from 'react';
import { Card } from './Card';
import { Stat } from './Stat';

export const ComplaintsCard = () => {
    return (
        <Card title="📢 민원 동향">
            <Stat label="주간 민원 건수" value="12건" trend="▲ 2" />
            <div className="mt-4 space-y-2">
                <div className="bg-red-900/20 text-red-300 p-2 rounded text-xs border border-red-900/50">
                    <span className="font-bold">[긴급]</span> 도로 파손 보수 요청
                </div>
                <div className="bg-gray-700/50 p-2 rounded text-xs text-gray-400">
                    가로등 설치 문의
                </div>
            </div>
        </Card>
    );
}

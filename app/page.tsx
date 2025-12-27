import React from 'react';

// Card Component
interface CardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Card = ({ title, children, className = "" }: CardProps) => (
  <div className={`bg-gray-800 border border-gray-700 rounded-lg p-5 shadow-lg ${className}`}>
    <h3 className="text-xl font-bold text-blue-400 mb-4 border-b border-gray-700 pb-2">{title}</h3>
    {children}
  </div>
);

// Stat Component
const Stat = ({ label, value, trend }: { label: string; value: string; trend?: string }) => (
  <div className="flex justify-between items-center mb-2">
    <span className="text-gray-400">{label}</span>
    <div className="text-right">
      <div className="text-lg font-semibold text-white">{value}</div>
      {trend && <div className="text-xs text-green-400">{trend}</div>}
    </div>
  </div>
);

export default function Dashboard() {
  const regions = ["삼양", "도련", "봉개"];

  return (
    <div className="min-h-screen p-8 max-w-7xl mx-auto">
      <header className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-extrabold text-blue-500 tracking-tight">
            김태관 후보 <span className="text-white">민심 안테나</span>
          </h1>
          <p className="text-gray-400 mt-2">7일 완성 민심 프로젝트 - 실시간 지역 모니터링</p>
        </div>
        <div className="flex gap-4">
            <div className="bg-blue-900/30 border border-blue-800 rounded px-4 py-2 text-sm text-blue-200">
                실시간 데이터 연동 중
            </div>
        </div>
      </header>

      {/* Summary Section - Placeholder for AI Summary */}
      <section className="mb-8">
        <Card title="🤖 AI 정무적 요약 (Beta)">
          <div className="bg-gray-900/50 p-4 rounded text-gray-300 leading-relaxed animate-pulse">
            Gemini API를 통해 지역 이슈를 분석하고 있습니다...
            <br />
            (API 연동 후 실제 요약 데이터가 표시됩니다.)
          </div>
        </Card>
      </section>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {regions.map((region) => (
          <div key={region} className="space-y-6">
            <h2 className="text-2xl font-bold text-white border-l-4 border-blue-600 pl-3">{region} 지역</h2>

            {/* News Section */}
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

            {/* Complaints Section */}
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

            {/* SNS Section */}
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
          </div>
        ))}
      </div>

      <footer className="mt-12 text-center text-gray-600 text-sm border-t border-gray-800 pt-6">
        © 2024 김태관 선거 캠프. All rights reserved. | 보안 등급: 대외비
      </footer>
    </div>
  );
}

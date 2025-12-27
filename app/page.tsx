'use client';

import React, { useState } from 'react';
import { SummaryCard } from '../components/SummaryCard';
import { NewsCard } from '../components/NewsCard';
import { ComplaintsCard } from '../components/ComplaintsCard';
import { SentimentChart } from '../components/SentimentChart';
import { RegionFilter } from '../components/RegionFilter';

export default function Dashboard() {
  const regions = ["삼양", "도련", "봉개"];
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  const filteredRegions = selectedRegion
    ? regions.filter((r) => r === selectedRegion)
    : regions;

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
        <SummaryCard />
      </section>

      {/* Region Filter */}
      <RegionFilter
        regions={regions}
        selectedRegion={selectedRegion}
        onSelectRegion={setSelectedRegion}
      />

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredRegions.map((region) => (
          <div key={region} className="space-y-6">
            <h2 className="text-2xl font-bold text-white border-l-4 border-blue-600 pl-3">{region} 지역</h2>

            {/* News Section */}
            <NewsCard region={region} />

            {/* Complaints Section */}
            <ComplaintsCard />

            {/* SNS Section */}
            <SentimentChart />
          </div>
        ))}
      </div>

      <footer className="mt-12 text-center text-gray-600 text-sm border-t border-gray-800 pt-6">
        © 2024 김태관 선거 캠프. All rights reserved. | 보안 등급: 대외비
      </footer>
    </div>
  );
}

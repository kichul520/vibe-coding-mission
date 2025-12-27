import React from 'react';

interface RegionFilterProps {
    regions: string[];
    selectedRegion: string | null;
    onSelectRegion: (region: string | null) => void;
}

export const RegionFilter = ({ regions, selectedRegion, onSelectRegion }: RegionFilterProps) => {
    return (
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
            <button
                onClick={() => onSelectRegion(null)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedRegion === null
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                }`}
            >
                전체
            </button>
            {regions.map((region) => (
                <button
                    key={region}
                    onClick={() => onSelectRegion(region)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        selectedRegion === region
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                    }`}
                >
                    {region}
                </button>
            ))}
        </div>
    );
};

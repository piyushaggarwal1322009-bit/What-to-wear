import React from 'react';
import type { WeatherCondition } from '../types/weather';

export function WeatherScene({ condition }: { condition: WeatherCondition }) {
  return (
    <div className="relative w-full h-40 overflow-hidden rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          .animate-spin-slow { animation: spin 15s linear infinite; }
          .animate-float { animation: float 6s ease-in-out infinite; }
          .animate-rain { animation: rain 1s linear infinite; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes rain {
          0% { transform: translateY(-20px); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(100px); opacity: 0; }
        }
      `}</style>
      
      {condition === 'Clear' && (
        <svg viewBox="0 0 100 100" className="w-24 h-24 text-sunrise-amber animate-spin-slow">
          <circle cx="50" cy="50" r="20" fill="currentColor" />
          <path d="M50 10 L50 20 M50 80 L50 90 M10 50 L20 50 M80 50 L90 50 M22 22 L29 29 M71 71 L78 78 M22 78 L29 71 M71 22 L78 29" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        </svg>
      )}

      {condition === 'Cloudy' && (
        <div className="relative w-32 h-24">
          <svg viewBox="0 0 100 100" className="absolute top-2 left-0 w-20 h-20 text-overcast-teal/80 animate-float" style={{ animationDelay: '0s' }}>
            <path d="M25 60 a15 15 0 0 1 0 -30 a20 20 0 0 1 35 -10 a15 15 0 0 1 20 15 a15 15 0 0 1 -10 25 z" fill="currentColor" />
          </svg>
          <svg viewBox="0 0 100 100" className="absolute top-6 left-12 w-24 h-24 text-overcast-teal animate-float" style={{ animationDelay: '-3s' }}>
            <path d="M25 60 a15 15 0 0 1 0 -30 a20 20 0 0 1 35 -10 a15 15 0 0 1 20 15 a15 15 0 0 1 -10 25 z" fill="currentColor" />
          </svg>
        </div>
      )}

      {condition === 'Rain' && (
        <div className="relative w-32 h-32 flex flex-col items-center justify-start pt-4">
          <svg viewBox="0 0 100 100" className="w-24 h-24 text-dusk-ink z-10">
            <path d="M25 60 a15 15 0 0 1 0 -30 a20 20 0 0 1 35 -10 a15 15 0 0 1 20 15 a15 15 0 0 1 -10 25 z" fill="currentColor" />
          </svg>
          <div className="absolute top-16 left-0 right-0 flex justify-around px-4">
            <div className="w-1 h-6 bg-periwinkle/60 rounded-full animate-rain" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-1 h-6 bg-periwinkle/60 rounded-full animate-rain" style={{ animationDelay: '0.4s' }}></div>
            <div className="w-1 h-6 bg-periwinkle/60 rounded-full animate-rain" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-1 h-6 bg-periwinkle/60 rounded-full animate-rain" style={{ animationDelay: '0.6s' }}></div>
          </div>
        </div>
      )}
    </div>
  );
}

import React, { useEffect, useState } from 'react';

// 가짜 접속자 데이터 생성기
const generateFakeUsers = () => {
  return Array.from({ length: 8 }, (_, i) => ({
    id: i,
    city: ['Seoul', 'Tokyo', 'New York', 'London', 'Paris', 'Berlin', 'Toronto', 'Sydney'][i],
    status: 'meditating',
    duration: Math.floor(Math.random() * 40) + 5
  }));
};

const GlobeView: React.FC = () => {
  const [users, setUsers] = useState(generateFakeUsers());

  // 5초마다 데이터가 바뀌는 척 연출
  useEffect(() => {
    const interval = setInterval(() => {
      setUsers(prev => prev.map(u => ({
        ...u,
        duration: u.duration + 1 // 시간이 흐르는 척
      })));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-full flex flex-col p-6 animate-fade-in">
      <div className="text-center mb-8 mt-4">
        <h2 className="text-2xl font-light text-zen-text mb-2">Connected Minds</h2>
        <p className="text-sm text-zen-muted">
          <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"/>
          {users.length * 142} people meditating now
        </p>
      </div>

      {/* 지구본 들어갈 자리 (Placeholder) */}
      <div className="flex-1 flex items-center justify-center relative my-4">
        {/* 실제 3D 라이브러리 대신 원형 그래픽으로 대체 (오류 방지) */}
        <div className="w-64 h-64 rounded-full bg-gradient-to-b from-stone-800 to-stone-900 shadow-2xl flex items-center justify-center border border-white/5 relative overflow-hidden">
            <div className="absolute inset-0 opacity-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/World_map_blank_without_borders.svg/2000px-World_map_blank_without_borders.svg.png')] bg-cover bg-center mix-blend-overlay"></div>
            <span className="text-zen-muted/30 text-xs font-mono">Globe Visualization</span>
            
            {/* 가짜 접속자 점들 */}
            <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-white rounded-full animate-ping opacity-75"></div>
            <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-white rounded-full animate-ping delay-700 opacity-50"></div>
        </div>
      </div>

      {/* 최근 활동 로그 */}
      <div className="h-1/3 overflow-hidden">
        <h3 className="text-xs font-bold text-zen-muted uppercase tracking-widest mb-4">Recent Sessions</h3>
        <div className="space-y-3">
          {users.slice(0, 4).map((u, i) => (
            <div key={i} className="flex justify-between items-center text-sm border-b border-white/5 pb-2 last:border-0">
              <span className="text-zen-text">{u.city}</span>
              <span className="text-zen-muted text-xs">Just added {u.duration}m</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GlobeView;
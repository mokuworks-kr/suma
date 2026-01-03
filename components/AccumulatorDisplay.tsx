import React, { useMemo } from 'react';
import { formatDuration } from '../utils';
import { OdometerText } from './OdometerText';

interface AccumulatorDisplayProps {
  totalMinutes: number;
}

const AccumulatorDisplay: React.FC<AccumulatorDisplayProps> = ({ totalMinutes }) => {
  const { major, label } = useMemo(() => formatDuration(totalMinutes), [totalMinutes]);

  return (
    <div className="flex flex-col items-center justify-center space-y-2 animate-fade-in">
      <OdometerText 
        value={major} 
        className="text-7xl md:text-9xl font-light tracking-tighter text-zen-text py-2"
      />
      <span className="text-lg text-zen-muted/60 font-normal tracking-tight">
        {label}
      </span>
    </div>
  );
};

export default AccumulatorDisplay;
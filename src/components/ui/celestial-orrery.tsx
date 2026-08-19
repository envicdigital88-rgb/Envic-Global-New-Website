import React, { ReactNode } from 'react';

export const Component = ({ children }: { children?: ReactNode }) => {
  return (
    <div className="relative w-full h-full min-h-screen flex items-center justify-center overflow-hidden bg-ink">
      <style>{`
        .glyph-field {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
          opacity: 0.15;
        }
        .glyph-container {
          position: absolute;
          border: 1px dashed rgba(255, 255, 255, 0.4);
          border-radius: 50%;
        }
        .glyph-1 { width: 500px; height: 500px; animation: spin 40s linear infinite; }
        .glyph-2 { width: 650px; height: 650px; animation: spin 60s linear infinite reverse; }
        .glyph-3 { width: 800px; height: 800px; animation: spin 80s linear infinite; }
        
        .orrery-field {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
        }
        .orbit {
          position: absolute;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 50%;
        }
        .planet {
          position: absolute;
          border-radius: 50%;
          top: 0;
          left: 50%;
          transform: translate(-50%, -50%);
          box-shadow: 0 0 20px currentColor;
        }
        
        /* Orbits sizes and planet colors */
        .orbit-1 { width: 250px; height: 250px; animation: spin 15s linear infinite; }
        .orbit-1 .planet { width: 8px; height: 8px; background: #8dda90; color: #8dda90; }
        
        .orbit-2 { width: 380px; height: 380px; animation: spin 25s linear infinite; }
        .orbit-2 .planet { width: 12px; height: 12px; background: #4caf4f; color: #4caf4f; }
        
        .orbit-3 { width: 520px; height: 520px; animation: spin 35s linear infinite; }
        .orbit-3 .planet { width: 10px; height: 10px; background: #bcebbd; color: #bcebbd; }
        
        .orbit-4 { width: 680px; height: 680px; animation: spin 50s linear infinite; }
        .orbit-4 .planet { width: 14px; height: 14px; background: #f1fbf1; color: #f1fbf1; }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
      <div className="absolute inset-0 pointer-events-none">
        <div className="glyph-field">
            <div className="glyph-container glyph-1">
                  <div className="glyph-part part-1"></div><div className="glyph-part part-2"></div><div className="glyph-part part-3"></div>
            </div>
            <div className="glyph-container glyph-2">
                <div className="glyph-part part-1"></div><div className="glyph-part part-2"></div>
            </div>
            <div className="glyph-container glyph-3">
                <div className="glyph-part part-1"></div><div className="glyph-part part-2"></div><div className="glyph-part part-3"></div>
            </div>
        </div>

        <div className="orrery-field">
            <div className="orbit orbit-1"><div className="planet"></div></div>
            <div className="orbit orbit-2"><div className="planet"></div></div>
            <div className="orbit orbit-3"><div className="planet"></div></div>
            <div className="orbit orbit-4"><div className="planet"></div></div>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
};

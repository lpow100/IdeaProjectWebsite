declare module 'react-kofi' {
  import React from 'react';

  export interface KoFiWidgetProps {
    user: string;
    color: string;
    label?: string;
    target?: string;
    id: string;
  }

  export const KoFiWidget: React.FC<KoFiWidgetProps>;
  
  // Add other components if you are using them (e.g., KoFiButton)
  export const KoFiButton: React.FC<any>;
}

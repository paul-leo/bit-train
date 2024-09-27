import type { ReactNode } from 'react';

export type TrainOrderProps = {
  /**
   * sets the component children.
   */
  children?: ReactNode;
};

export function TrainOrder({ children }: TrainOrderProps) {
  return (
    <div>
      {children}
    </div>
  );
}

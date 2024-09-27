import type { ReactNode } from 'react';

export type TrainSearchProps = {
  /**
   * sets the component children.
   */
  children?: ReactNode;
};

export function TrainSearch({ children }: TrainSearchProps) {
  return (
    <div>
      {children}
    </div>
  );
}

import type { ReactNode } from 'react';

export type TrainAppProps = {
  /**
   * sets the component children.
   */
  children?: ReactNode;
};

export function TrainApp({ children }: TrainAppProps) {
  return (
    <div>
      {children}
    </div>
  );
}

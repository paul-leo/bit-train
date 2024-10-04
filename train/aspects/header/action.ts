import type { SlotRegistry } from '@bitdev/harmony.harmony';
import { ComponentType } from 'react';

export interface Action {
  /**
   * name of the item
   */
  name: string;

  /**
   * component to render.
   */
  component: ComponentType;
}

export type ActionSlot = SlotRegistry<Action[]>;

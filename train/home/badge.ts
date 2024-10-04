import type { SlotRegistry } from '@bitdev/harmony.harmony';
import type { ComponentType } from 'react';

export interface Badge {
  /**
   * name of the badge.
   */
  name: string;

  /**
   * component to render as a badge.
   */
  component: ComponentType;
};

// define the slot registry type. 
export type BadgeSlot = SlotRegistry<Badge[]>;
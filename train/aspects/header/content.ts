import type { SlotRegistry } from '@bitdev/harmony.harmony';

export interface HeaderLink {
  /**
   * name of the item
   */
  label: string;

  /**
   * href for the link.
   */
  href: string;
}

export type HeaderLinkSlot = SlotRegistry<HeaderLink[]>;

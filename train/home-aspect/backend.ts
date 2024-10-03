import type { SlotRegistry } from "@bitdev/harmony.harmony";
import type { ApplicationInstance } from "@teambit/application";

/**
 * backend API server.
 */
export type BackendServer = {
  /**
   * name of the server.
   */
  name: string;

  /**
   * url of the backend server.
   */
  run: (context: HomeAspectContext) => Promise<ApplicationInstance>;
};

/**
 * platform for backend server
 * in the wayne platform
 */
export type HomeAspectContext = {
  /**
   * port to use.
   */
  port?: number;
};

export type BackendSlot = SlotRegistry<BackendServer[]>;       

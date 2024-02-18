declare module "@/plugins/VanillaTilt.js" {
    class VanillaTilt {
      constructor(element: HTMLElement, settings?: VanillaTiltSettings);
      static init(elements: NodeListOf<HTMLElement> | HTMLElement, settings?: VanillaTiltSettings): void;
      destroy(): void;
    }
  
    interface VanillaTiltSettings {
      reverse?: boolean;
      max?: number;
      startX?: number;
      startY?: number;
      perspective?: number;
      easing?: string;
      scale?: number;
      speed?: number;
      transition?: boolean;
      axis?: string | null;
      glare?: boolean;
      'max-glare'?: number;
      'glare-prerender'?: boolean;
      'full-page-listening'?: boolean;
      'mouse-event-element'?: string | HTMLElement | null;
      reset?: boolean;
      'reset-to-start'?: boolean;
      gyroscope?: boolean;
      gyroscopeMinAngleX?: number;
      gyroscopeMaxAngleX?: number;
      gyroscopeMinAngleY?: number;
      gyroscopeMaxAngleY?: number;
      gyroscopeSamples?: number;
    }
  
    export = VanillaTilt;
  }
  
  export const VanillaTilt = (function () {
    class VanillaTilt {
      constructor(element: HTMLElement, settings?: VanillaTiltSettings);
      destroy(): void;
      static isSettingTrue(setting: any): boolean;
      getElementListener(): Node;
      addEventListeners(): void;
      removeEventListeners(): void;
      onDeviceOrientation(event: DeviceOrientationEvent): void;
      onMouseEnter(): void;
      onMouseMove(event: MouseEvent): void;
      onMouseLeave(): void;
      reset(): void;
      resetGlare(): void;
      getValues(): {
        tiltX: string;
        tiltY: string;
        percentageX: number;
        percentageY: number;
        angle: number;
      };
      updateElementPosition(): void;
      update(): void;
      prepareGlare(): void;
      updateGlareSize(): void;
      updateClientSize(): void;
      onWindowResize(): void;
      setTransition(): void;
      extendSettings(settings: VanillaTiltSettings): VanillaTiltSettings;
      static init(elements: NodeListOf<HTMLElement> | HTMLElement, settings?: VanillaTiltSettings): void;
    }
  
    if (typeof document !== 'undefined') {
      /* expose the class to window */
      window.VanillaTilt = VanillaTilt;
  
      /**
       * Auto load
       */
      VanillaTilt.init(document.querySelectorAll('[data-tilt]'));
    }
  
    return VanillaTilt;
  })();
  
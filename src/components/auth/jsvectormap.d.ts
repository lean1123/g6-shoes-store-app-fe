declare module 'jsvectormap' {
    interface JsVectorMapOptions {
      selector: string;
      map: string;
      zoomButtons?: boolean;
      regionStyle?: {
        initial?: {
          fill?: string;
        };
        hover?: {
          fillOpacity?: number;
          fill?: string;
        };
      };
      regionLabelStyle?: {
        initial?: {
          fill?: string;
          fontFamily?: string;
          fontWeight?: string;
        };
        hover?: {
          cursor?: string;
        };
      };
      labels?: {
        regions?: {
          render?: (code: string) => string;
        };
      };
    }
  
    class JsVectorMap {
      constructor(options: JsVectorMapOptions);
      destroy(): void;
    }
  
    export default JsVectorMap;
  }
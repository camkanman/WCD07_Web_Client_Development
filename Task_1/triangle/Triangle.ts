export interface Triangle {
    a: number;
    b: number;
  }
  
  export function findAnglesOfTriangle(triangle: Triangle): number {
    return 180 - (triangle.a + triangle.b);
  }
  
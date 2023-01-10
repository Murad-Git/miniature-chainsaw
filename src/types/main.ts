export interface ColorState {
  color: string;
  id: number;
  name: string;
  pantone_value: string;
  year: number;
}
export interface Params {
  ({ params }: { params: any }): Promise<any>;
}

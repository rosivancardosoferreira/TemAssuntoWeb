export interface useHomeData {
  naviagateTo: (value: string) => void;
  options: Array<{ id: number; label: string; destiny: string }>;
}

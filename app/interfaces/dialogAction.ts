export interface DialogActions {
  title: string;
  color: string;
  textColor: string;
  action: () => Promise<void>;
}
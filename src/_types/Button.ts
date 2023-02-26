type variantButton = "green" | "orange" | "blue";
export interface ButtonProps {
  title: string;
  className?: string;
  variant?: variantButton;
  onClick?: () => void;
}

export interface ButtonModifier {
  variant: variantButton;
}

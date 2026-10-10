import type { SignButtonProps } from './sign-button.types';
import { signButtonStyles, signButtonIcon } from './sign-button.styles';

export default function SignButton({ text, icon, onClick }: SignButtonProps) {
  return (
    <button type="button" className={signButtonStyles} onClick={onClick}>
      {icon && <span className={signButtonIcon}>{icon}</span>}

      <span className="flex items-center justify-center">{text}</span>
    </button>
  );
}

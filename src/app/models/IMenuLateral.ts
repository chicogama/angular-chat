import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
export interface IMenuLateral {
  label: string;
  icon: IconDefinition;
  route: string;
  active: boolean;
}

import { HiPencil, HiTrash } from 'react-icons/hi';

interface IconProps {
  icon: 'edit' | 'delete';
  onClick?(): void;
}

export const Icon = ({ icon, ...props }: IconProps) => {
  switch (icon) {
    case 'delete':
      return <HiTrash {...props} />;
    case 'edit':
      return <HiPencil {...props} />;
    default:
      return <div>Icon</div>;
  }
};

import { firstLetterToUpperCase } from '@/client/helpers/strings';
import { docsPaths, paths } from '@/client/utils/paths';
import { Link } from '../../global/Link/Link';

export const MainNav = () => {
  return (
    <nav>
      <ul
        style={{
          display: 'flex',
          gap: '16px',
        }}
      >
        {[...Object.entries(paths), ...Object.entries(docsPaths)].map(
          ([key, path]) => (
            <Link key={key} href={path}>
              {firstLetterToUpperCase(key)}
            </Link>
          ),
        )}
      </ul>
    </nav>
  );
};

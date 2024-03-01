import { paths } from '@/utils/paths';
import Link from 'next/link';

interface Chapter {
  title: string;
  topics: string[];
}

interface ChaptersNavProps {
  path: keyof typeof paths;
  chapters: Chapter[];
}

export const ChaptersNav = ({ chapters, path }: ChaptersNavProps) => {
  return (
    <nav>
      <ul>
        {chapters.map(({ title, topics }) => (
          <div>
            <h3>{title}</h3>
            <ul>
              {topics.map((topic) => (
                <li>
                  <Link href={`${paths[path]}/${topic}`}>{topic}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </ul>
    </nav>
  );
};

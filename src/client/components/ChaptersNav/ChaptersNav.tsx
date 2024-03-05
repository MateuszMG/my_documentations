import { paths } from '@/client/utils/paths';
import Link from 'next/link';

interface Subtitle {
  _id: string;
  subtitle: string;
}

interface Chapter {
  mainTitle: string;
  subtitles: Subtitle[];
}

interface ChaptersNavProps {
  path: keyof typeof paths;
  chapters: Chapter[];
}

export const ChaptersNav = ({ chapters, path }: ChaptersNavProps) => {
  return (
    <nav>
      <ul>
        {chapters.map(({ mainTitle, subtitles }) => (
          <div key={mainTitle}>
            <h3>{mainTitle}</h3>
            <ul>
              {subtitles.map((subtitle) => (
                <li key={subtitle._id}>
                  <Link href={`${paths[path]}/${subtitle.subtitle}`}>
                    {subtitle.subtitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </ul>
    </nav>
  );
};

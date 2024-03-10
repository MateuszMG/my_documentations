import { docsPaths } from '@/client/utils/paths';
import { Box, Typography } from '@mui/material';
import { Link } from '../../global/Link/Link';

interface Subtitle {
  _id: string;
  subtitle: string;
}

interface Chapter {
  mainTitle: string;
  subtitles: Subtitle[];
}

interface ChaptersNavProps {
  chapters: Chapter[];
  path: AvailableCategories;
}

export const ChaptersNav = ({ chapters, path }: ChaptersNavProps) => {
  return (
    <Box component={'nav'}>
      <Box
        component={'ol'}
        display={'flex'}
        flexWrap={'wrap'}
        justifyContent={'center'}
        margin={'8px 16px'}
        width='100vw'
      >
        {chapters.map(({ mainTitle, subtitles }) => (
          <Box key={mainTitle} minWidth='280px' margin={'20px 0'}>
            <Typography variant='h5'> {mainTitle} </Typography>
            <Box component={'ul'} margin={'8px 0 8px 24px'}>
              {subtitles.map(({ _id, subtitle }) => (
                <li key={_id}>
                  <Link href={`${docsPaths[path]}/${subtitle}`}>
                    {subtitle}
                  </Link>
                </li>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

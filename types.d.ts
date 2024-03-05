type AvailableCategories = 'javascript' | 'typescript' | 'graphql';

type Post = {
  _id: string;

  category: string;
  content: string;
  mainTitle: string;
  subtitle: string;

  createdAt: string;
  updatedAt: string;
};

type SubtitlePath = Pick<Post, 'subtitle' | 'category'>;

type Title = Pick<Post, '_id' | 'mainTitle' | 'subtitle'>;
type GroupedTitles = { [mainTitle: string]: Title[] }[];

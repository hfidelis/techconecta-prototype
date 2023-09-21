export interface Post {
  id: number;
  category: string;
  userOwner: string;
  title: string;
  subtitle: string;
  image: string;
  content: string;
  date: Date;
  views: number;
}

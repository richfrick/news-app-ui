export interface Article {
  article_id: number;
  title: string;
  topic: string;
  author: string;
  body: string;
  created_at: string;
  votes: number;
  article_img_url: string;
  comment_count?: number;
}

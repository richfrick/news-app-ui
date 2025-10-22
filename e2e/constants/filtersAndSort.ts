export const TOPICS = ['football', 'cooking', 'coding'] as const;
export type Topic = (typeof TOPICS)[number];

export const SORT_BY = ['comment_count', 'created_at', 'votes'] as const;
export type SortBy = (typeof SORT_BY)[number];

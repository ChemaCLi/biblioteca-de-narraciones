export interface Tag {
  name: string;
  visible: boolean;
}

export interface Chapter {
  id: string;
  title: string;
  duration: string;
  description: string;
  audioFile: string;
  tags: Tag[];
}

export interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  theme: string;
  publisher: string;
  edition: string;
  isbn: string;
  coverImage: string;
  chapters: Chapter[];
}

export interface BooksData {
  books: Book[];
} 
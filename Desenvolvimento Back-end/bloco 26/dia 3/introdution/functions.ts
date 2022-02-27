// ./functions.ts

import fs from 'fs/promises';
import Book from './interfaces/book';

async function read(): Promise<Book[]> {
    const data = await fs.readFile("./books.json", "utf8");

    const books: Book[] = JSON.parse(data);

    return books;
}

async function write(data: Book[]): Promise<void> {
  await fs.writeFile("./books.json", JSON.stringify(data));
}

export {
    read,
    write
}
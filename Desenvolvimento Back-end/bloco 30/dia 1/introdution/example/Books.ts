import { connect, Schema, model } from 'mongoose';

connect('mongodb://localhost:27017/model_example');

interface Book {
  title: string,
  author: string,
}

const bookSchema = new Schema<Book>({
  title: { type: String, required: true },
  author: { type: String, required: true }
});

const bookModel = model<Book>('Books', bookSchema);
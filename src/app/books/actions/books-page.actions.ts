import { createAction, props } from "@ngrx/store";
import { BookRequiredProps } from "src/app/shared/models";

export const enter = createAction("[Books Page] Enter");

export const selectBook = createAction(
    "[Books Page] Select Book",
    props<{ bookId: string }>()
  );

// Create
export const createBook = createAction(
    "[Books Page] Create a Book",
    props<{ book: BookRequiredProps }>()
);

// Update
export const updateBook = createAction(
    "[Books Page] Update Book",
    props<{ bookId: string; changes: BookRequiredProps }>()
  );
  

// Delete
export const deleteBook = createAction(
    "[Books Page] Delete a Book",
    props<{ 
        bookId: string
    }>()
);
// Cancel
export const clearSelectedBook = createAction(
    "[Books Page] Clear Selected Book"
  );
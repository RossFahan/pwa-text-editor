// Install the following package:
import { openDB } from 'idb';

// Initialize the database
const initDb = async () => {
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
    },
  });
};

// Add content to the database
export const putDb = async (content) => {
  console.log('Putting content into the database:', content);
  const db = await openDB('jate', 1);
  const tx = db.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  await store.add({ content });
  await tx.done;
  console.log('Content added to the database:', content);
};

// Retrieve all content from the database
export const getDb = async () => {
  console.log('Getting all content from the database');
  const db = await openDB('jate', 1);
  const tx = db.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');
  const allContent = await store.getAll();
  await tx.done;
  console.log('All content retrieved from the database:', allContent);
  return allContent;
};

initDb();

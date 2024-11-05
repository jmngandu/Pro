import { useEffect, useState } from "react";
import { database } from "../appwrite/config";
function Notes() {
  const [notes, setNotes] = useState([]);

  const init = async () => {
    const response = await databases.listDocuments(
      import.meta.env.DATABASE_ID,
      import.meta.env.VITE_COLLECTION_ID_NOTES
    );
    setNotes(response.documents);
  };
  return <div>Notes</div>;
}

export default Notes;

import { useEffect, useState } from "react";
import { database } from "../appwrite/config";
function Notes() {
  const init = async () => {
    const response = await databases.listDocuments(
      import.meta.env.DATABASE_ID,
      import.meta.env.VITE_COLLECTION_ID_NOTES
    );
    console.log(response);
  };
  return <div>Notes</div>;
}

export default Notes;

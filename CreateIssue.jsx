import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { auth, db } from "./firebase";

function CreateIssue() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Low");
  const [assignedTo, setAssignedTo] = useState("");

  const handleCreateIssue = async () => {
    if (!title || !description) {
      alert("Please fill all fields");
      return;
    }

    try {
      await addDoc(collection(db, "issues"), {
        title,
        description,
        priority,
        status: "Open",
        assignedTo,
        createdBy: auth.currentUser?.email,
        createdAt: new Date()
      });

      alert("Issue created successfully");
      setTitle("");
      setDescription("");
      setAssignedTo("");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <h2>Create Issue</h2>

      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <br />

      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>

      <br />

      <input
        placeholder="Assigned To (email)"
        value={assignedTo}
        onChange={(e) => setAssignedTo(e.target.value)}
      />

      <br />

      <button onClick={handleCreateIssue}>Create Issue</button>
    </div>
  );
}

export default CreateIssue;

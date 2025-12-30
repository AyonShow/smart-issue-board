import { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "./firebase";

function IssueList() {
  const [issues, setIssues] = useState([]);
  const [statusFilter, setStatusFilter] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("");

  useEffect(() => {
    const fetchIssues = async () => {
      const q = query(
        collection(db, "issues"),
        orderBy("createdAt", "desc")
      );
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setIssues(data);
    };

    fetchIssues();
  }, []);

  const filteredIssues = issues.filter(issue => {
    return (
      (statusFilter === "" || issue.status === statusFilter) &&
      (priorityFilter === "" || issue.priority === priorityFilter)
    );
  });

  return (
    <div>
      <h2>All Issues</h2>

      <select onChange={(e) => setStatusFilter(e.target.value)}>
        <option value="">All Status</option>
        <option>Open</option>
        <option>In Progress</option>
        <option>Done</option>
      </select>

      <select onChange={(e) => setPriorityFilter(e.target.value)}>
        <option value="">All Priority</option>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>

      <ul>
        {filteredIssues.map(issue => (
          <li key={issue.id}>
            <b>{issue.title}</b> | {issue.priority} | {issue.status}
            <br />
            Assigned to: {issue.assignedTo}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default IssueList;

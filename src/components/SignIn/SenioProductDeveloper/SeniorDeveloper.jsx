import React from 'react';
import { Link } from 'react-router-dom';

const candidates = [
  { id: 1, name: "Katherine Feng", date: "July 28, 2024", status: "Pending" },
  { id: 2, name: "John Doe", date: "July 28, 2024", status: "Pending" },
  { id: 3, name: "Mary Jane", date: "July 28, 2024", status: "Pending" },
  { id: 4, name: "Sahil Seth", date: "July 28, 2024", status: "Pending" },
  { id: 5, name: "Xavier Dun", date: "July 28, 2024", status: "Pending" },
  { id: 6, name: "Sage Rogers", date: "July 27, 2024", status: "Pending" },
  { id: 7, name: "Jackson Liu", date: "July 27, 2024", status: "Pending" },
  { id: 8, name: "Emily Clark", date: "July 27, 2024", status: "Pending" },
  { id: 9, name: "Zachary Aldenburg", date: "July 27, 2024", status: "Pending" },
  { id: 10, name: "Lorita Schuster", date: "July 26, 2024", status: "Pending" },
];

function CandidateList() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Candidates</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-gray-200">Candidate</th>
            <th className="py-2 px-4 border-gray-200">Interview Date</th>
            <th className="py-2 px-4 border-gray-200">Status</th>
          </tr>
        </thead>
        <tbody>
          {candidates.map((candidate) => (
            <tr key={candidate.id} className="text-center bg-[#d9ebec] hover:bg-[#85bfc1] cursor-pointer">
              <td className="py-2 px-4 border-b border-white">
                <Link to={`/candidate/${candidate.id}`}>{candidate.name}</Link>
              </td>
              <td className="py-2 px-4 border-b border-white">{candidate.date}</td>
              <td className="py-2 px-4 border-b border-white">{candidate.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CandidateList;

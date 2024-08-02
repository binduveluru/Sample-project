'use client';

import React from 'react';

const Dashboard = () => {
  const data = {
    newInterview: {
      title: "Add New Interview",
      description: "Schedule a new mock interview session to prepare for upcoming opportunities."
    },
    previousInterviews: [
      { id: 1, title: 'System Design', date: '2023-06-15', result: 'Passed' },
      { id: 2, title: 'Algorithm Practice', date: '2023-07-01', result: 'Passed' },
      { id: 3, title: 'Behavioral Interview', date: '2023-07-10', result: 'Needs Improvement' },
    ],
    feedback: [
      { id: 1, title: 'System Design', notes: 'Good understanding, but needs better time management.' },
      { id: 2, title: 'Algorithm Practice', notes: 'Solid problem-solving skills, keep practicing.' },
      { id: 3, title: 'Behavioral Interview', notes: 'Work on communication skills and storytelling.' },
    ],
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-8">Interview Dashboard</h1>

      <div className="mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">{data.newInterview.title}</h2>
          <p className="text-md mb-4">{data.newInterview.description}</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Add New</button>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Previous Mock Interviews</h2>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-gray-200">ID</th>
              <th className="py-2 px-4 border-b border-gray-200">Title</th>
              <th className="py-2 px-4 border-b border-gray-200">Date</th>
              <th className="py-2 px-4 border-b border-gray-200">Result</th>
            </tr>
          </thead>
          <tbody>
            {data.previousInterviews.map(interview => (
              <tr key={interview.id}>
                <td className="py-2 px-4 border-b border-gray-200">{interview.id}</td>
                <td className="py-2 px-4 border-b border-gray-200">{interview.title}</td>
                <td className="py-2 px-4 border-b border-gray-200">{interview.date}</td>
                <td className="py-2 px-4 border-b border-gray-200">{interview.result}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Interview Feedback</h2>
        <ul className="space-y-4">
          {data.feedback.map(feedback => (
            <li key={feedback.id} className="bg-white p-4 rounded-lg shadow">
              <strong>{feedback.title}:</strong> {feedback.notes}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;

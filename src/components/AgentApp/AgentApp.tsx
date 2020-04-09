import React from 'react';

export default function AgentApp() {
  const data = [
    { id: 1, name: 'Sameer Segal', otp: 1232 },
    { id: 2, name: 'Aparna V', otp: 2462 },
    { id: 3, name: 'Prateek S', otp: 1122 },
    { id: 4, name: 'Prateek A', otp: 3344 },
  ];

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Link</th>
            <th>Updated At</th>
          </tr>
        </thead>
        <tbody>
          {data.map(row => (
            <tr key={row.id}>
              <td>{row.name}</td>
              <td>{row.otp}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

import { useGuest } from "../context/GuestContext";

export default function GuestList() {
  const { guests } = useGuest();

  const guestRows = guests.map((guest) => (
    <tr key={guest.id}>
      <td>{guest.name}</td>
      <td>{guest.email}</td>
      <td>{guest.phone}</td>
    </tr>
  ));

  return (
    <section className="guest-list">
      <h1>Guest List</h1>

      <table className="guest-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>

        <tbody>{guestRows}</tbody>
      </table>

      <p>Select a guest to see more details</p>
    </section>
  );
}

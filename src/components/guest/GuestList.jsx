import { useGuest } from "../../context/GuestContext";
import "./guest.css";

export default function GuestList() {
  const { guests, setSelectedGuest, isLoading, setIsLoading } = useGuest();

  const guestRows = guests.map((guest) => (
    <tr
      key={guest.id}
      onClick={() => {
        setSelectedGuest(guest);
        setIsLoading(true);
      }}
    >
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

        <tbody>
          {isLoading ? (
            <tr>
              <td className="loading-msg" colSpan={3}>
                Loading...
              </td>
            </tr>
          ) : (
            guestRows
          )}
        </tbody>
      </table>

      {!isLoading && <p>Select a guest to see more details</p>}
    </section>
  );
}

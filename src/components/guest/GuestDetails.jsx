import { useGuest } from "../../context/GuestContext";
import "./guest.css";

export default function GuestDetails() {
  const { selectedGuest, setSelectedGuest } = useGuest();

  return (
    <section className="guest-details">
      <h1>Guest Details</h1>

      <section className="guest-info">
        <p>
          <strong>Name:</strong> {selectedGuest.name}
        </p>
        <p>
          <strong>Email:</strong> {selectedGuest.email}
        </p>
        <p>
          <strong>Phone: </strong>
          {selectedGuest.phone}
        </p>
        <p>
          <strong>Bio: </strong> {selectedGuest.bio}
        </p>
        <p>
          <strong>Job: </strong>
          {selectedGuest.job}
        </p>
      </section>

      <button
        className="btn back-to-guests"
        onClick={() => setSelectedGuest(null)}
      >
        Back to all guests
      </button>
    </section>
  );
}

import { useGuest } from "../../context/GuestContext";
import useGuestDetails from "../../hooks/useGuestDetails";
import "./guest.css";

export default function GuestDetails() {
  const {
    selectedGuest,
    setSelectedGuest,
    guest,
    setGuest,
    isLoading,
    setIsLoading,
    error,
    setError,
  } = useGuest();

  useGuestDetails(selectedGuest, setGuest, setIsLoading, setError);

  if (error) return <p>Sorry! {error.message}</p>;

  return (
    <section className="guest-details">
      <h1>Guest Details</h1>

      {isLoading ? (
        <p className="loading-msg">Loading...</p>
      ) : (
        <section className="guest-info">
          <p>
            <strong>Name:</strong> {guest?.name}
          </p>
          <p>
            <strong>Email:</strong> {guest?.email}
          </p>
          <p>
            <strong>Phone: </strong>
            {guest?.phone}
          </p>
          <p>
            <strong>Bio: </strong> {guest?.bio}
          </p>
          <p>
            <strong>Job: </strong>
            {guest?.job}
          </p>
        </section>
      )}

      <button
        className="btn back-to-guests"
        onClick={() => {
          setSelectedGuest(null);
          setGuest(null);
        }}
      >
        Back to all guests
      </button>
    </section>
  );
}

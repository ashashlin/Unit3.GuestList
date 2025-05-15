import { createContext, useContext, useState } from "react";
import useGuests from "../hooks/useGuests";
import useGuestDetails from "../hooks/useGuestDetails";

const GuestContext = createContext();

export function GuestProvider({ children }) {
  const [guests, setGuests] = useState([]);
  const [selectedGuest, setSelectedGuest] = useState(null);
  const [guest, setGuest] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useGuests(setGuests, setIsLoading);
  useGuestDetails(selectedGuest, setGuest, setIsLoading);

  const value = {
    guests,
    selectedGuest,
    setSelectedGuest,
    guest,
    setGuest,
    isLoading,
    setIsLoading,
  };

  return (
    <GuestContext.Provider value={value}>{children}</GuestContext.Provider>
  );
}

export function useGuest() {
  const value = useContext(GuestContext);

  if (!value) throw Error("useGame must be used within a GameContextProvider");

  return value;
}

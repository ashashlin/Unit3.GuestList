import { createContext, useContext, useState } from "react";
import useGuests from "../hooks/useGuests";

const GuestContext = createContext();

export function GuestProvider({ children }) {
  const [guests, setGuests] = useState([]);
  const [selectedGuest, setSelectedGuest] = useState(null);

  useGuests(setGuests);

  const value = { guests, selectedGuest };

  return (
    <GuestContext.Provider value={value}>{children}</GuestContext.Provider>
  );
}

export function useGuest() {
  const value = useContext(GuestContext);

  if (!value) throw Error("useGame must be used within a GameContextProvider");

  return value;
}

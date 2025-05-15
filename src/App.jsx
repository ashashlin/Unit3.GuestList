import { useGuest } from "./context/GuestContext";
import GuestList from "./components/GuestList";
import GuestDetails from "./components/GuestDetails";

export default function App() {
  const { selectedGuest } = useGuest();

  return !selectedGuest ? <GuestList /> : <GuestDetails />;
}

import { useGuest } from "./context/GuestContext";
import GuestList from "./components/guest/GuestList";
import GuestDetails from "./components/guest/GuestDetails";

export default function App() {
  const { selectedGuest } = useGuest();

  return !selectedGuest ? <GuestList /> : <GuestDetails />;
}

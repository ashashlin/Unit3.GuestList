import { useEffect } from "react";

export default function useGuests(
  selectedGuest,
  setGuest,
  setIsLoading,
  setError
) {
  const baseUrl = "https://fsa-crud-2aa9294fe819.herokuapp.com/api";
  const cohort = "/2504-FTB-ET-WEB-FT";
  const resource = "/guests";
  const api = baseUrl + cohort + resource;

  useEffect(() => {
    const getGuests = async () => {
      try {
        if (!selectedGuest) return;

        const res = await fetch(api + `/${selectedGuest.id}`);
        if (!res.ok) throw Error(`Server error at ${api}/${selectedGuest.id}.`);
        const data = await res.json();
        setGuest(data.data);
      } catch (error) {
        console.error(error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    getGuests();
  }, []);
}

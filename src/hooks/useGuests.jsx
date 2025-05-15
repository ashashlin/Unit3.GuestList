import { useEffect } from "react";

export default function useGuests(setGuests) {
  const baseUrl = "https://fsa-crud-2aa9294fe819.herokuapp.com/api";
  const cohort = "/2504-FTB-ET-WEB-FT";
  const resource = "/guests";
  const api = baseUrl + cohort + resource;

  useEffect(() => {
    const getGuests = async () => {
      try {
        const res = await fetch(api);
        const data = await res.json();
        setGuests(data.data);
      } catch (error) {
        console.log(error);
      }
    };

    getGuests();
  }, []);
}

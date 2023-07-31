import { useState, useEffect } from "react";
import useSSSPickStore from "@/stores/surveys/useSSSPickStore";
import useInstantWinStore from "@/stores/surveys/useInstantWinStore";
import useTimerHook from "@/Hooks/card/useTimerHook";

const useCardlistHook = (contentType: any) => {
  let useStore;

  if (contentType === "ssspick") {
    useStore = useSSSPickStore;
  }
  else { // if (contentType === "instantwin") 
    useStore = useInstantWinStore;
  }

  const store = useStore();
  const { surveys } = store;
  const initialCards = surveys.slice(0, 5);
  const [cards, setCards] = useState(initialCards);

  useEffect(() => {
    setCards(initialCards);
    const timer = setInterval(() => {
      setCards((prev) => {
        const data = prev.map((prev: any) => {
          return { ...prev, remainTime: useTimerHook(prev.endTime) };
        });
        return data;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return cards;
};

export default useCardlistHook;
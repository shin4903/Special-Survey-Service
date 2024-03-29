import Card from "@/components/card";
import React from "react";
import { StyledList } from "./Cardlist.styled";
import useInstantListHook from "@/Hooks/listpage/useInstantListHook";
import { useRouter } from "next/navigation";
const InstantCardlist = () => {
  const { sortedSurveys } = useInstantListHook();
  const router = useRouter();
  return (
    <StyledList>
      {sortedSurveys.map((survey: any, index: any) => (
        <div key={index} style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ width: "220px", height: "323px" }}>
            <Card
              title={survey.title}
              nickname={survey.writerName}
              type={survey.surveyCategoryType}
              giveaways={survey.surveyGiveaways[0].giveawayResponse.giveawayType}
              probability={survey.winningPercent + "%"}
              remaintime={survey.remainTime || ""}
              endtime={survey.endTime}
              onClick={() => router.push("/surveydetail/" + survey.id)}
            />
          </div>
        </div>
      ))}
    </StyledList>
  );
};

export default InstantCardlist;

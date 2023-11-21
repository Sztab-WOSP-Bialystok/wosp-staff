import { TabElement } from "../../components/Tabs/types";
import questions from "public/info/faq-data.json";

import Questions from "./Questions";
import { QuestionGroup } from "./types";
import VolounteerTabHeader from "./volounteerTabHeader";

export const faqTabs: TabElement[] = questions.map(
  ({ name, questions }: QuestionGroup): TabElement => ({
    name,
    id: name,
    content: (
      <>
        {name === "CATEGORY_1" ? (
          <VolounteerTabHeader></VolounteerTabHeader>
        ) : (
          <></>
        )}
        <Questions questions={questions} />
      </>
    ),
  })
);

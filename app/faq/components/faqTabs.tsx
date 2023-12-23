import { TabElement } from "../../components/Tabs/types";
import questions from "../../../public/info/faq-data.json";

import Questions from "./Questions";
import { QuestionGroup } from "./types";
import VolounteerTabHeader from "./volounteerTabHeader";
import { FAQ_CATEGORY_KEYS } from "../../consts/faq-category-keys.const";

export const faqTabs: TabElement[] = questions.map(
  ({ name, questions }: QuestionGroup): TabElement => ({
    name,
    id: name,
    content: (
      <>
        {name === FAQ_CATEGORY_KEYS.VOLOUNTEER ? (
          <VolounteerTabHeader></VolounteerTabHeader>
        ) : (
          <></>
        )}
        <Questions questions={questions} />
      </>
    ),
  })
);

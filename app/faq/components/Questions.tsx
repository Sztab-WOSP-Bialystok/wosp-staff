import {FC, Fragment} from "react";
import {Question} from "./types";
import {Row, Stack} from "react-bootstrap";

type QuestionsProps = {
    questions: Question[]
}

const Questions: FC<QuestionsProps> = ({ questions }: QuestionsProps) => {

    return <Stack gap={2}>
        {questions.map(({ question, answer }, index) => (
            <div key={question + index} className="my-1 mx-0 mx-sm-3">
                <p><strong>{question}</strong></p>
                <p>{answer}</p>
            </div>
        ))}
    </Stack>
}

export default Questions

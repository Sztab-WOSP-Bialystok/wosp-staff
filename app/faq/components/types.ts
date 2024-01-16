export type Question = {
    question: string
    answer: string
}

export type QuestionGroup = {
    key: string,
    name: string
    questions: Question[]
}
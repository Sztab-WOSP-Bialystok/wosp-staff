export type Question = {
    question: string
    answer: string
}

export type QuestionGroup = {
    name: string
    questions: Question[]
}
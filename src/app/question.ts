export interface Question {
    id: number,
    text: string,
    image?: string,
    choices: Choice[],
}

export interface Choice {
    id: number,
    text: string,
    isAnswer: boolean,
}
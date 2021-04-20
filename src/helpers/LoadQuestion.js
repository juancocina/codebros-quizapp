export const loadQuestion = async (
    amount = 10,
    category = 18,
    difficulty = 'medium',
    type = 'multiple'
) => {
    const url = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`
    try {
        const res = await fetch(url)
        const result = await res.json()
        console.log(url)
        return cnvtQfromApi(result)
    } catch (err) { console.error(err) }
}

const cnvtQfromApi = Question => {
    return Question["results"].map(loadedQues => {
        const formattedQues = { question: loadedQues.question, answerOptions: [...loadedQues.incorrect_answers], }
        formattedQues.answer = Math.floor(Math.random() * 4)
        formattedQues.answerOptions.splice(formattedQues.answer, 0, loadedQues.correct_answer)
        return formattedQues
    })
}
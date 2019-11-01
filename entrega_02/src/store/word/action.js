
const updateWord = word =>
{
    console.log(word);
    return {
        type: "UPDATE_WORD",
        payload: word
    }
}

export default updateWord;
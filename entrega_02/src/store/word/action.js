
const updateWord = word =>
{
    console.log("WORD",word);
    return {
        type: "UPDATE_WORD",
        payload: word
    }
}

export default updateWord;
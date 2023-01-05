const charactersArray = ["Walter, White", "Jesse, Pinkman", "Gus, Fring", "Saul, Goodman", "Hank, Schrader"]

const charactersAge = [52, 27, 50, 48, 48]

export const getCharacter = (req, res) => {
  res.status(200).send({
    message: "Here are all the characters",
    characters: charactersArray,
    age: charactersAge
  });
}
export const postCharacter = (req, res) => {
  const character = req.body.character;
  charactersArray.push(character);
  res.status(201).send({
    message: "Character added successfully",
    characters: charactersArray,
    age: charactersAge
  });
}
export const getCharacterById = (req, res) => {
  const id = parseInt(req.params.id);
  res.status(200).send({
    message: "Here is the character you requested",
    character: charactersArray[id],
    age: charactersAge[id]
  }); 
}
export const deleteCharacter = (req, res) => {
  const id = parseInt(req.params.id);
  charactersArray.splice(id, 1);
  res.status(204).send({
    message: "Character deleted successfully",
    characters: charactersArray,
    age: charactersAge
  });
}
export const ACTION_NAME = 'SERACH_NAME';

const actionName = (data) => {
  return (
    { type: 'SERACH_NAME',
      payload: data[0]
    }
  )
}

function fetchCharacter(name) {
  return (dispatch) => {
    fetch(`https://anapioficeandfire.com/api/characters?name=${name}`)
      .then(response => response.json())
      .then(data => dispatch(actionName(data)))
  }
}

export default fetchCharacter;
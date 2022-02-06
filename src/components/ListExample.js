import React, { useState} from "react"
import styled from "styled-components";

const CartItem = styled.div `
  width:200px;
  height:250px;
  display: flex;
  background:gainsboro;
  position: relative;
  margin:1rem;
  
`

const RemoveButton = styled.button `
  position: absolute;
  right: 0;
  cursor:pointer;

  &:hover {
    background: red;
    transition: .4s;
  }
`

const RandomNumber = styled.h2 `
  width: 90%;
  font-size:3rem;
  display: flex;
  justify-content: center;
  align-items: center;

`

const CartItems = styled.div `
  display: flex;
  justify-content: flex-start;
  flex-wrap:wrap;
`

const AppContainer = styled.div `
  display: grid;
  grid-template-columns: 6fr 2fr;
`

const Instructions = styled.div `
  border:2px solid darkgray;
  overflow: scroll;
  height: 90vh;
  overflow-x:hidden;
`

const Button = styled.button `
  width: 100px;
  height: 30px;
  border-radius: 10px;
  margin:1rem;
  cursor: pointer;

  &:hover {
    background: antiquewhite;
    transition: .4s;
  }
`


const initialData = [];

const ListExample = () => {
    const [list, updateList] = useState(initialData);
    const [sortList, setSortList] = useState();

    
    const ListItem = ({ id,randomNumber, onRemoveClick }) => (

      
      <CartItem>
         <RandomNumber>{randomNumber}</RandomNumber>
        <RemoveButton onClick={() => onRemoveClick(id)}>X</RemoveButton>
        
      </CartItem>
    )

    const addItem = () => {
      const newList = [
        ...list,
        { id: list.length,randomNumber:Math.ceil(Math.random() * 100) }
      ];
      updateList(newList);
    };


    const sortItem = () => {
      const sortList = list
      const newSortList = sortList.sort((a, b) => (a.randomNumber > b.randomNumber) ? 1 : -1)
      setSortList(newSortList)
      console.log(newSortList)
      
    }

    const removeItem = id => {
      updateList(list.filter(item => item.id !== id));
    };

    
  
    return (
      <AppContainer>
        <div>
        <Button onClick={addItem}>Add</Button>
        <Button onClick={sortItem}>Sort</Button>
        <CartItems>
        {list.map(item => (
          <ListItem key={item.id} {...item} onRemoveClick={removeItem} />
        ))}
    
        </CartItems>
        
        </div>
           <Instructions>
        <h2>Instructions</h2>
        {list.map(({id,randomNumber}) => {
          return(
            <pre>id - {id} || number - {randomNumber}</pre>
          )
        })}
          </Instructions>
      </AppContainer>
    );
  };


  export default ListExample
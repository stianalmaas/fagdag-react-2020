import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../modules/todo/actions'
import styled from 'styled-components';
import StyledButton from '../components/button/Button'

const StyledInput = styled.input`
  padding: 4px 10px;
  margin: 4px;
`;

const AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <StyledInput ref={node => input = node} />
        <StyledButton type="submit">
          Add Todo
        </StyledButton>
      </form>
    </div>
  )
};

export default connect()(AddTodo);

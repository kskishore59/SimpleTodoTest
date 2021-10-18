import styled from 'styled-components'

export const TaskCont = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`

export const FirstPart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #131213;
  width: 40vw;
  height: 100%;
`
export const Heading = styled.h1`
  font-size: 20px;
  color: #f3aa4e;
  text-align: center;
  font-family: 'Roboto';
`

export const FormField = styled.form`
  display: flex;
  flex-direction: column;
`

export const LabelText = styled.label`
  color: white;
  font-weight: bold;
`

export const InputField = styled.input`
  padding: 10px;
  border: none;
  outline: none;
  width: 30%;
`

export const InputFieldSelect = styled.select`
  padding: 10px;
  border: none;
  outline: none;
  width: 30%;
`

export const OptionsList = styled.option`
  color: gray;
  font-size: 16px;
  text-align: start;
`

export const AddTaskButton = styled.button`
  background-color: #f3aa4e;
  border: none;
  outline: none;
  border-radius: 10px;
  padding: 10px;
  width: 100px;
  height: 40px;
  color: white;
`

export const SecondPart = styled.div`
  display: flex;
  flex-direction: column;
  background-color: black;
  width: 60vw;
  height: 100%;
`
export const SecondHead = styled.h1`
  color: white;
  font-weight: bold;
  font-size: 22px;
  font-family: 'Roboto';
`
export const TagBtnCont = styled.div`
  display: flex;
  align-items: center;
`

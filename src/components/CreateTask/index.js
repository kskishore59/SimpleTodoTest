import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import TaskField from '../TaskField'
import TagItem from '../TagItem'
import EmptyComp from '../EmptyView'

import {
  TaskCont,
  FirstPart,
  SecondPart,
  Heading,
  FormField,
  LabelText,
  InputField,
  InputFieldSelect,
  OptionsList,
  AddTaskButton,
  SecondHead,
  TagBtnCont,
} from './styledComponents'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

class CreateTask extends Component {
  state = {
    task: '',
    taskList: [],
    tagItem: '',
  }

  onChangeTaskInput = event => {
    this.setState({task: event.target.value})
  }

  onSelectTagItem = event => {
    this.setState({tagItem: event.target.value})
  }

  onAddTask = () => {
    const {task, tagItem} = this.state
    const newObject = {
      id: uuidv4(),
      task,
      tagItem,
    }
    this.setState(prev => ({taskList: [...prev.taskList, newObject]}))
  }

  onSelectTagItem = id => {
    const {taskList} = this.state

    const updatedList = taskList.filter(each => each.displayText === id)

    this.setState({taskList: updatedList})
  }

  renderTagItems = () => {
    const {taskList} = this.state
    return (
      <>
        {taskList.map(each => (
          <TaskField key={each.displayText} details={each} />
        ))}
      </>
    )
  }

  render() {
    const {task, taskList, tagItem} = this.state
    return (
      <TaskCont>
        <FirstPart>
          <Heading>Create a task!</Heading>
          <FormField>
            <LabelText htmlFor="input">Task</LabelText>
            <InputField
              type="text"
              placeholder="Enter the task here"
              onChange={this.onChangeTaskInput}
              value={task}
              id="input"
            />
            <LabelText id="select">Tags</LabelText>

            <select
              id="select"
              className="input"
              value={tagItem}
              onChange={this.onChangeOptionID}
            >
              {tagsList.map(eachOption => (
                <option key={eachOption.optionId} value={eachOption.optionId}>
                  {eachOption.displayText}
                </option>
              ))}
            </select>

            <AddTaskButton onClick={this.onAddTask}>Add Task</AddTaskButton>
          </FormField>
        </FirstPart>
        <SecondPart>
          <SecondHead>Tags</SecondHead>
          <TagBtnCont>
            {tagsList.map(eachItem => (
              <TagItem
                key={eachItem.optionId}
                tagData={eachItem}
                onSelectTagItem={this.onSelectTagItem}
              />
            ))}
          </TagBtnCont>
          <SecondHead>Tasks</SecondHead>
          {/* TaskField Component */}
          <ul>
            {taskList.length === 0 ? <EmptyComp /> : this.renderTagItems()}
          </ul>
        </SecondPart>
      </TaskCont>
    )
  }
}

export default CreateTask

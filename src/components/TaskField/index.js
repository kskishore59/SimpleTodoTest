import {TagContent, TaskItem, TagName} from './styledComponents'

const TaskField = props => {
  const {details} = props
  const {task, tagItem} = details
  return (
    <TagContent>
      <TaskItem>{task}</TaskItem>
      <TagName>{tagItem}</TagName>
    </TagContent>
  )
}

export default TaskField

import {TagBtnList} from './styledComponents'

const TagItem = props => {
  const {tagData, onSelectTagItem} = props
  const {displayText} = tagData
  const onSelectTag = () => {
    onSelectTagItem(displayText)
  }

  return (
    <li>
      <TagBtnList onClick={onSelectTag}>{displayText}</TagBtnList>
    </li>
  )
}
export default TagItem

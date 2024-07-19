import './index.css'

const EmojiCard = props => {
  const {emojiDetails, clickEmoji} = props
  const {emojiUrl, emojiName, id} = emojiDetails
  const onClickanImage = () => {
    clickEmoji(id)
  }
  return (
    <li>
      <button type="button" className="emoji-btn" onClick={onClickanImage}>
        <img src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}
export default EmojiCard

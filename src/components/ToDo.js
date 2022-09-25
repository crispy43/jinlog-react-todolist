const ToDo = ({
  isComplete, // boolean 타입, 완료한 To Do인지 아닌지 여부
	value,
  onClick
}) => {
  return (
    <div
      className="to-do"
      data-is-complete={isComplete} // 데이터를 보관하는 data-속성을 사용해서 CSS를 자동으로 다르게 적용
      onClick={onClick}
    >
      {/* isComplite이 true일때만 ✔️ 이모티콘 출력 */}
      <p>{isComplete && <span>&#10004;</span>}</p>
      <p>{value}</p>
    </div>
  )
}

export default ToDo;

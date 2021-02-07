import './index.scss';

export default function EditorRight({ list }) {
  return (
    <div className="c-editor-right">
      <div>{list.label}</div>
      <div>{list.videoUrl}</div>
      <div>{list.appBackgroundColor}</div>
      <div>{list.backgroundListColor}</div>
      <div>{list.fontListColor}</div>
      <div>{JSON.stringify(list.toDos)}</div>
    </div>
  );
}

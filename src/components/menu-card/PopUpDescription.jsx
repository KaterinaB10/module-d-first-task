import "./pop-up.css";

export function PopUpDescription(props) {
  return props.trigger ? (
    <div className="pop-up-container hide">{props.children}</div>
  ) : (
    ""
  );
}

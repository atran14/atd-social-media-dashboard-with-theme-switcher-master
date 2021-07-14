import "./ToggleButton.scss";

export default function ToggleButton({ handler }: {handler: () => void}) {
  return (
    <div className="toggle-container__the-toggle">
      <input type="checkbox" name="Dark Theme" id="dark-theme-toggler" onClick={handler}/>
      <label htmlFor="dark-theme-toggler" />
    </div>
  )
}

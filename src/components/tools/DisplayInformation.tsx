import './displayInformation.scss'
import ToggleDisplayView from "./buttons/ToggleDisplayView";
import ItemsFoundCounter from "./ItemsFoundCounter";
import './buttons/buttons.scss'

const DisplayInformation = () => {
  return (
    <div className="display-information-container">
      <span className="display-information-span">
        Shows found:
        <ItemsFoundCounter />
      </span>
      <ToggleDisplayView />
    </div>
  )
}

export default DisplayInformation

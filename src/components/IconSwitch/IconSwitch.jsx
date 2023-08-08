import './IconSwitch.css';

export const IconSwitch = ({ icon, onSwitch }) => {
  return (
    <div className='switch-btn' >
      <button className='material-icons' onClick = { onSwitch }>{ icon }</button>
    </div>
  )
}

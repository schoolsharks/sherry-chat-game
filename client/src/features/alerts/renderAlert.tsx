import Alert1 from './components/Alert1'
import Alert2 from './components/Alert2'

const renderAlert = (alert:number,onClose:()=>void) => {
  switch (alert) {
    case 1:
      return <Alert1 handleContinue={onClose}/>
    case 2:
      return <Alert2 handleContinue={onClose}/>
    default:
      return null
  }
}

export default renderAlert

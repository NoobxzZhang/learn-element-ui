// basic
import Button from '@/components/basic/button/button/index.js'
import ButtonGroup from '@/components/basic/button/button-group/index.js'
import Row from '@/components/basic/layout/row/index.js'
import Col from '@/components/basic/layout/col/index.js'

// form
import Radio from '@/components/form/radio/index.js'
import RadioGroup from '@/components/form/radio-group/index.js'
import RadioButton from '@/components/form/radio-button/index.js'

const components = [Button, ButtonGroup, Row, Col, Radio, RadioGroup, RadioButton]

const install = (Vue, opt = {}) => {
  components.map(component => {
    Vue.component(component.name, component)
  })
}

export const a = {
  install,
  Button,
  ButtonGroup,
  Row,
  Col,
  Radio,
  RadioGroup,
  RadioButton
}
export default a

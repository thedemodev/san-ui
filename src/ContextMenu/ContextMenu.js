import React, { useRef } from 'react'
import cx from 'classnames'
import Modal from '../Modal'
import TooltipContent from '../Tooltip/TooltipContent'
import styles from './ContextMenu.module.scss'

const ContextMenu = ({
  trigger,
  forwardedRefPropName,
  passOpenStateAs,
  children,
  onClose,
  onOpen,
  open,
  defaultOpen,
  classes,
  ...props
}) => {
  const triggerRef = useRef(null)

  const ref = typeof trigger.type !== 'string' ? forwardedRefPropName : 'ref'

  return (
    <Modal
      onClose={onClose}
      onOpen={onOpen}
      trigger={React.cloneElement(trigger, {
        [ref]: triggerRef
      })}
      passOpenStateAs={passOpenStateAs}
      open={open}
      defaultOpen={defaultOpen}
      as={TooltipContent}
      modalProps={{
        triggerRef,
        ...props
      }}
      classes={{
        ...classes,
        wrapper: cx(styles.wrapper, classes.wrapper),
        modal: cx(styles.menu, classes.menu),
        bg: cx(styles.bg, classes.bg)
      }}
    >
      {children}
    </Modal>
  )
}

ContextMenu.defaultProps = {
  onOpen: () => {},
  onClose: () => {},
  defaultOpen: false,
  align: 'center',
  position: 'top',
  forwardedRefPropName: 'forwardedRef',
  offsetX: 10,
  offsetY: 10,
  viewportOffset: 5,
  classes: {
    tooltip: '',
    bg: ''
  }
}

export default ContextMenu

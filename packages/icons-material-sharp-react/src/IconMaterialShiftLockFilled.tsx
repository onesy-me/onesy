import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShiftLockFilled = (props: IIcon) => {

  return (
    <Icon
      name='ShiftLockFilled'

      short_name='ShiftLock'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-240v-200H120l360-440 360 440H640v200H320ZM160-80v-80h640v80H160Z"/>
    </Icon>
  );
};

IconMaterialShiftLockFilled.displayName = 'OnesyIconMaterialShiftLockFilled';

export default IconMaterialShiftLockFilled;

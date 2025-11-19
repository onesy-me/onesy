import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShiftLock = (props: IIcon) => {

  return (
    <Icon
      name='ShiftLock'

      short_name='ShiftLock'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-240v-200H120l360-440 360 440H640v200H320Zm80-80h160v-200h111L480-754 289-520h111v200Zm80-217ZM160-80v-80h640v80H160Z"/>
    </Icon>
  );
};

IconMaterialShiftLock.displayName = 'OnesyIconMaterialShiftLock';

export default IconMaterialShiftLock;

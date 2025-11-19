import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShiftFilled = (props: IIcon) => {

  return (
    <Icon
      name='ShiftFilled'

      short_name='Shift'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-120v-320H120l360-440 360 440H640v320H320Z"/>
    </Icon>
  );
};

IconMaterialShiftFilled.displayName = 'OnesyIconMaterialShiftFilled';

export default IconMaterialShiftFilled;

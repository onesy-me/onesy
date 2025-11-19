import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBatteryErrorFilled = (props: IIcon) => {

  return (
    <Icon
      name='BatteryErrorFilled'

      short_name='BatteryError'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m656-80-56-56 84-84-84-84 56-56 84 84 84-84 56 56-83 84 83 84-56 56-84-83-84 83Zm-376 0v-720h120v-80h160v80h120v348q-79 21-129 85.5T501-219q0 38 11 73t33 66H280Z"/>
    </Icon>
  );
};

IconMaterialBatteryErrorFilled.displayName = 'OnesyIconMaterialBatteryErrorFilled';

export default IconMaterialBatteryErrorFilled;

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEmergencyFilled = (props: IIcon) => {

  return (
    <Icon
      name='EmergencyFilled'

      short_name='Emergency'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M410-120v-238L204-239l-70-121 206-120-206-119 70-121 206 119v-239h140v239l206-119 70 121-206 119 206 120-70 121-206-119v238H410Z"/>
    </Icon>
  );
};

IconMaterialEmergencyFilled.displayName = 'OnesyIconMaterialEmergencyFilled';

export default IconMaterialEmergencyFilled;

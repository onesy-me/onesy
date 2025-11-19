import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAirplayFilled = (props: IIcon) => {

  return (
    <Icon
      name='AirplayFilled'

      short_name='Airplay'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m240-120 240-240 240 240H240ZM80-200v-640h800v640H760L480-480 200-200H80Z"/>
    </Icon>
  );
};

IconMaterialAirplayFilled.displayName = 'OnesyIconMaterialAirplayFilled';

export default IconMaterialAirplayFilled;

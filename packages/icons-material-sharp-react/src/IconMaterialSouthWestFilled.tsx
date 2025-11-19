import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSouthWestFilled = (props: IIcon) => {

  return (
    <Icon
      name='SouthWestFilled'

      short_name='SouthWest'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-200v-400h80v264l464-464 56 56-464 464h264v80H200Z"/>
    </Icon>
  );
};

IconMaterialSouthWestFilled.displayName = 'OnesyIconMaterialSouthWestFilled';

export default IconMaterialSouthWestFilled;

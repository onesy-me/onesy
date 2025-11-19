import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSouthFilled = (props: IIcon) => {

  return (
    <Icon
      name='SouthFilled'

      short_name='South'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80 200-360l56-56 184 183v-647h80v647l184-184 56 57L480-80Z"/>
    </Icon>
  );
};

IconMaterialSouthFilled.displayName = 'OnesyIconMaterialSouthFilled';

export default IconMaterialSouthFilled;

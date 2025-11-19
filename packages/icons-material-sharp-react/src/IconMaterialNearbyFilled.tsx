import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNearbyFilled = (props: IIcon) => {

  return (
    <Icon
      name='NearbyFilled'

      short_name='Nearby'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-304 304-480l176-176 176 176-176 176Zm0 255L49-480l431-431 431 431L480-49Zm0-143 288-288-288-288-288 288 288 288Z"/>
    </Icon>
  );
};

IconMaterialNearbyFilled.displayName = 'OnesyIconMaterialNearbyFilled';

export default IconMaterialNearbyFilled;

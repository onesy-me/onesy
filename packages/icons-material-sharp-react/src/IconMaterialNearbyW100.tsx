import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNearbyW100 = (props: IIcon) => {

  return (
    <Icon
      name='NearbyW100'

      short_name='Nearby'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-350 350-480l130-130 130 130-130 130Zm0 209L140-481l340-340 340 340-340 340Zm0-52 288-288-287-288-288 288 287 288Z"/>
    </Icon>
  );
};

IconMaterialNearbyW100.displayName = 'OnesyIconMaterialNearbyW100';

export default IconMaterialNearbyW100;

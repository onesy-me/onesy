import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTileMedium = (props: IIcon) => {

  return (
    <Icon
      name='TileMedium'

      short_name='TileMedium'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-200v-240h320v240H120Zm400 0v-240h320v240H520ZM120-520v-240h720v240H120Zm80 240h160v-80H200v80Zm400 0h160v-80H600v80Zm-320-40Zm400 0Z"/>
    </Icon>
  );
};

IconMaterialTileMedium.displayName = 'OnesyIconMaterialTileMedium';

export default IconMaterialTileMedium;

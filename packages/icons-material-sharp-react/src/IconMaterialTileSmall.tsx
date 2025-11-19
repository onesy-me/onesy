import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTileSmall = (props: IIcon) => {

  return (
    <Icon
      name='TileSmall'

      short_name='TileSmall'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-200v-240h320v240H120Zm400 0v-240h320v240H520Zm-320-80h160v-80H200v80Zm400 0h160v-80H600v80ZM120-520v-240h320v240H120Zm400 0v-240h320v240H520Zm-320-80h160v-80H200v80Zm80 280Zm400 0ZM280-640Z"/>
    </Icon>
  );
};

IconMaterialTileSmall.displayName = 'OnesyIconMaterialTileSmall';

export default IconMaterialTileSmall;

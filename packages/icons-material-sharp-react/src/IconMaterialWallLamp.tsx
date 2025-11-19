import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWallLamp = (props: IIcon) => {

  return (
    <Icon
      name='WallLamp'

      short_name='WallLamp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-240h80v240h-80Zm214-400h372l-72-240H406l-72 240Zm0 0h372-372Zm-94 320v-80h240v-160H226l120-400h348l120 400H560v240H240Z"/>
    </Icon>
  );
};

IconMaterialWallLamp.displayName = 'OnesyIconMaterialWallLamp';

export default IconMaterialWallLamp;

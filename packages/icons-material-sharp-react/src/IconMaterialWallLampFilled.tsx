import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWallLampFilled = (props: IIcon) => {

  return (
    <Icon
      name='WallLampFilled'

      short_name='WallLamp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-240h80v240h-80Zm120-80v-80h240v-160H226l120-400h348l120 400H560v240H240Z"/>
    </Icon>
  );
};

IconMaterialWallLampFilled.displayName = 'OnesyIconMaterialWallLampFilled';

export default IconMaterialWallLampFilled;

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWaterDamage = (props: IIcon) => {

  return (
    <Icon
      name='WaterDamage'

      short_name='WaterDamage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-240h400v-347L480-740 280-587v347Zm-80 80v-366L88-440l-47-63 439-337 440 336-48 64-112-86v366H200Zm280-160q33 0 56.5-23.5T560-400q0-27-15-57.5T480-560q-50 72-65 102.5T400-400q0 33 23.5 56.5T480-320Zm0-80Z"/>
    </Icon>
  );
};

IconMaterialWaterDamage.displayName = 'OnesyIconMaterialWaterDamage';

export default IconMaterialWaterDamage;

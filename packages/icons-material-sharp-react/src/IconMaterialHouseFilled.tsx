import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHouseFilled = (props: IIcon) => {

  return (
    <Icon
      name='HouseFilled'

      short_name='House'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-160v-366L88-440l-48-64 440-336 160 122v-82h120v174l160 122-48 64-112-86v366H560v-240H400v240H200Zm200-399h160q0-32-24-52.5T480-632q-32 0-56 20.5T400-559Z"/>
    </Icon>
  );
};

IconMaterialHouseFilled.displayName = 'OnesyIconMaterialHouseFilled';

export default IconMaterialHouseFilled;

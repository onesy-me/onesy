import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHandPackageFilled = (props: IIcon) => {

  return (
    <Icon
      name='HandPackageFilled'

      short_name='HandPackage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-520v-360h320v360H280Zm400 0v-360h200v360H680ZM320-120v-320h272q14 0 24 8t14 19q4 11 1.5 23T618-369l-59 49H400v60h180l162-134q22-16 46.5-20t48.5 2q24 6 45.5 20.5T919-354L639-120H320ZM80-80v-360h160v360H80Z"/>
    </Icon>
  );
};

IconMaterialHandPackageFilled.displayName = 'OnesyIconMaterialHandPackageFilled';

export default IconMaterialHandPackageFilled;

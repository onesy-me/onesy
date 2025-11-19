import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBusinessCenter = (props: IIcon) => {

  return (
    <Icon
      name='BusinessCenter'

      short_name='BusinessCenter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-120v-600h240v-160h320v160h240v600H80Zm320-600h160v-80H400v80Zm400 360H600v80H360v-80H160v160h640v-160Zm-360 0h80v-80h-80v80Zm-280-80h200v-80h240v80h200v-200H160v200Zm320 40Z"/>
    </Icon>
  );
};

IconMaterialBusinessCenter.displayName = 'OnesyIconMaterialBusinessCenter';

export default IconMaterialBusinessCenter;

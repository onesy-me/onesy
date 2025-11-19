import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialUpgrade = (props: IIcon) => {

  return (
    <Icon
      name='Upgrade'

      short_name='Upgrade'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-160v-80h400v80H280Zm160-160v-327L336-544l-56-56 200-200 200 200-56 56-104-103v327h-80Z"/>
    </Icon>
  );
};

IconMaterialUpgrade.displayName = 'OnesyIconMaterialUpgrade';

export default IconMaterialUpgrade;

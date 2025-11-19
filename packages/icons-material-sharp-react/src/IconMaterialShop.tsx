import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShop = (props: IIcon) => {

  return (
    <Icon
      name='Shop'

      short_name='Shop'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-120v-600h240v-160h320v160h240v600H80Zm80-80h640v-440H160v440Zm240-520h160v-80H400v80ZM160-200v-440 440Zm220-40 280-180-280-180v360Z"/>
    </Icon>
  );
};

IconMaterialShop.displayName = 'OnesyIconMaterialShop';

export default IconMaterialShop;

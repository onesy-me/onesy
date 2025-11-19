import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShopFilled = (props: IIcon) => {

  return (
    <Icon
      name='ShopFilled'

      short_name='Shop'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-120v-600h240v-160h320v160h240v600H80Zm320-600h160v-80H400v80Zm-20 480 280-180-280-180v360Z"/>
    </Icon>
  );
};

IconMaterialShopFilled.displayName = 'OnesyIconMaterialShopFilled';

export default IconMaterialShopFilled;

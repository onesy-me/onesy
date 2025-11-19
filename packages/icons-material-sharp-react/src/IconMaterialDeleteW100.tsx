import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDeleteW100 = (props: IIcon) => {

  return (
    <Icon
      name='DeleteW100'

      short_name='Delete'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M252-172v-548h-40v-28h148v-28h240v28h148v28h-40v548H252Zm28-28h400v-520H280v520Zm122-80h28v-360h-28v360Zm128 0h28v-360h-28v360ZM280-720v520-520Z"/>
    </Icon>
  );
};

IconMaterialDeleteW100.displayName = 'OnesyIconMaterialDeleteW100';

export default IconMaterialDeleteW100;

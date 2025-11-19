import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFax = (props: IIcon) => {

  return (
    <Icon
      name='Fax'

      short_name='Fax'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-120v-520h240v40-200h400v200h160v440H320v40H80Zm80-80h80v-360h-80v360Zm240-400h240v-120H400v120Zm-80 360h480v-280H320v280Zm40-40h160v-200H360v200Zm-40 40v-280 280Zm240-160h80v-80h-80v80Zm120 0h80v-80h-80v80ZM560-280h80v-80h-80v80Zm120 0h80v-80h-80v80Z"/>
    </Icon>
  );
};

IconMaterialFax.displayName = 'OnesyIconMaterialFax';

export default IconMaterialFax;

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPointOfSale = (props: IIcon) => {

  return (
    <Icon
      name='PointOfSale'

      short_name='PointOfSale'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-640v-240h560v240H200Zm80-80h400v-80H280v80ZM80-80v-120h800v120H80Zm0-160 160-360h480l160 360H80Zm240-80h80v-40h-80v40Zm0-80h80v-40h-80v40Zm0-80h80v-40h-80v40Zm120 160h80v-40h-80v40Zm0-80h80v-40h-80v40Zm0-80h80v-40h-80v40Zm120 160h80v-40h-80v40Zm0-80h80v-40h-80v40Zm0-80h80v-40h-80v40Z"/>
    </Icon>
  );
};

IconMaterialPointOfSale.displayName = 'OnesyIconMaterialPointOfSale';

export default IconMaterialPointOfSale;

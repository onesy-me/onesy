import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialApartmentFilled = (props: IIcon) => {

  return (
    <Icon
      name='ApartmentFilled'

      short_name='Apartment'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-560h160v-160h400v320h160v400H520v-160h-80v160H120Zm80-80h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 320h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 480h80v-80h-80v80Zm0-160h80v-80h-80v80Z"/>
    </Icon>
  );
};

IconMaterialApartmentFilled.displayName = 'OnesyIconMaterialApartmentFilled';

export default IconMaterialApartmentFilled;

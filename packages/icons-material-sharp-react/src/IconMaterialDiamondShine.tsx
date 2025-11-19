import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDiamondShine = (props: IIcon) => {

  return (
    <Icon
      name='DiamondShine'

      short_name='DiamondShine'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80 120-436l200-244h320l200 244L480-80ZM183-680l-85-85 57-56 85 85-57 56Zm257-80v-120h80v120h-80Zm335 80-57-57 85-85 57 57-85 85ZM480-192l210-208H270l210 208ZM358-600l-99 120h442l-99-120H358Z"/>
    </Icon>
  );
};

IconMaterialDiamondShine.displayName = 'OnesyIconMaterialDiamondShine';

export default IconMaterialDiamondShine;

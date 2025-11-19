import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDiamondShineFilled = (props: IIcon) => {

  return (
    <Icon
      name='DiamondShineFilled'

      short_name='DiamondShine'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m183-680-85-85 57-56 85 85-57 56Zm257-80v-120h80v120h-80Zm335 80-57-57 85-85 57 57-85 85ZM480-80 157-400h646L480-80ZM320-680h320l164 200H156l164-200Z"/>
    </Icon>
  );
};

IconMaterialDiamondShineFilled.displayName = 'OnesyIconMaterialDiamondShineFilled';

export default IconMaterialDiamondShineFilled;

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFitScreenW100Filled = (props: IIcon) => {

  return (
    <Icon
      name='FitScreenW100Filled'

      short_name='FitScreen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M800-600v-120H680v-28h148v148h-28Zm-668 0v-148h148v28H160v120h-28Zm548 388v-28h120v-120h28v148H680Zm-548 0v-148h28v120h120v28H132Zm152-152v-232h392v232H284Z"/>
    </Icon>
  );
};

IconMaterialFitScreenW100Filled.displayName = 'OnesyIconMaterialFitScreenW100Filled';

export default IconMaterialFitScreenW100Filled;

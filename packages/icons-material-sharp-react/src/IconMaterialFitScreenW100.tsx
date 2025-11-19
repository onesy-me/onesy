import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFitScreenW100 = (props: IIcon) => {

  return (
    <Icon
      name='FitScreenW100'

      short_name='FitScreen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M800-600v-120H680v-28h148v148h-28Zm-668 0v-148h148v28H160v120h-28Zm548 388v-28h120v-120h28v148H680Zm-548 0v-148h28v120h120v28H132Zm152-152v-232h392v232H284Zm28-28h336v-176H312v176Zm0 0v-176 176Z"/>
    </Icon>
  );
};

IconMaterialFitScreenW100.displayName = 'OnesyIconMaterialFitScreenW100';

export default IconMaterialFitScreenW100;

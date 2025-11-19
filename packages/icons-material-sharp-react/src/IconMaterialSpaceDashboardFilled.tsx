import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSpaceDashboardFilled = (props: IIcon) => {

  return (
    <Icon
      name='SpaceDashboardFilled'

      short_name='SpaceDashboard'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-720h320v720H120Zm400-440v-280h320v280H520Zm320 440H520v-360h320v360Z"/>
    </Icon>
  );
};

IconMaterialSpaceDashboardFilled.displayName = 'OnesyIconMaterialSpaceDashboardFilled';

export default IconMaterialSpaceDashboardFilled;

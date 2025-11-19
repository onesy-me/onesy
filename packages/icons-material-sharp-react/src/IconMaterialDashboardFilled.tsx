import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDashboardFilled = (props: IIcon) => {

  return (
    <Icon
      name='DashboardFilled'

      short_name='Dashboard'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M520-600v-240h320v240H520ZM120-440v-400h320v400H120Zm400 320v-400h320v400H520Zm-400 0v-240h320v240H120Z"/>
    </Icon>
  );
};

IconMaterialDashboardFilled.displayName = 'OnesyIconMaterialDashboardFilled';

export default IconMaterialDashboardFilled;

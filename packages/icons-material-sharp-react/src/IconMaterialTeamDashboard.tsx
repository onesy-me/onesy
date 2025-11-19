import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTeamDashboard = (props: IIcon) => {

  return (
    <Icon
      name='TeamDashboard'

      short_name='TeamDashboard'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-720h720v720H120Zm280-80v-240H200v240h200Zm80 0h280v-240H480v240ZM200-520h560v-240H200v240Z"/>
    </Icon>
  );
};

IconMaterialTeamDashboard.displayName = 'OnesyIconMaterialTeamDashboard';

export default IconMaterialTeamDashboard;

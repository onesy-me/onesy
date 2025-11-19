import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTeamDashboard = (props: IIcon) => {

  return (
    <Icon
      name='TeamDashboard'

      short_name='TeamDashboard'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm200-80v-240H200v240h200Zm80 0h280v-240H480v240ZM200-520h560v-240H200v240Z"/>
    </Icon>
  );
};

IconMaterialTeamDashboard.displayName = 'OnesyIconMaterialTeamDashboard';

export default IconMaterialTeamDashboard;

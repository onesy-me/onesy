import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTeamDashboardFilled = (props: IIcon) => {

  return (
    <Icon
      name='TeamDashboardFilled'

      short_name='TeamDashboard'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-120q-33 0-56.5-23.5T120-200v-250h280v330H200Zm280 0v-330h360v250q0 33-23.5 56.5T760-120H480ZM120-530v-230q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v230H120Z"/>
    </Icon>
  );
};

IconMaterialTeamDashboardFilled.displayName = 'OnesyIconMaterialTeamDashboardFilled';

export default IconMaterialTeamDashboardFilled;

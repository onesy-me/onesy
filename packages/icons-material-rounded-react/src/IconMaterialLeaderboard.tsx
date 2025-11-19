import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLeaderboard = (props: IIcon) => {

  return (
    <Icon
      name='Leaderboard'

      short_name='Leaderboard'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-200h160v-320H160v320Zm240 0h160v-560H400v560Zm240 0h160v-240H640v240Zm-560 0v-320q0-33 23.5-56.5T160-600h160v-160q0-33 23.5-56.5T400-840h160q33 0 56.5 23.5T640-760v240h160q33 0 56.5 23.5T880-440v240q0 33-23.5 56.5T800-120H160q-33 0-56.5-23.5T80-200Z"/>
    </Icon>
  );
};

IconMaterialLeaderboard.displayName = 'OnesyIconMaterialLeaderboard';

export default IconMaterialLeaderboard;

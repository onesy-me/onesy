import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLeaderboardFilled = (props: IIcon) => {

  return (
    <Icon
      name='LeaderboardFilled'

      short_name='Leaderboard'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-120v-480h220v480H80Zm290 0v-720h220v720H370Zm290 0v-400h220v400H660Z"/>
    </Icon>
  );
};

IconMaterialLeaderboardFilled.displayName = 'OnesyIconMaterialLeaderboardFilled';

export default IconMaterialLeaderboardFilled;

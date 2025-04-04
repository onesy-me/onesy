import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSportsBasketballW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsBasketballW100Filled'

      short_name='SportsBasketball'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M133-494q2-56 20-106t50-92q38 39 62 91.5T292-494H133Zm535 0q3-54 25-104.5t64-90.5q32 42 50 91.5T827-494H668ZM203-271q-32-42-49-90.5T133-466h159q-3 54-27 104.5T203-271Zm554 0q-42-40-64-90.5T668-466h159q-2 54-20 103.5T757-271ZM321-494q-3-62-29-117t-71-100q46-51 109.5-82T466-827v333H321Zm173 0v-333q72 3 135.5 34T739-711q-46 42-71.5 98.5T639-494H494Zm-28 361q-74-3-136.5-35T221-251q46-43 71.5-97.5T321-466h145v333Zm28 0v-333h145q3 63 28.5 119t71.5 98q-46 51-109.5 82T494-133Z"/>
    </Icon>
  );
});

IconMaterialSportsBasketballW100Filled.displayName = 'OnesyIconMaterialSportsBasketballW100Filled';

export default IconMaterialSportsBasketballW100Filled;

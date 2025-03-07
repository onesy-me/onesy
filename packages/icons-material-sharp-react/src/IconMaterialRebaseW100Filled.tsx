import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRebaseW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RebaseW100Filled'

      short_name='Rebase'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m430-107-19-20 99-99H307q-5 23-23.5 38.5T240-172q-28 0-48-20t-20-48q0-25 15.5-43.5T226-307v-346q-23-5-38.5-23.5T172-720q0-28 20-48t48-20q25 0 43.5 15.5T307-734h203l-100-99 20-20 133 133-133 133-20-20 100-99H307q-5 20-19 34t-34 19v346q20 5 34 19t19 34h202l-98-99 19-20 133 133-133 133Zm290-65q-28 0-48-20t-20-48q0-25 15.5-43.5T706-307v-346q-23-5-38.5-23.5T652-720q0-28 20-48t48-20q28 0 48 20t20 48q0 25-15.5 43.5T734-653v346q23 5 38.5 23.5T788-240q0 28-20 48t-48 20Z"/>
    </Icon>
  );
});

IconMaterialRebaseW100Filled.displayName = 'OnesyIconMaterialRebaseW100Filled';

export default IconMaterialRebaseW100Filled;

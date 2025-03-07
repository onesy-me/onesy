import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRebaseEditW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RebaseEditW100Filled'

      short_name='RebaseEdit'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M462-172v-85l295-296 84 82-299 299h-80Zm285-244 53-54-41-44-55 55 43 43ZM430-587l-20-20 100-99H307q-5 20-19 34t-34 19v346q23 5 38.5 23.5T308-240q0 28-20 48t-48 20q-28 0-48-20t-20-48q0-25 15.5-43.5T226-307v-346q-23-5-38.5-23.5T172-720q0-28 20-48t48-20q25 0 43.5 15.5T307-734h203l-100-99 20-20 133 133-133 133Zm290-201q28 0 48 20t20 48q0 28-20 48t-48 20q-28 0-48-20t-20-48q0-28 20-48t48-20Z"/>
    </Icon>
  );
});

IconMaterialRebaseEditW100Filled.displayName = 'OnesyIconMaterialRebaseEditW100Filled';

export default IconMaterialRebaseEditW100Filled;

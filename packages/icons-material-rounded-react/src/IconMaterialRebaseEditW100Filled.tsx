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
      <path d="M462-202v-43q0-6 1.5-11t6.5-10l266-266q4-4 9.5-6t10.5-2q5 0 11 1.5t10 5.5l40 39q5 5 7.5 10.5T828-472q1 6-1.5 11.5T819-450L550-181q-5 5-10 7t-11 2h-37q-13 0-21.5-8.5T462-202Zm285-214 53-54-41-44-55 55 43 43ZM240-172q-28 0-48-20t-20-48q0-25 15.5-43.5T226-307v-346q-23-5-38.5-23.5T172-720q0-28 20-48t48-20q25 0 43.5 15.5T307-734h203l-90-89q-5-4-5-9.5t5-10.5q5-5 10-5t10 5l102 102q9 9 9 21t-9 21L440-597q-4 4-9.5 4.5T420-597q-5-5-5-10t5-10l90-89H307q-5 20-19 34t-34 19v346q23 5 38.5 23.5T308-240q0 28-20 48t-48 20Zm480-616q28 0 48 20t20 48q0 28-20 48t-48 20q-28 0-48-20t-20-48q0-28 20-48t48-20Z"/>
    </Icon>
  );
});

IconMaterialRebaseEditW100Filled.displayName = 'OnesyIconMaterialRebaseEditW100Filled';

export default IconMaterialRebaseEditW100Filled;

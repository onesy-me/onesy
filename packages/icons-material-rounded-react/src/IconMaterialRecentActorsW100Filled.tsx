import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRecentActorsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RecentActorsW100Filled'

      short_name='RecentActors'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M170-252q-41 0-65.5-24.5T80-342v-276q0-41 24.5-65.5T170-708h276q41 0 65.5 24.5T536-618v276q0 41-24.5 65.5T446-252H170Zm-62-90q44-29 94-45.5T308-404q56 0 106 16.5t94 45.5v-276q0-26-18-44t-44-18H170q-26 0-44 18t-18 44v276Zm200.22-104q-39.22 0-66.72-27.28t-27.5-66.5q0-39.22 27.28-66.72t66.5-27.5q39.22 0 66.72 27.28t27.5 66.5q0 39.22-27.28 66.72t-66.5 27.5Zm385.74 194q-5.96 0-9.96-4.02-4-4.03-4-9.98v-428q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v428q0 5.95-4.04 9.98-4.03 4.02-10 4.02Zm172 0q-5.96 0-9.96-4.02-4-4.03-4-9.98v-428q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v428q0 5.95-4.04 9.98-4.03 4.02-10 4.02Z"/>
    </Icon>
  );
});

IconMaterialRecentActorsW100Filled.displayName = 'OnesyIconMaterialRecentActorsW100Filled';

export default IconMaterialRecentActorsW100Filled;

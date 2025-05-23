import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRecentActors = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RecentActors'

      short_name='RecentActors'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M40-200v-560h560v560H40Zm80-146q44-26 94-40t106-14q56 0 106 14t94 40v-334H120v334Zm200 26q-41 0-80 10t-74 30h308q-35-20-74-30t-80-10Zm0-110q-45 0-77.5-32.5T210-540q0-45 32.5-77.5T320-650q45 0 77.5 32.5T430-540q0 45-32.5 77.5T320-430Zm0-74q15 0 25.5-10.5T356-540q0-15-10.5-25.5T320-576q-15 0-25.5 10.5T284-540q0 15 10.5 25.5T320-504Zm360 304v-560h80v560h-80Zm160 0v-560h80v560h-80ZM320-540Zm0 260Z"/>
    </Icon>
  );
});

IconMaterialRecentActors.displayName = 'OnesyIconMaterialRecentActors';

export default IconMaterialRecentActors;

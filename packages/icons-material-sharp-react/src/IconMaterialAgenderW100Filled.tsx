import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAgenderW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AgenderW100Filled'

      short_name='Agender'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-172q-78 0-133-55t-55-133q0-75 50.5-128.5T466-547v-189h28v189q74 5 124 58.5T668-360q0 78-55 133t-133 55Zm0-28q63 0 108.5-42T639-346H321q5 62 50.5 104T480-200ZM321-374h318q-5-62-50.5-104T480-520q-63 0-108.5 42T321-374Z"/>
    </Icon>
  );
});

IconMaterialAgenderW100Filled.displayName = 'OnesyIconMaterialAgenderW100Filled';

export default IconMaterialAgenderW100Filled;

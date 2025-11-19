import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTileMediumW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TileMediumW100Filled'

      short_name='TileMedium'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-252v-178h258v178H172Zm358 0v-178h258v178H530ZM172-530v-178h616v178H172Z"/>
    </Icon>
  );
});

IconMaterialTileMediumW100Filled.displayName = 'OnesyIconMaterialTileMediumW100Filled';

export default IconMaterialTileMediumW100Filled;

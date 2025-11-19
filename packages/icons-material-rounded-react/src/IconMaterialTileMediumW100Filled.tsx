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
      <path d="M172-281.68v-118.71q0-12.61 8.63-21.11 8.62-8.5 21.37-8.5h198q12.75 0 21.38 8.53 8.62 8.53 8.62 21.15v118.71q0 12.61-8.62 21.11-8.63 8.5-21.38 8.5H202q-12.75 0-21.37-8.53-8.63-8.53-8.63-21.15Zm358 0v-118.71q0-12.61 8.63-21.11 8.62-8.5 21.37-8.5h198q12.75 0 21.38 8.53 8.62 8.53 8.62 21.15v118.71q0 12.61-8.62 21.11-8.63 8.5-21.38 8.5H560q-12.75 0-21.37-8.53-8.63-8.53-8.63-21.15Zm-358-278v-118.71q0-12.61 8.63-21.11 8.62-8.5 21.37-8.5h556q12.75 0 21.38 8.53 8.62 8.53 8.62 21.15v118.71q0 12.61-8.62 21.11-8.63 8.5-21.38 8.5H202q-12.75 0-21.37-8.53-8.63-8.53-8.63-21.15Z"/>
    </Icon>
  );
});

IconMaterialTileMediumW100Filled.displayName = 'OnesyIconMaterialTileMediumW100Filled';

export default IconMaterialTileMediumW100Filled;

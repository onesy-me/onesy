import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDockW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DockW100Filled'

      short_name='Dock'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M346-124v-28h268v28H346Zm-54-108v-616h376v616H292Zm28-122h320v-372H320v372Z"/>
    </Icon>
  );
});

IconMaterialDockW100Filled.displayName = 'OnesyIconMaterialDockW100Filled';

export default IconMaterialDockW100Filled;

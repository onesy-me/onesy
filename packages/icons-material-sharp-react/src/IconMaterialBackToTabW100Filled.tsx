import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBackToTabW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BackToTabW100Filled'

      short_name='BackToTab'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M396-464 160-700v160h-28v-208h208v28H179l237 236-20 20ZM132-212v-228h28v200h308v28H132Zm668-240v-268H440v-28h388v296h-28Zm28 100v140H568v-140h260Z"/>
    </Icon>
  );
});

IconMaterialBackToTabW100Filled.displayName = 'OnesyIconMaterialBackToTabW100Filled';

export default IconMaterialBackToTabW100Filled;

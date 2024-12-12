import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialThumbnailBarW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThumbnailBarW100Filled'

      short_name='ThumbnailBar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-212q-24.75 0-42.37-17.63Q132-247.25 132-272v-416q0-24.75 17.63-42.38Q167.25-748 192-748h128v536H192Zm156 0v-536h420q24.75 0 42.38 17.62Q828-712.75 828-688v416q0 24.75-17.62 42.37Q792.75-212 768-212H348Z"/>
    </Icon>
  );
});

IconMaterialThumbnailBarW100Filled.displayName = 'OnesyIconMaterialThumbnailBarW100Filled';

export default IconMaterialThumbnailBarW100Filled;

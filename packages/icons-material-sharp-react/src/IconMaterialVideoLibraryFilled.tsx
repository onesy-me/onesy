import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVideoLibraryFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoLibraryFilled'

      short_name='VideoLibrary'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m460-380 280-180-280-180v360ZM240-240v-640h640v640H240ZM80-80v-640h80v560h560v80H80Z"/>
    </Icon>
  );
});

IconMaterialVideoLibraryFilled.displayName = 'OnesyIconMaterialVideoLibraryFilled';

export default IconMaterialVideoLibraryFilled;

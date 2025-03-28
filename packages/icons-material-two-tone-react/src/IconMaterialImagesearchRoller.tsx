import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialImagesearchRoller = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ImagesearchRoller'

      short_name='ImagesearchRoller'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><rect enableBackground="new" height="2" opacity=".3" width="10" x="8" y="4"/><rect enableBackground="new" height="4" opacity=".3" width="2" x="12" y="17"/><path d="M20,7V3c0-0.55-0.45-1-1-1H7C6.45,2,6,2.45,6,3v1H4C2.9,4,2,4.9,2,6v4c0,1.1,0.9,2,2,2h8v3h-1c-0.55,0-1,0.45-1,1v6 c0,0.55,0.45,1,1,1h4c0.55,0,1-0.45,1-1v-6c0-0.55-0.45-1-1-1h-1v-3c0-1.1-0.9-2-2-2H4V6h2v1c0,0.55,0.45,1,1,1h12 C19.55,8,20,7.55,20,7z M8,4h10v2H8V4z M14,21h-2v-4h2V21z"/></g></g>
    </Icon>
  );
});

IconMaterialImagesearchRoller.displayName = 'OnesyIconMaterialImagesearchRoller';

export default IconMaterialImagesearchRoller;

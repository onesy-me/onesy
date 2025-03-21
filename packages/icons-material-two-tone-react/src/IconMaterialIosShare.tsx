import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialIosShare = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='IosShare'

      short_name='IosShare'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><path d="M18,8h-3v2h3v11H6V10h3V8H6c-1.11,0-2,0.89-2,2v11c0,1.1,0.89,2,2,2h12c1.1,0,2-0.9,2-2V10C20,8.89,19.1,8,18,8z"/><polygon points="11,16 13,16 13,5 16,5 12,1 8,5 11,5"/></g></g>
    </Icon>
  );
});

IconMaterialIosShare.displayName = 'OnesyIconMaterialIosShare';

export default IconMaterialIosShare;

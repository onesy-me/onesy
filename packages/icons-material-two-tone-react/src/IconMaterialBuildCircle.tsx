import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBuildCircle = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BuildCircle'

      short_name='BuildCircle'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><path d="M12,4c-4.41,0-8,3.59-8,8c0,4.41,3.59,8,8,8c4.41,0,8-3.59,8-8C20,7.59,16.41,4,12,4z" opacity=".3"/><path d="M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10C22,6.48,17.52,2,12,2z M12,20c-4.41,0-8-3.59-8-8 c0-4.41,3.59-8,8-8c4.41,0,8,3.59,8,8C20,16.41,16.41,20,12,20z"/><path d="M12.68,7.76c-1.11-1.11-2.79-1.3-4.1-0.59l2.35,2.35l-1.41,1.41L7.17,8.58c-0.71,1.32-0.52,2.99,0.59,4.1 c0.98,0.98,2.4,1.24,3.62,0.81l3.41,3.41c0.2,0.2,0.51,0.2,0.71,0l1.4-1.4c0.2-0.2,0.2-0.51,0-0.71l-3.41-3.41 C13.92,10.15,13.66,8.74,12.68,7.76z"/></g></g>
    </Icon>
  );
});

IconMaterialBuildCircle.displayName = 'OnesyIconMaterialBuildCircle';

export default IconMaterialBuildCircle;

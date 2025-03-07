import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAnalytics = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Analytics'

      short_name='Analytics'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect height="14" opacity=".3" width="14" x="5" y="5"/><g><rect fill="none" height="24" width="24"/><g><path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,19H5V5h14V19z"/><rect height="5" width="2" x="7" y="12"/><rect height="10" width="2" x="15" y="7"/><rect height="3" width="2" x="11" y="14"/><rect height="2" width="2" x="11" y="10"/></g></g></g>
    </Icon>
  );
});

IconMaterialAnalytics.displayName = 'OnesyIconMaterialAnalytics';

export default IconMaterialAnalytics;

import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAppRegistration = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AppRegistration'

      short_name='AppRegistration'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><rect height="4" width="4" x="10" y="4"/><rect height="4" width="4" x="4" y="16"/><rect height="4" width="4" x="4" y="10"/><rect height="4" width="4" x="4" y="4"/><rect height="4" width="4" x="16" y="4"/><polygon points="11,17.86 11,20 13.1,20 19.08,14.03 16.96,11.91"/><polygon points="14,12.03 14,10 10,10 10,14 12.03,14"/><path d="M20.85,11.56l-1.41-1.41c-0.2-0.2-0.51-0.2-0.71,0l-1.06,1.06l2.12,2.12l1.06-1.06C21.05,12.07,21.05,11.76,20.85,11.56z"/></g></g>
    </Icon>
  );
});

IconMaterialAppRegistration.displayName = 'OnesyIconMaterialAppRegistration';

export default IconMaterialAppRegistration;

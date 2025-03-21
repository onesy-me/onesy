import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewTimeline = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewTimeline'

      short_name='ViewTimeline'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><path d="M5,19h14V5H5V19z M12,7h6v2h-6V7z M9,11h6v2H9V11z M6,15h6v2H6V15z" opacity=".3"/><rect height="2" width="6" x="6" y="15"/><rect height="2" width="6" x="12" y="7"/><rect height="2" width="6" x="9" y="11"/><path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,19H5V5h14V19z"/></g></g>
    </Icon>
  );
});

IconMaterialViewTimeline.displayName = 'OnesyIconMaterialViewTimeline';

export default IconMaterialViewTimeline;

import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRemoveModerator = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RemoveModerator'

      short_name='RemoveModerator'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/><rect fill="none" height="24" width="24"/></g><g><g><path d="M6,11.09c0,4,2.55,7.7,6,8.83c1.17-0.38,2.24-1.07,3.14-1.95L6,8.83V11.09z M12,4.14L8.34,5.51l9.02,9.02c0.41-1.08,0.64-2.25,0.64-3.44v-4.7L12,4.14z" enableBackground="new" opacity=".3"/><path d="M12,4.14l6,2.25v4.7c0,1.19-0.23,2.36-0.64,3.44l1.51,1.51c0.72-1.53,1.13-3.22,1.13-4.95V5l-8-3L6.78,3.96l1.55,1.55 L12,4.14z M2.81,2.81L1.39,4.22L4,6.83v4.26c0,5.05,3.41,9.76,8,10.91c1.72-0.43,3.28-1.36,4.55-2.62l3.23,3.23l1.41-1.41 L2.81,2.81z M12,19.92c-3.45-1.13-6-4.82-6-8.83V8.83l9.14,9.14C14.24,18.85,13.17,19.54,12,19.92z"/></g></g>
    </Icon>
  );
});

IconMaterialRemoveModerator.displayName = 'OnesyIconMaterialRemoveModerator';

export default IconMaterialRemoveModerator;

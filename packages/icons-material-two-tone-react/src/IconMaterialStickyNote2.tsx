import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStickyNote2 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StickyNote2'

      short_name='StickyNote2'

      viewBox='0 0 24 24'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><path d="M5,5v14h9v-5h5V5H5z M12,14H7v-2h5V14z M17,10H7V8h10V10z" opacity=".3"/><path d="M19,5v9l-5,0l0,5H5V5H19 M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h10l6-6V5C21,3.9,20.1,3,19,3z M12,14H7v-2h5V14z M17,10H7V8h10V10z"/>
    </Icon>
  );
});

IconMaterialStickyNote2.displayName = 'OnesyIconMaterialStickyNote2';

export default IconMaterialStickyNote2;

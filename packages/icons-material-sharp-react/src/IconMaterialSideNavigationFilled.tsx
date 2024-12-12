import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSideNavigationFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SideNavigationFilled'

      short_name='SideNavigation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-720h720v720H120Zm360-80h280v-560H480v560Z"/>
    </Icon>
  );
});

IconMaterialSideNavigationFilled.displayName = 'OnesyIconMaterialSideNavigationFilled';

export default IconMaterialSideNavigationFilled;

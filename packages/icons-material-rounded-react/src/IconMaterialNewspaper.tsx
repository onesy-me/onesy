import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNewspaper = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Newspaper'

      short_name='Newspaper'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-120q-33 0-56.5-23.5T80-200v-616q0-7 6-9.5t11 2.5l50 50 52-53q6-6 14-6t14 6l53 53 53-53q6-6 14-6t14 6l52 53 53-53q6-6 14-6t14 6l53 53 52-53q6-6 14-6t14 6l53 53 53-53q6-6 14-6t14 6l52 53 50-50q5-5 11-2.5t6 9.5v616q0 33-23.5 56.5T800-120H160Zm0-80h280v-240H160v240Zm360 0h280v-80H520v80Zm0-160h280v-80H520v80ZM160-520h640v-120H160v120Z"/>
    </Icon>
  );
});

IconMaterialNewspaper.displayName = 'OnesyIconMaterialNewspaper';

export default IconMaterialNewspaper;

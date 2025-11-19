import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStylusFountainPenW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StylusFountainPenW100Filled'

      short_name='StylusFountainPen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M335-365h289l74-302-204-188v206q12 5 20 15.5t8 24.5q0 17-12.5 29.5T480-567q-18 0-30.5-12.5T437-609q0-14 8-25t21-15v-206L261-667l74 302ZM212-172l31-84h474l31 84H212Z"/>
    </Icon>
  );
});

IconMaterialStylusFountainPenW100Filled.displayName = 'OnesyIconMaterialStylusFountainPenW100Filled';

export default IconMaterialStylusFountainPenW100Filled;

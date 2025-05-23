import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHeartBrokenW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeartBrokenW100Filled'

      short_name='HeartBroken'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M481-173q-12 0-23.5-5T438-191q-85-86-143.5-151.5t-94.5-116Q164-509 148-548t-16-72q0-81 56.5-137.5T326-814q53 0 94 18t30 56l-45 158q-5 18 3.5 33t23.5 15h82l-21 234q-1 8 6.5 9t9.5-6l87-281q5-18-3-33t-23-15h-82l48-144q9-27 37.5-35.5T632-814q81 0 137.5 56.5T826-620q0 33-16.5 72T757-458q-36 51-93.5 116.5T523-191q-8 9-19 13.5t-23 4.5Z"/>
    </Icon>
  );
});

IconMaterialHeartBrokenW100Filled.displayName = 'OnesyIconMaterialHeartBrokenW100Filled';

export default IconMaterialHeartBrokenW100Filled;

import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChevronLeft = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChevronLeft'

      short_name='ChevronLeft'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m432-480 156 156q11 11 11 28t-11 28q-11 11-28 11t-28-11L348-452q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l184-184q11-11 28-11t28 11q11 11 11 28t-11 28L432-480Z"/>
    </Icon>
  );
});

IconMaterialChevronLeft.displayName = 'OnesyIconMaterialChevronLeft';

export default IconMaterialChevronLeft;

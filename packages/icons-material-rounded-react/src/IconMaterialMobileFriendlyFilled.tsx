import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMobileFriendlyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MobileFriendlyFilled'

      short_name='MobileFriendly'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m598-432 198-198q11-11 28-11t28 11q11 11 11 28t-11 28L626-348q-12 12-28 12t-28-12L456-462q-11-11-11-28t11-28q11-11 28-11t28 11l86 86ZM240-40q-33 0-56.5-23.5T160-120v-720q0-33 23.5-56.5T240-920h400q33 0 56.5 23.5T720-840v120q0 17-11.5 28.5T680-680q-17 0-28.5-11.5T640-720H240v480h400q0-17 11.5-28.5T680-280q17 0 28.5 11.5T720-240v120q0 33-23.5 56.5T640-40H240Z"/>
    </Icon>
  );
});

IconMaterialMobileFriendlyFilled.displayName = 'OnesyIconMaterialMobileFriendlyFilled';

export default IconMaterialMobileFriendlyFilled;

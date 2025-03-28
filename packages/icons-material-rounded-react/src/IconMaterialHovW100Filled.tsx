import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHovW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HovW100Filled'

      short_name='Hov'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-165q-8 0-14.5-4T454-181L307-452q-4-7-5.5-14t-1.5-15q0-8 1.5-14.5T307-509l147-270q5-8 11.5-12t14.5-4q8 0 14.5 4t11.5 12l147 270q4 7 5.5 13.5T660-481q0 8-1.5 15t-5.5 14L506-181q-5 8-11.5 12t-14.5 4Z"/>
    </Icon>
  );
});

IconMaterialHovW100Filled.displayName = 'OnesyIconMaterialHovW100Filled';

export default IconMaterialHovW100Filled;

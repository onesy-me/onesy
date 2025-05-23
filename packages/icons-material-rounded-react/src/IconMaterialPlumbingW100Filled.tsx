import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPlumbingW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlumbingW100Filled'

      short_name='Plumbing'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M737-591 629-699l-85 85-48-48 96-96q8-8 17.5-11.5T629-773q10 0 20 3.5t18 11.5l55 55q14 14 20.5 31t6.5 36q0 11-3 22.5t-9 22.5ZM311-429q-11-11-11-24.5t11-24.5l80-80 48 48-81 81q-11 11-23.5 11T311-429Zm-85 268q-8-8-11.5-18.5T211-201q0-11 3.5-21t11.5-18l270-270-145-145q-11-11-10.5-23.5T352-702q11-11 24-10.5t24 11.5l144 144 57-57 85 85q5 5 5 9.5t-5 9.5q-5 4-11 3t-17-10L303-162q-8 8-17.5 12t-20.5 4q-11 0-21-3.5T226-161Z"/>
    </Icon>
  );
});

IconMaterialPlumbingW100Filled.displayName = 'OnesyIconMaterialPlumbingW100Filled';

export default IconMaterialPlumbingW100Filled;

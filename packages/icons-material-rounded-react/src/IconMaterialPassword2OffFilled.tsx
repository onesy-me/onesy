import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPassword2OffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Password2OffFilled'

      short_name='Password2Off'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-440q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm640 0q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM600-560q0 9-1 18t-4 18q-4 11-16.5 13.5T556-518L438-636q-9-9-7-21.5t13-17.5q9-3 18-4t18-1q50 0 85 35t35 85ZM120-200q-17 0-28.5-11.5T80-240q0-17 11.5-28.5T120-280h448L84-764q-11-11-11-28t11-28q11-11 28-11t28 11l680 680q11 11 11 28t-11 28q-11 11-28 11t-28-11L648-200H120Z"/>
    </Icon>
  );
});

IconMaterialPassword2OffFilled.displayName = 'OnesyIconMaterialPassword2OffFilled';

export default IconMaterialPassword2OffFilled;

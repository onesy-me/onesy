import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSecurityW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SecurityW100Filled'

      short_name='Security'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-164q97-30 162-118.5T718-480H480v-314l-219 81q-10 4-15.5 12t-5.5 18v184q0 8 2 19h238v316Zm0 25q-5 0-11-1t-11-3q-113-45-179.5-148.5T212-516v-166q0-19 11-34.5t28-22.5l208-77q11-4 21-4t21 4l208 77q17 7 28 22.5t11 34.5v166q0 121-66.5 224.5T502-143q-5 2-11 3t-11 1Z"/>
    </Icon>
  );
});

IconMaterialSecurityW100Filled.displayName = 'OnesyIconMaterialSecurityW100Filled';

export default IconMaterialSecurityW100Filled;

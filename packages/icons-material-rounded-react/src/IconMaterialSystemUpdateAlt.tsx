import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSystemUpdateAlt = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SystemUpdateAlt'

      short_name='SystemUpdateAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h160q17 0 28.5 11.5T360-760q0 17-11.5 28.5T320-720H160v480h640v-480H640q-17 0-28.5-11.5T600-760q0-17 11.5-28.5T640-800h160q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm280-336v-264q0-17 11.5-28.5T480-800q17 0 28.5 11.5T520-760v264l76-76q11-11 28-11t28 11q11 11 11 28t-11 28L508-372q-12 12-28 12t-28-12L308-516q-11-11-11-28t11-28q11-11 28-11t28 11l76 76Z"/>
    </Icon>
  );
});

IconMaterialSystemUpdateAlt.displayName = 'OnesyIconMaterialSystemUpdateAlt';

export default IconMaterialSystemUpdateAlt;

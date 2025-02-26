import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialControlCamera = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ControlCamera'

      short_name='ControlCamera'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M479-359q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm-57 222-85-85q-12-12-11.5-28.5T338-279q12-12 28.5-12t28.5 12l85 86 85-85q11-11 28-11t28 11q11 11 11 28t-11 28l-85 85q-12 12-27 18t-30 6q-15 0-30-6t-27-18ZM221-337l-85-85q-12-12-18-27t-6-30q0-15 6-30t18-27l85-85q12-12 28.5-12t28.5 12q12 12 12 28.5T278-564l-86 86 85 85q11 11 11 28t-11 28q-11 11-28 11t-28-11Zm116-401 85-85q12-12 27-18t30-6q15 0 30 6t27 18l85 85q12 12 12 28t-12 28q-12 12-28.5 12T564-682l-86-85-85 85q-11 11-28 11t-28-11q-11-11-11-28t11-28Zm344 343 85-85-85-85q-11-11-11-28t11-28q11-11 28-11t28 11l85 85q12 12 18 27t6 30q0 15-6 30t-18 27l-85 85q-12 12-28 11.5T681-338q-12-12-12-28.5t12-28.5Z"/>
    </Icon>
  );
});

IconMaterialControlCamera.displayName = 'OnesyIconMaterialControlCamera';

export default IconMaterialControlCamera;

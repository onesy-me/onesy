import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPassword2 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Password2'

      short_name='Password2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-440q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm-40 240q-17 0-28.5-11.5T80-240q0-17 11.5-28.5T120-280h720q17 0 28.5 11.5T880-240q0 17-11.5 28.5T840-200H120Zm360-240q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm320 0q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Z"/>
    </Icon>
  );
});

IconMaterialPassword2.displayName = 'OnesyIconMaterialPassword2';

export default IconMaterialPassword2;

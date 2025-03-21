import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRouteFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RouteFilled'

      short_name='Route'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-120q-66 0-113-47t-47-113v-327q-35-13-57.5-43.5T120-720q0-50 35-85t85-35q50 0 85 35t35 85q0 39-22.5 69.5T280-607v327q0 33 23.5 56.5T360-200q33 0 56.5-23.5T440-280v-400q0-66 47-113t113-47q66 0 113 47t47 113v327q35 13 57.5 43.5T840-240q0 50-35 85t-85 35q-50 0-85-35t-35-85q0-39 22.5-70t57.5-43v-327q0-33-23.5-56.5T600-760q-33 0-56.5 23.5T520-680v400q0 66-47 113t-113 47Z"/>
    </Icon>
  );
});

IconMaterialRouteFilled.displayName = 'OnesyIconMaterialRouteFilled';

export default IconMaterialRouteFilled;

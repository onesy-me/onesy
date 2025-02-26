import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRearCameraFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RearCameraFilled'

      short_name='RearCamera'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M660-640q17 0 28.5-11.5T700-680q0-17-11.5-28.5T660-720q-17 0-28.5 11.5T620-680q0 17 11.5 28.5T660-640ZM520-200h280v-560H520v560Zm-360 80q-33 0-56.5-23.5T80-200v-200q0-17 11.5-28.5T120-440h128l-36 36q-11 11-11 28t11 28q11 11 28 11t28-11l104-104q12-12 12-28t-12-28L268-612q-11-11-28-11t-28 11q-11 11-11 28t11 28l36 36H120q-17 0-28.5-11.5T80-560v-200q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v560q0 33-23.5 56.5T800-120H160Z"/>
    </Icon>
  );
});

IconMaterialRearCameraFilled.displayName = 'OnesyIconMaterialRearCameraFilled';

export default IconMaterialRearCameraFilled;

import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSip = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Sip'

      short_name='Sip'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-360q17 0 28.5-11.5T520-400v-160q0-17-11.5-28.5T480-600q-17 0-28.5 11.5T440-560v160q0 17 11.5 28.5T480-360Zm110 0q13 0 21.5-8.5T620-390v-50h100q17 0 28.5-11.5T760-480v-80q0-17-11.5-28.5T720-600H580q-8 0-14 6t-6 14v190q0 13 8.5 21.5T590-360Zm-360 0h130q17 0 28.5-11.5T400-400v-70q0-17-11.5-28.5T360-510H260v-30h110q13 0 21.5-8.5T400-570q0-13-8.5-21.5T370-600H240q-17 0-28.5 11.5T200-560v70q0 17 11.5 28.5T240-450h100v30H230q-13 0-21.5 8.5T200-390q0 13 8.5 21.5T230-360Zm390-140v-40h80v40h-80ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-480H160v480Zm0 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialSip.displayName = 'OnesyIconMaterialSip';

export default IconMaterialSip;

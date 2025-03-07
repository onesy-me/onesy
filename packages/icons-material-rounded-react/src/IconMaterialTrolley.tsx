import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTrolley = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Trolley'

      short_name='Trolley'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M800-280H240q-33 0-56.5-23.5T160-360v-400h-40q-17 0-28.5-11.5T80-800q0-17 11.5-28.5T120-840h40q33 0 56.5 23.5T240-760v400h560q17 0 28.5 11.5T840-320q0 17-11.5 28.5T800-280ZM240-80q-33 0-56.5-23.5T160-160q0-33 23.5-56.5T240-240q33 0 56.5 23.5T320-160q0 33-23.5 56.5T240-80Zm80-320q-17 0-28.5-11.5T280-440v-160q0-17 11.5-28.5T320-640h160q17 0 28.5 11.5T520-600v160q0 17-11.5 28.5T480-400H320Zm40-80h80v-80h-80v80Zm240 80q-17 0-28.5-11.5T560-440v-160q0-17 11.5-28.5T600-640h160q17 0 28.5 11.5T800-600v160q0 17-11.5 28.5T760-400H600Zm40-80h80v-80h-80v80ZM760-80q-33 0-56.5-23.5T680-160q0-33 23.5-56.5T760-240q33 0 56.5 23.5T840-160q0 33-23.5 56.5T760-80ZM360-480h80-80Zm280 0h80-80Z"/>
    </Icon>
  );
});

IconMaterialTrolley.displayName = 'OnesyIconMaterialTrolley';

export default IconMaterialTrolley;

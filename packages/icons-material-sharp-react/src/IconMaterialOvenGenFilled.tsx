import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOvenGenFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OvenGenFilled'

      short_name='OvenGen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-480v280q0 33 23.5 56.5T200-120h560q33 0 56.5-23.5T840-200v-280H680v200H280v-200H120Zm240 120h240v-120H360v120ZM120-560h720v-200q0-33-23.5-56.5T760-840H200q-33 0-56.5 23.5T120-760v200Zm200-80q-17 0-28.5-11.5T280-680q0-17 11.5-28.5T320-720q17 0 28.5 11.5T360-680q0 17-11.5 28.5T320-640Zm160 0q-17 0-28.5-11.5T440-680q0-17 11.5-28.5T480-720q17 0 28.5 11.5T520-680q0 17-11.5 28.5T480-640Zm160 0q-17 0-28.5-11.5T600-680q0-17 11.5-28.5T640-720q17 0 28.5 11.5T680-680q0 17-11.5 28.5T640-640Z"/>
    </Icon>
  );
});

IconMaterialOvenGenFilled.displayName = 'OnesyIconMaterialOvenGenFilled';

export default IconMaterialOvenGenFilled;

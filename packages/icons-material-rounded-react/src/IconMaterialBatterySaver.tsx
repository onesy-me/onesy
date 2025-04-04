import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBatterySaver = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatterySaver'

      short_name='BatterySaver'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M640-200h-80q-17 0-28.5-11.5T520-240q0-17 11.5-28.5T560-280h80v-80q0-17 11.5-28.5T680-400q17 0 28.5 11.5T720-360v80h80q17 0 28.5 11.5T840-240q0 17-11.5 28.5T800-200h-80v80q0 17-11.5 28.5T680-80q-17 0-28.5-11.5T640-120v-80Zm-280 40Zm-40 80q-17 0-28.5-11.5T280-120v-640q0-17 11.5-28.5T320-800h80v-40q0-17 11.5-28.5T440-880h80q17 0 28.5 11.5T560-840v40h80q17 0 28.5 11.5T680-760v240q0 17-11.5 28.5T640-480q-17 0-28.5-11.5T600-520v-200H360v560h101q17 0 28.5 11.5T501-120q0 17-11.5 28.5T461-80H320Z"/>
    </Icon>
  );
});

IconMaterialBatterySaver.displayName = 'OnesyIconMaterialBatterySaver';

export default IconMaterialBatterySaver;

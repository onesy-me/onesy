import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFlexWrap = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlexWrap'

      short_name='FlexWrap'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M40-120v-280q0-17 11.5-28.5T80-440h160q17 0 28.5 11.5T280-400v280q0 17-11.5 28.5T240-80H80q-17 0-28.5-11.5T40-120Zm320 0v-280q0-17 11.5-28.5T400-440h160q17 0 28.5 11.5T600-400v280q0 17-11.5 28.5T560-80H400q-17 0-28.5-11.5T360-120Zm320 0v-280q0-17 11.5-28.5T720-440h160q17 0 28.5 11.5T920-400v280q0 17-11.5 28.5T880-80H720q-17 0-28.5-11.5T680-120Zm-240-40h80v-200h-80v200ZM40-560v-280q0-17 11.5-28.5T80-880h160q17 0 28.5 11.5T280-840v280q0 17-11.5 28.5T240-520H80q-17 0-28.5-11.5T40-560Zm320 0v-280q0-17 11.5-28.5T400-880h160q17 0 28.5 11.5T600-840v280q0 17-11.5 28.5T560-520H400q-17 0-28.5-11.5T360-560Zm320 0v-280q0-17 11.5-28.5T720-880h160q17 0 28.5 11.5T920-840v280q0 17-11.5 28.5T880-520H720q-17 0-28.5-11.5T680-560Zm-560-40h80v-200h-80v200Zm640 0h80v-200h-80v200Z"/>
    </Icon>
  );
});

IconMaterialFlexWrap.displayName = 'OnesyIconMaterialFlexWrap';

export default IconMaterialFlexWrap;

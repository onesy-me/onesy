import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialInsertPageBreakFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InsertPageBreakFilled'

      short_name='InsertPageBreak'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-80q-33 0-56.5-23.5T160-160v-80q0-17 11.5-28.5T200-280h560q17 0 28.5 11.5T800-240v80q0 33-23.5 56.5T720-80H240Zm280-720v160q0 17 11.5 28.5T560-600h160L520-800Zm-360 0q0-33 23.5-56.5T240-880h287q16 0 30.5 6t25.5 17l194 194q11 11 17 25.5t6 30.5v47q0 17-11.5 28.5T760-520H200q-17 0-28.5-11.5T160-560v-240Zm240 440q-17 0-28.5-11.5T360-400q0-17 11.5-28.5T400-440h160q17 0 28.5 11.5T600-400q0 17-11.5 28.5T560-360H400Zm320 0q-17 0-28.5-11.5T680-400q0-17 11.5-28.5T720-440h160q17 0 28.5 11.5T920-400q0 17-11.5 28.5T880-360H720Zm-640 0q-17 0-28.5-11.5T40-400q0-17 11.5-28.5T80-440h160q17 0 28.5 11.5T280-400q0 17-11.5 28.5T240-360H80Z"/>
    </Icon>
  );
});

IconMaterialInsertPageBreakFilled.displayName = 'OnesyIconMaterialInsertPageBreakFilled';

export default IconMaterialInsertPageBreakFilled;

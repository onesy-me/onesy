import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialE911Emergency = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='E911Emergency'

      short_name='E911Emergency'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-160q-17 0-28.5-11.5T200-200q0-17 11.5-28.5T240-240h24l79-263q8-26 29.5-41.5T420-560h120q26 0 47.5 15.5T617-503l79 263h24q17 0 28.5 11.5T760-200q0 17-11.5 28.5T720-160H240Zm108-80h264l-72-240H420l-72 240Zm92-440v-120q0-17 11.5-28.5T480-840q17 0 28.5 11.5T520-800v120q0 17-11.5 28.5T480-640q-17 0-28.5-11.5T440-680Zm210 54 85-85q11-11 27.5-11.5T791-711q11 11 11 28t-11 28l-85 86q-12 12-28 12t-28-12q-12-12-12-28.5t12-28.5Zm110 186h120q17 0 28.5 11.5T920-400q0 17-11.5 28.5T880-360H760q-17 0-28.5-11.5T720-400q0-17 11.5-28.5T760-440ZM254-570l-85-85q-11-11-11.5-27.5T169-711q11-11 28-11t28 11l86 85q12 12 12 28t-12 28q-12 12-28.5 12T254-570ZM80-360q-17 0-28.5-11.5T40-400q0-17 11.5-28.5T80-440h120q17 0 28.5 11.5T240-400q0 17-11.5 28.5T200-360H80Zm400 120Z"/>
    </Icon>
  );
});

IconMaterialE911Emergency.displayName = 'OnesyIconMaterialE911Emergency';

export default IconMaterialE911Emergency;

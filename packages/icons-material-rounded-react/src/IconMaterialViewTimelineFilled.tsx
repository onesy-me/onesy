import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewTimelineFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewTimelineFilled'

      short_name='ViewTimeline'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-280h160q17 0 28.5-11.5T480-320q0-17-11.5-28.5T440-360H280q-17 0-28.5 11.5T240-320q0 17 11.5 28.5T280-280Zm120-160h160q17 0 28.5-11.5T600-480q0-17-11.5-28.5T560-520H400q-17 0-28.5 11.5T360-480q0 17 11.5 28.5T400-440Zm120-160h160q17 0 28.5-11.5T720-640q0-17-11.5-28.5T680-680H520q-17 0-28.5 11.5T480-640q0 17 11.5 28.5T520-600ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Z"/>
    </Icon>
  );
});

IconMaterialViewTimelineFilled.displayName = 'OnesyIconMaterialViewTimelineFilled';

export default IconMaterialViewTimelineFilled;

import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAlarmAdd = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlarmAdd'

      short_name='AlarmAdd'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 6c-3.86 0-7 3.14-7 7s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm4 8h-3v3h-2v-3H8v-2h3V9h2v3h3v2z" opacity=".3"/><path d="M17.337 1.81l4.607 3.845-1.28 1.535-4.61-3.843zm-10.674 0l1.282 1.536L3.337 7.19l-1.28-1.536zM12 4c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zm1-11h-2v3H8v2h3v3h2v-3h3v-2h-3z"/>
    </Icon>
  );
});

IconMaterialAlarmAdd.displayName = 'OnesyIconMaterialAlarmAdd';

export default IconMaterialAlarmAdd;

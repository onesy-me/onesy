import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLocalSeeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalSeeFilled'

      short_name='LocalSee'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-300q-42 0-71-29t-29-71q0-42 29-71t71-29h2q22 31 46.5 60t50.5 56q-5 36-33 60t-66 24ZM80-80v-640h206l74-80h50q-5 19-7.5 39t-2.5 41q0 38 10 74t27 71q-60 14-98.5 62.5T300-400q0 75 52.5 127.5T480-220q54 0 97.5-28.5T643-323q20 19 39.5 36t37.5 32q42-35 82-71.5t78-75.5v322H80Zm640-280q121-103 180.5-191T960-714q0-113-72.5-179.5T720-960q-95 0-167.5 66.5T480-714q0 75 59.5 163T720-360Zm-74-240 28-91-74-59h91l29-90 29 90h91l-74 59 28 91-74-56-74 56Z"/>
    </Icon>
  );
});

IconMaterialLocalSeeFilled.displayName = 'OnesyIconMaterialLocalSeeFilled';

export default IconMaterialLocalSeeFilled;

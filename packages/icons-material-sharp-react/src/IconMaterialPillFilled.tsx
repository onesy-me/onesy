import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPillFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PillFilled'

      short_name='Pill'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m668-349 106-107q32-32 49-73t17-86q0-94-65.5-159.5T615-840q-45 0-86 17t-73 49L349-668l319 319ZM345-120q45 0 86-17t73-49l107-106-319-319-106 107q-32 32-49 73t-17 86q0 94 65.5 159.5T345-120Z"/>
    </Icon>
  );
});

IconMaterialPillFilled.displayName = 'OnesyIconMaterialPillFilled';

export default IconMaterialPillFilled;

import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBalanceW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BalanceW100Filled'

      short_name='Balance'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-172v-28h334v-441q-29-4-51.5-25T387-720H246l114 291q-3 37-36 63t-78 26q-45 0-78-26t-36-63l114-291h-74v-28h215q5-33 30.5-56.5T480-828q37 0 62.5 23.5T573-748h215v28h-74l114 291q-3 37-36 63t-78 26q-45 0-78-26t-36-63l114-291H573q-5 33-27.5 54T494-641v441h334v28H132Zm500-262h164l-82-209-82 209Zm-468 0h164l-82-209-82 209Zm316-234q27 0 46.5-19.5T546-734q0-27-19.5-46.5T480-800q-27 0-46.5 19.5T414-734q0 27 19.5 46.5T480-668Z"/>
    </Icon>
  );
});

IconMaterialBalanceW100Filled.displayName = 'OnesyIconMaterialBalanceW100Filled';

export default IconMaterialBalanceW100Filled;

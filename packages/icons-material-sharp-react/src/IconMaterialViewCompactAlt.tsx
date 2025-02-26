import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewCompactAlt = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewCompactAlt'

      short_name='ViewCompactAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M300-300h160v-160H300v160Zm0-200h160v-160H300v160Zm200 200h160v-160H500v160Zm0-200h160v-160H500v160ZM80-160v-640h800v640H80Zm80-80h640v-480H160v480Zm0 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialViewCompactAlt.displayName = 'OnesyIconMaterialViewCompactAlt';

export default IconMaterialViewCompactAlt;

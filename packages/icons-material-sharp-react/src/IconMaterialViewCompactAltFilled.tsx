import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewCompactAltFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewCompactAltFilled'

      short_name='ViewCompactAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M300-300h160v-160H300v160Zm0-200h160v-160H300v160Zm200 200h160v-160H500v160Zm0-200h160v-160H500v160ZM80-160v-640h800v640H80Z"/>
    </Icon>
  );
});

IconMaterialViewCompactAltFilled.displayName = 'OnesyIconMaterialViewCompactAltFilled';

export default IconMaterialViewCompactAltFilled;

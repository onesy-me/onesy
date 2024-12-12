import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKeyboardControlKey = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardControlKey'

      short_name='KeyboardControlKey'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-647 284-452q-11 11-27.5 11.5T228-452q-11-11-11-28t11-28l224-224q12-12 28-12t28 12l224 224q11 11 11.5 27.5T732-452q-11 11-28 11t-28-11L480-647Z"/>
    </Icon>
  );
});

IconMaterialKeyboardControlKey.displayName = 'OnesyIconMaterialKeyboardControlKey';

export default IconMaterialKeyboardControlKey;

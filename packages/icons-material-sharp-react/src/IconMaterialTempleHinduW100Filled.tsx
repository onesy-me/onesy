import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTempleHinduW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TempleHinduW100Filled'

      short_name='TempleHindu'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m332-654 53-177v-63h28v80h133v-80h28v58l54 182H332ZM106-106v-388h28v80h125l16-52h410l16 52h125v-80h28v388H546v-200H414v200H106Zm178-388 39-132h314l39 132H284Z"/>
    </Icon>
  );
});

IconMaterialTempleHinduW100Filled.displayName = 'OnesyIconMaterialTempleHinduW100Filled';

export default IconMaterialTempleHinduW100Filled;

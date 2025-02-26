import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGraphicEqW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GraphicEqW100Filled'

      short_name='GraphicEq'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M319-286v-388h28v388h-28Zm147 154v-696h28v696h-28ZM172-436v-88h28v88h-28Zm441 150v-388h28v388h-28Zm147-150v-88h28v88h-28Z"/>
    </Icon>
  );
});

IconMaterialGraphicEqW100Filled.displayName = 'OnesyIconMaterialGraphicEqW100Filled';

export default IconMaterialGraphicEqW100Filled;

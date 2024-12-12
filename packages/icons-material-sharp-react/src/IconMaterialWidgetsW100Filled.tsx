import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWidgetsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WidgetsW100Filled'

      short_name='Widgets'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M648-494 496-646l152-152 152 152-152 152Zm-444-46v-216h216v216H204Zm336 336v-216h216v216H540Zm-336 0v-216h216v216H204Z"/>
    </Icon>
  );
});

IconMaterialWidgetsW100Filled.displayName = 'OnesyIconMaterialWidgetsW100Filled';

export default IconMaterialWidgetsW100Filled;

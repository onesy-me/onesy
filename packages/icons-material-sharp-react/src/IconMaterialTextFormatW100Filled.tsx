import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTextFormatW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextFormatW100Filled'

      short_name='TextFormat'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M226-224v-28h508v28H226Zm87-148 154-404h28l150 404h-30l-42-114H385l-42 114h-30Zm82-140h168l-80-220h-4l-84 220Z"/>
    </Icon>
  );
});

IconMaterialTextFormatW100Filled.displayName = 'OnesyIconMaterialTextFormatW100Filled';

export default IconMaterialTextFormatW100Filled;

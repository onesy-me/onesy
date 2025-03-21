import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTextFormatW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextFormatW100'

      short_name='TextFormat'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-224q-6 0-10-4t-4-10q0-6 4-10t10-4h480q6 0 10 4t4 10q0 6-4 10t-10 4H240Zm80-167 144-377q2-4 5-6t7-2h10q4 0 7 2.5t5 6.5l140 376q2 7-1.5 13t-11.5 6q-5 0-8-2t-5-7l-39-105H385l-39 105q-2 4-5 6.5t-8 2.5q-8 0-11.5-6t-1.5-13Zm75-121h168l-80-220h-4l-84 220Z"/>
    </Icon>
  );
});

IconMaterialTextFormatW100.displayName = 'OnesyIconMaterialTextFormatW100';

export default IconMaterialTextFormatW100;

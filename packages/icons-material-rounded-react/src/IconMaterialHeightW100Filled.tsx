import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHeightW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeightW100Filled'

      short_name='Height'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-227v-508l-80 79q-3.75 4-9.37 4-5.63 0-9.8-4-3.83-3.67-3.83-9.33 0-5.67 4-9.67l91.71-91.71Q464-772 469.37-774q5.36-2 11.5-2 6.13 0 11.13 2 5 2 10.29 7.29L594-675q4 4 4.5 9t-4.28 10q-5.22 5-10.22 5-5 0-10-5l-80-79v508l80-78q3.75-4 9.38-4 5.62 0 9.79 4 3.83 3.67 3.83 9.33 0 5.67-4 9.67l-91.71 91.71Q496-189 490.87-187q-5.14 2-11 2-5.87 0-11.47-2.05-5.6-2.04-10.4-6.95l-92-92q-3.67-3.75-3.83-9.38-.17-5.62 3.83-9.79 3.67-3.83 9.33-3.83 5.67 0 9.67 4l81 78Z"/>
    </Icon>
  );
});

IconMaterialHeightW100Filled.displayName = 'OnesyIconMaterialHeightW100Filled';

export default IconMaterialHeightW100Filled;

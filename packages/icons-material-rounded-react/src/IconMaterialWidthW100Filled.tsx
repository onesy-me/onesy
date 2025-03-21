import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWidthW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WidthW100Filled'

      short_name='Width'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m225-466 79 80q4 3.75 4 9.37 0 5.63-3.73 9.46-4.07 4.17-9.67 4.17t-9.6-4l-91.71-91.66Q188-464 186-469.54q-2-5.55-2-11.46 0-5 2-10.5t7.29-10.79L285-594q3.75-4 9.38-4 5.62 0 10.62 4 4 5 4 10.5t-4 9.5l-79 80h508l-79-80q-4-3.75-4-9.38 0-5.62 4.07-9.79 3.73-3.83 9.33-3.83t9.6 4l91.66 91.71Q771-496 773-490.5q2 5.5 2 11t-2 11q-2 5.5-7.29 10.79L674-366q-3.75 4-9.37 4-5.63 0-9.8-4.07-3.83-3.73-3.83-9.33t4-9.6l79-81H225Z"/>
    </Icon>
  );
});

IconMaterialWidthW100Filled.displayName = 'OnesyIconMaterialWidthW100Filled';

export default IconMaterialWidthW100Filled;

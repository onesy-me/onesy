import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBrightness3 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Brightness3'

      short_name='Brightness3'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M12.7 4.91c1.46 2 2.3 4.46 2.3 7.09s-.84 5.09-2.3 7.09C15.25 17.76 17 15.08 17 12s-1.75-5.76-4.3-7.09z" opacity=".3"/><path d="M9 2c-1.05 0-2.05.16-3 .46 4.06 1.27 7 5.06 7 9.54 0 4.48-2.94 8.27-7 9.54.95.3 1.95.46 3 .46 5.52 0 10-4.48 10-10S14.52 2 9 2zm3.7 17.09c1.46-2 2.3-4.46 2.3-7.09s-.84-5.09-2.3-7.09C15.25 6.24 17 8.92 17 12s-1.75 5.76-4.3 7.09z"/>
    </Icon>
  );
});

IconMaterialBrightness3.displayName = 'OnesyIconMaterialBrightness3';

export default IconMaterialBrightness3;

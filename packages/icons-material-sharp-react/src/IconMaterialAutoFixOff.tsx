import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAutoFixOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoFixOff'

      short_name='AutoFixOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m20 7-.95-2.05L17 4l2.05-.95L20 1l.95 2.05L23 4l-2.05.95Zm-4.45 5.7L11.3 8.45l2.875-2.875 4.25 4.25Zm4.25 9.9-7.1-7.05-6.875 6.875L1.6 18.15l6.85-6.85L1.4 4.2l1.4-1.4 18.4 18.4Zm-13.95-3 5.45-5.5-1.4-1.4-5.5 5.45Zm0 0L4.4 18.15l1.45 1.45Z"/>
    </Icon>
  );
});

IconMaterialAutoFixOff.displayName = 'OnesyIconMaterialAutoFixOff';

export default IconMaterialAutoFixOff;

import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLocationOnW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocationOnW100'

      short_name='LocationOn'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-169q110-94 177.5-198.5T725-547q0-110-69.5-182T480-801q-106 0-175.5 72T235-547q0 75 67.5 179.5T480-169Zm0 22q-8 0-16-2.5t-15-8.5q-36-33-78-78.5T292.5-333q-36.5-51-61-106T207-547q0-120 78.5-200.5T480-828q116 0 194.5 80.5T753-547q0 53-24.5 107.5t-60.5 106Q632-282 590-237t-78 78q-6.64 6-15.09 9-8.46 3-16.91 3Zm0-407Zm.18 60q24.82 0 42.32-17.68 17.5-17.67 17.5-42.5 0-24.82-17.68-42.32-17.67-17.5-42.5-17.5-24.82 0-42.32 17.68-17.5 17.67-17.5 42.5 0 24.82 17.68 42.32 17.67 17.5 42.5 17.5Z"/>
    </Icon>
  );
});

IconMaterialLocationOnW100.displayName = 'OnesyIconMaterialLocationOnW100';

export default IconMaterialLocationOnW100;

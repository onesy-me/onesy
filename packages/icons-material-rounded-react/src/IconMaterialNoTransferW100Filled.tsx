import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNoTransferW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoTransferW100Filled'

      short_name='NoTransfer'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M308-252v66q0 5.83-4.12 9.92-4.12 4.08-10 4.08t-9.88-4.08q-4-4.09-4-9.92v-74q-20-5-44-33.5T212-360v-348L100-820q-4-4-4.5-9.5T100-840q5-5 10-5t10 5L862-98q4 4 4.5 9.5T862-78q-5 5-10 5t-10-5L640-280h40v94q0 5.78-4.16 9.89-4.15 4.11-10 4.11-5.84 0-9.84-4.11t-4-9.89v-66H308Zm402-110L602-470q-11-11-5.24-24.5t21.12-13.5H720v-196H393q-12.44 0-23.72-5T350-722l-46-46q-11-11-7-26.5t19-19.5q32-8 72.71-11 40.72-3 91.29-3 144.05 0 206.03 24.97Q748-778.05 748-720v342q0 15.43-13.5 21.21Q721-351 710-362Zm-369.76 22q16.76 0 28.26-11.74 11.5-11.73 11.5-28.5 0-16.76-11.74-28.26-11.73-11.5-28.5-11.5-16.76 0-28.26 11.74-11.5 11.73-11.5 28.5 0 16.76 11.74 28.26 11.73 11.5 28.5 11.5ZM240-508h172L240-680v172Z"/>
    </Icon>
  );
});

IconMaterialNoTransferW100Filled.displayName = 'OnesyIconMaterialNoTransferW100Filled';

export default IconMaterialNoTransferW100Filled;

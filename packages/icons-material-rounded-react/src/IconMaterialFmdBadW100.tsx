import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFmdBadW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FmdBadW100'

      short_name='FmdBad'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480.04-459q5.96 0 9.96-4.02 4-4.03 4-9.98v-208q0-5.95-4.04-9.97-4.03-4.03-10-4.03-5.96 0-9.96 4.03-4 4.02-4 9.97v208q0 5.95 4.04 9.98 4.03 4.02 10 4.02ZM480-353q8.5 0 14.25-5.75T500-373q0-8.5-5.75-14.25T480-393q-8.5 0-14.25 5.75T460-373q0 8.5 5.75 14.25T480-353Zm0 184q110-94 177.5-198.5T725-547q0-110-69.5-182T480-801q-106 0-175.5 72T235-547q0 75 67.5 179.5T480-169Zm0 22q-8 0-16-2.5t-15-8.5q-36-33-78-78.5T292.5-333q-36.5-51-61-106T207-547q0-120 78.5-200.5T480-828q116 0 194.5 80.5T753-547q0 53-24.5 107.5t-60.5 106Q632-282 590-237t-78 78q-6.64 6-15.09 9-8.46 3-16.91 3Zm0-407Z"/>
    </Icon>
  );
});

IconMaterialFmdBadW100.displayName = 'OnesyIconMaterialFmdBadW100';

export default IconMaterialFmdBadW100;

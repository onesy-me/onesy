import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDataCheckW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DataCheckW100'

      short_name='DataCheck'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m612-599-47-46q-4-4-9.5-4.5T545-645q-5 5-5 10t5 10l46 45q9 9 21 9t21-9l102-102q4-4 4.5-9.5T735-702q-5-5-10-5t-10 5L612-599ZM186-186q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h400q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H186Zm454.15-280Q568-466 517-516.85t-51-123Q466-712 516.85-763t123-51Q712-814 763-763.15t51 123Q814-568 763.15-517t-123 51ZM186-506q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h181q5.95 0 9.98 3.9 4.02 3.9 4.02 9.67 0 5.43-4.02 9.93-4.03 4.5-9.98 4.5H186Zm0 160q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h351q5.95 0 9.97 3.9 4.03 3.9 4.03 9.67 0 5.43-3.5 9.93T537-346H186Z"/>
    </Icon>
  );
});

IconMaterialDataCheckW100.displayName = 'OnesyIconMaterialDataCheckW100';

export default IconMaterialDataCheckW100;

import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDeleteSweepW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeleteSweepW100'

      short_name='DeleteSweep'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M238-252q-26 0-43-17t-17-43v-328h-20q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h126q0-11 8.5-19.5T312-696h28q11 0 19.5 8.5T368-668h126q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4h-20v328q0 26-17 43t-43 17H238Zm370-14q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h80q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4h-80Zm0-160q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h160q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H608Zm0-160q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h200q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H608Zm-402-54v328q0 12 10 22t22 10h176q12 0 22-10t10-22v-328H206Z"/>
    </Icon>
  );
});

IconMaterialDeleteSweepW100.displayName = 'OnesyIconMaterialDeleteSweepW100';

export default IconMaterialDeleteSweepW100;

import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDeleteSweepW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeleteSweepW100Filled'

      short_name='DeleteSweep'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M238-252q-26 0-43-17t-17-43v-328h-20q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h126q0-11 8.5-19.5T312-696h28q11 0 19.5 8.5T368-668h126q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4h-20v328q0 26-17 43t-43 17H238Zm370-14q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h80q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4h-80Zm0-160q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h160q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H608Zm0-160q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h200q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H608Z"/>
    </Icon>
  );
});

IconMaterialDeleteSweepW100Filled.displayName = 'OnesyIconMaterialDeleteSweepW100Filled';

export default IconMaterialDeleteSweepW100Filled;

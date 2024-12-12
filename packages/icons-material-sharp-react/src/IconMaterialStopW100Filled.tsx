import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStopW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StopW100Filled'

      short_name='Stop'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M292-292v-376h376v376H292Z"/>
    </Icon>
  );
});

IconMaterialStopW100Filled.displayName = 'OnesyIconMaterialStopW100Filled';

export default IconMaterialStopW100Filled;

import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewDayW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewDayW100Filled'

      short_name='ViewDay'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M185-224q-5 0-9-4.04-4-4.03-4-10 0-5.96 4.02-9.96 4.03-4 9.98-4h589q5 0 9 4.04 4 4.03 4 10 0 5.96-4.03 9.96-4.02 4-9.97 4H185Zm47-148q-24.75 0-42.37-17.63Q172-407.25 172-432v-96q0-24.75 17.63-42.38Q207.25-588 232-588h496q24.75 0 42.38 17.62Q788-552.75 788-528v96q0 24.75-17.62 42.37Q752.75-372 728-372H232Zm-47-336q-5 0-9-4.04-4-4.03-4-10 0-5.96 4.02-9.96 4.03-4 9.98-4h589q5 0 9 4.04 4 4.03 4 10 0 5.96-4.03 9.96-4.02 4-9.97 4H185Z"/>
    </Icon>
  );
});

IconMaterialViewDayW100Filled.displayName = 'OnesyIconMaterialViewDayW100Filled';

export default IconMaterialViewDayW100Filled;

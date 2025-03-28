import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewDayW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewDayW100'

      short_name='ViewDay'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M185-224q-5 0-9-4t-4-10q0-6 4-10t10-4h589q5 0 9 4t4 10q0 6-4 10t-10 4H185Zm0-484q-5 0-9-4t-4-10q0-6 4-10t10-4h589q5 0 9 4t4 10q0 6-4 10t-10 4H185Zm47 336q-25 0-42.5-17.5T172-432v-96q0-25 17.5-42.5T232-588h496q25 0 42.5 17.5T788-528v96q0 25-17.5 42.5T728-372H232Zm0-28h496q14 0 23-9t9-23v-96q0-14-9-23t-23-9H232q-14 0-23 9t-9 23v96q0 14 9 23t23 9Zm-32-160h32q-14 0-23 9t-9 23v96q0 14 9 23t23 9h-32v-160Z"/>
    </Icon>
  );
});

IconMaterialViewDayW100.displayName = 'OnesyIconMaterialViewDayW100';

export default IconMaterialViewDayW100;

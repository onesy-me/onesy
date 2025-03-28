import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFilter9PlusW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter9PlusW100Filled'

      short_name='Filter9Plus'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M448-426q26 0 43-17t17-43v-148q0-26-17-43t-43-17h-28q-26 0-43 17t-17 43v28q0 26 17 43t43 17h60v60q0 14-9 23t-23 9h-54q-6 0-10 4t-4 10q0 6 4 10t10 4h54Zm32-148h-60q-14 0-23-9t-9-23v-28q0-14 9-23t23-9h28q14 0 23 9t9 23v60Zm262-226 32 32q0-12-10-22t-22-10ZM640-546v66q0 6 4 10t10 4q6 0 10-4t4-10v-66h66q6 0 10-4t4-10q0-6-4-10t-10-4h-66v-66q0-6-4-10t-10-4q-6 0-10 4t-4 10v66h-66q-6 0-10 4t-4 10q0 6 4 10t10 4h66ZM326-292q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h416q26 0 43 17t17 43v416q0 26-17 43t-43 17H326ZM218-184q-26 0-43-17t-17-43v-430q0-6 4-10t10-4q6 0 10 4t4 10v430q0 12 10 22t22 10h430q6 0 10 4t4 10q0 6-4 10t-10 4H218Z"/>
    </Icon>
  );
});

IconMaterialFilter9PlusW100Filled.displayName = 'OnesyIconMaterialFilter9PlusW100Filled';

export default IconMaterialFilter9PlusW100Filled;

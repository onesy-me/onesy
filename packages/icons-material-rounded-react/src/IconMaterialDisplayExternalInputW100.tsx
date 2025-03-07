import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDisplayExternalInputW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DisplayExternalInputW100'

      short_name='DisplayExternalInput'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M760-200H571q-6 0-10-4t-4-10q0-6 4-10t10-4h190l-80-80q-5-5-5-10.5t5-9.5q4-4 9.5-4t10.5 5l92 92q9 9 9 21t-9 21l-92 92q-5 5-10 5t-10-5q-5-5-5-10t5-10l79-79Zm-528 28q-26 0-43-17t-17-43v-114q0-6 4-10t10-4q6 0 10 4t4 10v114q0 12 10 22t22 10h114q6 0 10 4t4 10q0 6-4 10t-10 4H232Zm-60-442v-114q0-26 17-43t43-17h114q6 0 10 4t4 10q0 6-4 10t-10 4H232q-12 0-22 10t-10 22v114q0 6-4 10t-10 4q-6 0-10-4t-4-10Zm588 0v-114q0-12-10-22t-22-10H614q-6 0-10-4t-4-10q0-6 4-10t10-4h114q26 0 43 17t17 43v114q0 6-4 10t-10 4q-6 0-10-4t-4-10Z"/>
    </Icon>
  );
});

IconMaterialDisplayExternalInputW100.displayName = 'OnesyIconMaterialDisplayExternalInputW100';

export default IconMaterialDisplayExternalInputW100;

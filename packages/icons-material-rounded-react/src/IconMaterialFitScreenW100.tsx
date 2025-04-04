import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFitScreenW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FitScreenW100'

      short_name='FitScreen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M800-614v-74q0-12-10-22t-22-10h-74q-6 0-10-4t-4-10q0-6 4-10t10-4h74q26 0 43 17t17 43v74q0 6-4 10t-10 4q-6 0-10-4t-4-10Zm-668 0v-74q0-26 17-43t43-17h74q6 0 10 4t4 10q0 6-4 10t-10 4h-74q-12 0-22 10t-10 22v74q0 6-4 10t-10 4q-6 0-10-4t-4-10Zm636 402h-74q-6 0-10-4t-4-10q0-6 4-10t10-4h74q12 0 22-10t10-22v-74q0-6 4-10t10-4q6 0 10 4t4 10v74q0 26-17 43t-43 17Zm-576 0q-26 0-43-17t-17-43v-74q0-6 4-10t10-4q6 0 10 4t4 10v74q0 12 10 22t22 10h74q6 0 10 4t4 10q0 6-4 10t-10 4h-74Zm92-212v-112q0-25 17.5-42.5T344-596h272q25 0 42.5 17.5T676-536v112q0 25-17.5 42.5T616-364H344q-25 0-42.5-17.5T284-424Zm60 32h272q14 0 23-9t9-23v-112q0-14-9-23t-23-9H344q-14 0-23 9t-9 23v112q0 14 9 23t23 9Zm-32 0v-176 176Z"/>
    </Icon>
  );
});

IconMaterialFitScreenW100.displayName = 'OnesyIconMaterialFitScreenW100';

export default IconMaterialFitScreenW100;

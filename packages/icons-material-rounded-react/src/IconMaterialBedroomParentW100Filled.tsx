import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBedroomParentW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BedroomParentW100Filled'

      short_name='BedroomParent'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M260-372h440v50q0 6 4 10t10 4q6 0 10-4t4-10v-118q0-14-8-30.5T698-496v-60q0-26-17-43t-43-17H526q-17 0-28.5 6.5T480-592q-6-11-17.5-17.5T434-616H322q-26 0-43 17t-17 43v60q-14 9-22 25.5t-8 30.5v118q0 6 4 10t10 4q6 0 10-4t4-10v-50Zm0-28v-40q0-17 11.5-28.5T300-480h360q17 0 28.5 11.5T700-440v40H260Zm30-108v-48q0-14 9-23t23-9h112q14 0 23 9t9 23v48H290Zm204 0v-48q0-14 9-23t23-9h112q14 0 23 9t9 23v48H494ZM192-132q-26 0-43-17t-17-43v-576q0-26 17-43t43-17h576q26 0 43 17t17 43v576q0 26-17 43t-43 17H192Z"/>
    </Icon>
  );
});

IconMaterialBedroomParentW100Filled.displayName = 'OnesyIconMaterialBedroomParentW100Filled';

export default IconMaterialBedroomParentW100Filled;

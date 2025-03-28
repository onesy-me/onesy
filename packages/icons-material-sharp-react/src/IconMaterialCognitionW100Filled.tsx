import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCognitionW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CognitionW100Filled'

      short_name='Cognition'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M489-384q51 0 88.5-33t37.5-81q0-40-25-68.5T527-595q-31 0-54 20.5T450-525q0 13 5.5 25t15.5 23l23-19q-8-6-12-13t-4-15q0-15 12.5-28.5T527-566q24 0 42 18.5t18 50.5q0 34-27 59.5T490-412q-48 0-83-38t-35-96q0-29 11.5-56t33.5-49l-21-20q-25 25-39 57t-14 67q0 67 42 115t104 48ZM292-132v-144q-57-52-88.5-115.5T172-521q0-128 90-217.5T480-828q103 0 187.5 63.5T777-601l47 189H708v200H548v80H292Z"/>
    </Icon>
  );
});

IconMaterialCognitionW100Filled.displayName = 'OnesyIconMaterialCognitionW100Filled';

export default IconMaterialCognitionW100Filled;

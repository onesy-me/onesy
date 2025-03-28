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
      <path d="M489-384q51 0 88.5-33t37.5-81q0-40-25-68.5T527-595q-31 0-54 20t-23 49q0 13 5 26t16 23q6 6 12 5.5t10-4.5q4-4 5-9t-4-10q-5-5-10.5-14t-5.5-17q0-14 12.5-27t36.5-13q24 0 42 18.5t18 50.5q0 34-27 59.5T490-412q-48 0-83-38t-35-96q0-25 8.5-49t25.5-44q4-5 5-11t-4-11q-5-5-11-4.5t-10 5.5q-20 23-31.5 52T343-547q0 67 42 115t104 48ZM306-132q-6 0-10-4t-4-10v-130q-57-52-88.5-115.5T172-521q0-128 90-217.5T480-828q103 0 187.5 63.5T777-601l38 152q4 14-5 25.5T786-412h-78v140q0 25-17.5 42.5T648-212H548v66q0 6-4 10t-10 4H306Z"/>
    </Icon>
  );
});

IconMaterialCognitionW100Filled.displayName = 'OnesyIconMaterialCognitionW100Filled';

export default IconMaterialCognitionW100Filled;

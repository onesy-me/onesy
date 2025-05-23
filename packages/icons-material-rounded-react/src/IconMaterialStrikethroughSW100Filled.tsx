import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStrikethroughSW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StrikethroughSW100Filled'

      short_name='StrikethroughS'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M486-192q-55 0-101.5-29T312-299q-2-5 0-10.5t7-7.5q5-2 10.5 0t8.5 7q23 42 62 66t86 24q59 0 104.5-33t45.5-87q0-17-3-34t-12-32q-3-5-1-10t7-8q5-3 10.5-1t8.5 7q11 17 14.5 37.5T664-340q0 66-54 107t-124 41ZM120-506q-6 0-10-4t-4-10q0-6 4-10t10-4h720q6 0 10 4t4 10q0 6-4 10t-10 4H120Zm213-108q-6 0-10-4t-4-10q-2-62 47.5-102T482-770q41 0 77 17.5t60 49.5q3 5 2.5 10.5T616-684q-5 3-10.5 2t-9.5-6q-20-27-50-40.5T482-742q-54 0-94.5 31.5T347-628q0 6-4 10t-10 4Z"/>
    </Icon>
  );
});

IconMaterialStrikethroughSW100Filled.displayName = 'OnesyIconMaterialStrikethroughSW100Filled';

export default IconMaterialStrikethroughSW100Filled;

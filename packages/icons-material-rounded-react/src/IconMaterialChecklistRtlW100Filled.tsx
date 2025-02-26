import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChecklistRtlW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChecklistRtlW100Filled'

      short_name='ChecklistRtl'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m640-296 160-160q4-4 10-4.5t10 4.5q4 4.36 4 10.18 0 5.82-4 9.82L662-278q-9 9-21 9t-21-9l-75-75q-4-4-3.5-9.5t4.5-9.5q4-4 9.67-4 5.66 0 9.33 4l75 76Zm0-280 160-160q4-4 10-4.5t10 4.5q4 4.36 4 10.18 0 5.82-4 9.82L662-558q-9 9-21 9t-21-9l-75-75q-4-4-3.5-9.5t4.5-9.5q4-4 9.67-4 5.66 0 9.33 4l75 76ZM146-326q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h280q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4H146Zm0-280q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h280q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4H146Z"/>
    </Icon>
  );
});

IconMaterialChecklistRtlW100Filled.displayName = 'OnesyIconMaterialChecklistRtlW100Filled';

export default IconMaterialChecklistRtlW100Filled;

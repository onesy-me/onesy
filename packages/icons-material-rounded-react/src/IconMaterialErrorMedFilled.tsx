import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialErrorMedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ErrorMedFilled'

      short_name='ErrorMed'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m369-463 58 79q6 8 16 8t16-8l58-79 57 79q6 8 16.5 8t16.5-8l90-123q10-14 7.5-30T688-563q-14-10-30-7.5T632-554l-42 57-57-79q-6-8-16.5-8t-16.5 8l-57 79-58-79q-6-8-16-8t-16 8l-90 123q-10 14-7.5 30t16.5 26q14 10 30 7.5t26-16.5l41-57ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/>
    </Icon>
  );
});

IconMaterialErrorMedFilled.displayName = 'OnesyIconMaterialErrorMedFilled';

export default IconMaterialErrorMedFilled;

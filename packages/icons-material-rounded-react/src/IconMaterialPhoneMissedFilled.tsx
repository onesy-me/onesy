import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPhoneMissedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneMissedFilled'

      short_name='PhoneMissed'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m136-144-92-90q-12-12-12-28t12-28q88-95 203-142.5T480-480q118 0 232.5 47.5T916-290q12 12 12 28t-12 28l-92 90q-11 11-25.5 12t-26.5-8l-116-88q-8-6-12-14t-4-18v-114q-38-12-78-19t-82-7q-42 0-82 7t-78 19v114q0 10-4 18t-12 14l-116 88q-12 9-26.5 8T136-144Zm104-456q-17 0-28.5-11.5T200-640v-160q0-17 11.5-28.5T240-840h160q17 0 28.5 11.5T440-800q0 17-11.5 28.5T400-760h-64l141 141 198-198q12-12 28.5-12t28.5 12q12 12 12 28.5T732-760L535-563q-23 23-57 23t-57-23L280-704v64q0 17-11.5 28.5T240-600Z"/>
    </Icon>
  );
});

IconMaterialPhoneMissedFilled.displayName = 'OnesyIconMaterialPhoneMissedFilled';

export default IconMaterialPhoneMissedFilled;

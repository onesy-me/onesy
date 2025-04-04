import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCallEndFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallEndFilled'

      short_name='CallEnd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-640q118 0 232.5 47.5T916-450q12 12 12 28t-12 28l-92 90q-11 11-25.5 12t-26.5-8l-116-88q-8-6-12-14t-4-18v-114q-38-12-78-19t-82-7q-42 0-82 7t-78 19v114q0 10-4 18t-12 14l-116 88q-12 9-26.5 8T136-304l-92-90q-12-12-12-28t12-28q88-95 203-142.5T480-640Z"/>
    </Icon>
  );
});

IconMaterialCallEndFilled.displayName = 'OnesyIconMaterialCallEndFilled';

export default IconMaterialCallEndFilled;

import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAssistantFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AssistantFilled'

      short_name='Assistant'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.3 22.3 9 20H5q-.825 0-1.413-.587Q3 18.825 3 18V4q0-.825.587-1.413Q4.175 2 5 2h14q.825 0 1.413.587Q21 3.175 21 4v14q0 .825-.587 1.413Q19.825 20 19 20h-4l-2.3 2.3q-.275.275-.7.275-.425 0-.7-.275Zm2.25-9.75 2.425-1.1q.3-.125.3-.45t-.3-.45l-2.425-1.1-1.1-2.425q-.125-.3-.45-.3t-.45.3l-1.1 2.425-2.425 1.1q-.3.125-.3.45t.3.45l2.425 1.1 1.1 2.425q.125.3.45.3t.45-.3Z"/>
    </Icon>
  );
});

IconMaterialAssistantFilled.displayName = 'OnesyIconMaterialAssistantFilled';

export default IconMaterialAssistantFilled;

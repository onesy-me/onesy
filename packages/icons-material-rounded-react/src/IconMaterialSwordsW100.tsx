import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSwordsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwordsW100'

      short_name='Swords'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M751-143 627-267l-82 82q-2 2-6 2t-6-2q-17-17-17-42t17-42l162-162q17-17 42-17t42 17q2 2 2 6t-2 6l-82 82 124 124q9 9 9 21t-9 21l-28 28q-9 9-21 9t-21-9Zm68-594L390-307l37 37q17 17 17 42t-17 42q-2 2-6 2t-6-2l-82-82-124 124q-9 9-21 9t-21-9l-28-28q-9-9-9-21t9-21l124-124-82-82q-2-2-2-6t2-6q17-17 42-17t42 17l38 38 421-420q8-8 19.5-13t23.5-5h31q13 0 21.5 8.5T828-802v44q0 6-2 11t-7 10ZM334-583l23-24 23-24-23 24-23 24Zm-30 10L149-728q-8-8-12.5-19.5T132-771v-31q0-13 8.5-21.5T162-832h31q12 0 23.5 5t19.5 13l154 155q4 4 4 9t-4 9q-4 4-9.5 4t-9.5-4L207-804h-47v47l164 164q4 4 4.5 9.5T324-573q-5 5-10 5t-10-5Zm66 246 430-430v-47h-47L323-374l47 47Zm0 0-23-24-24-23 24 23 23 24Z"/>
    </Icon>
  );
});

IconMaterialSwordsW100.displayName = 'OnesyIconMaterialSwordsW100';

export default IconMaterialSwordsW100;

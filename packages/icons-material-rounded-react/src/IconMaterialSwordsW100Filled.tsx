import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSwordsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwordsW100Filled'

      short_name='Swords'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M751-143 627-267l-82 82q-2 2-6 2t-6-2q-17-17-17-42t17-42l162-162q17-17 42-17t42 17q2 2 2 6t-2 6l-82 82 124 124q9 9 9 21t-9 21l-28 28q-9 9-21 9t-21-9Zm68-594L390-307l37 37q17 17 17 42t-17 42q-2 2-6 2t-6-2l-82-82-124 124q-9 9-21 9t-21-9l-28-28q-9-9-9-21t9-21l124-124-82-82q-2-2-2-6t2-6q17-17 42-17t42 17l38 38 421-420q8-8 19.5-13t23.5-5h31q13 0 21.5 8.5T828-802v44q0 6-2 11t-7 10ZM294-583 149-728q-8-8-12.5-19.5T132-771v-31q0-13 8.5-21.5T162-832h31q12 0 23.5 5t19.5 13l144 145q8 8 8 19t-8 19l-46 48q-8 8-20 8t-20-8Z"/>
    </Icon>
  );
});

IconMaterialSwordsW100Filled.displayName = 'OnesyIconMaterialSwordsW100Filled';

export default IconMaterialSwordsW100Filled;

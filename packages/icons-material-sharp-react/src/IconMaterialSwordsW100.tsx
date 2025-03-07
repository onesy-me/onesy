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
      <path d="M751-143 627-267l-88 88-6-6q-17-17-17-42t17-42l162-162q17-17 42-17t42 17l6 6-88 88 124 124q9 9 9 21t-9 21l-28 28q-9 9-21 9t-21-9Zm77-603L390-307l37 37q17 17 17 42t-17 42l-6 6-88-88-124 124q-9 9-21 9t-21-9l-28-28q-9-9-9-21t9-21l124-124-88-88 6-6q17-17 42-17t42 17l38 38 439-438h86v86ZM334-583l23-24 23-24-23 24-23 24Zm-20 20L132-746v-86h86l181 182-19 19-173-173h-47v47l174 174-20 20Zm56 236 430-430v-47h-47L323-374l47 47Zm0 0-23-24-24-23 24 23 23 24Z"/>
    </Icon>
  );
});

IconMaterialSwordsW100.displayName = 'OnesyIconMaterialSwordsW100';

export default IconMaterialSwordsW100;

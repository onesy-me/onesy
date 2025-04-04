import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAssistWalkerFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AssistWalkerFilled'

      short_name='AssistWalker'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m520-120 34-331q-57-15-86-39.5T410-544l-95 94 85 85v245h-80v-210l-31-28 7 54-147 189-63-49 126-162-83-164 168-166q12-12 26.5-18t29.5-6q24 0 38 9t19 14l80 79q27 27 66 42.5t84 15.5h119l32 308q13 8 21 21.5t8 30.5q0 25-17.5 42.5T760-100q-25 0-43-17.5T699-160q0-17 8-30.5t22-21.5l-5-48H594l-14 140h-60Zm-20-540q-33 0-56.5-23.5T420-740q0-33 23.5-56.5T500-820q33 0 56.5 23.5T580-740q0 33-23.5 56.5T500-660Zm100 340h118l-14-140h-89l-15 140Z"/>
    </Icon>
  );
});

IconMaterialAssistWalkerFilled.displayName = 'OnesyIconMaterialAssistWalkerFilled';

export default IconMaterialAssistWalkerFilled;

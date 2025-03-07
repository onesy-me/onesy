import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRepeatOneW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RepeatOneW100Filled'

      short_name='RepeatOne'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M476-556h-30q-6.07 0-10.03-3.95-3.97-3.96-3.97-10 0-6.05 3.97-10.05 3.96-4 10.03-4h28q12.75 0 21.38 8.62Q504-566.75 504-554v164q0 6.07-3.95 10.03-3.96 3.97-10 3.97-6.05 0-10.05-3.97-4-3.96-4-10.03v-166ZM226-242l80 80q4 4 4.5 9.5t-4.28 10.5q-5.22 5-10.22 5-5 0-10-5l-93-93q-5-5-7-10.13-2-5.14-2-11 0-5.87 2-10.87 2-5 7-10l93-93q4-4 9.5-4.5t10.72 4.5q4.78 5 4.78 10t-5 10l-80 80h438q14 0 23-9t9-23v-114q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98v114q0 24.75-17.62 42.37Q688.75-242 664-242H226Zm508-448H296q-14 0-23 9t-9 23v114q0 5.95-4.04 9.97-4.03 4.03-10 4.03-5.96 0-9.96-4.03-4-4.02-4-9.97v-114q0-24.75 17.63-42.38Q271.25-718 296-718h438l-80-80q-4-4-4.5-9.5t4.28-10.5q5.22-5 10.22-5 5 0 10 5l93 93q5 5 7 10.13 2 5.14 2 11 0 5.87-2 10.87-2 5-7 10l-93 93q-4 4-9.5 4.5t-10.72-4.5q-4.78-5-4.78-10t5-10l80-80Z"/>
    </Icon>
  );
});

IconMaterialRepeatOneW100Filled.displayName = 'OnesyIconMaterialRepeatOneW100Filled';

export default IconMaterialRepeatOneW100Filled;

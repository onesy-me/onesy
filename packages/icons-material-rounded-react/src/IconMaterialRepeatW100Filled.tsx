import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRepeatW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RepeatW100Filled'

      short_name='Repeat'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m226-242 80 80q4 4 4.5 9.5T306-142q-5 5-10 5t-10-5l-93-93q-5-5-7-10t-2-11q0-6 2-11t7-10l93-93q4-4 9.5-4.5T306-370q5 5 5 10t-5 10l-80 80h438q14 0 23-9t9-23v-114q0-6 4-10t10-4q6 0 10 4t4 10v114q0 25-17.5 42.5T664-242H226Zm508-448H296q-14 0-23 9t-9 23v114q0 6-4 10t-10 4q-6 0-10-4t-4-10v-114q0-25 17.5-42.5T296-718h438l-80-80q-4-4-4.5-9.5T654-818q5-5 10-5t10 5l93 93q5 5 7 10t2 11q0 6-2 11t-7 10l-93 93q-4 4-9.5 4.5T654-590q-5-5-5-10t5-10l80-80Z"/>
    </Icon>
  );
});

IconMaterialRepeatW100Filled.displayName = 'OnesyIconMaterialRepeatW100Filled';

export default IconMaterialRepeatW100Filled;

import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHowToVoteW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HowToVoteW100Filled'

      short_name='HowToVote'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M220-120q-26 0-43-17t-17-43v-89q0-11 4-21.5t12-18.5l72-80q4-5 10-5t11 5q4 4 4 9t-4 10l-81 90h584l-81-90q-4-5-3.5-10.5t4.5-9.5q5-5 10.5-4.5t9.5 5.5l72 80q8 8 12 18.5t4 21.5v89q0 26-17 43t-43 17H220Zm219-289L326-524q-18-18-17.5-42.5T327-609l169-169q18-18 42-18t42 18l114 114q18 18 18 42t-18 42L523-409q-18 18-42 18t-42-18Zm234-190q8-8 8-23t-8-23L561-757q-8-8-23-8t-23 8L346-588q-8 8-8 23t8 23l112 112q8 8 23 8t23-8l169-169Z"/>
    </Icon>
  );
});

IconMaterialHowToVoteW100Filled.displayName = 'OnesyIconMaterialHowToVoteW100Filled';

export default IconMaterialHowToVoteW100Filled;

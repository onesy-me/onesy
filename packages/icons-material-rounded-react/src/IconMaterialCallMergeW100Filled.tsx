import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCallMergeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallMergeW100Filled'

      short_name='CallMerge'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M266-222q-5-5-5-10t5-10l191-191q5-5 7-10.5t2-11.5v-278L346-613q-4 4-9.5 4.5T326-613q-5-5-5-10t5-10l133-133q5-5 10-7t11-2q6 0 11 2t10 7l133 133q4 4 4.5 9.5T634-613q-5 5-10 5t-10-5L494-733v278q0 12-5 23.5T476-412L286-222q-4 4-9.5 4.5T266-222Zm428 0q-5 5-10 5t-10-5L546-350q-4-4-4.5-9.5T546-370q5-5 10-5t10 5l128 128q4 4 4.5 9.5T694-222Z"/>
    </Icon>
  );
});

IconMaterialCallMergeW100Filled.displayName = 'OnesyIconMaterialCallMergeW100Filled';

export default IconMaterialCallMergeW100Filled;

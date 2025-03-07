import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialToolsLadderW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ToolsLadderW100'

      short_name='ToolsLadder'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M265-146q-6 0-9.5-5.5T254-162l178-643q2-5 5-7t7-2q7 0 10.5 5t1.5 11l-29 104h224l31-111q2-5 5-7t8-2q6 0 9.5 5.5T706-798L528-155q-2 5-5 7t-7 2q-7 0-10.5-5t-1.5-11l29-104H309l-31 111q-2 5-5 7t-8 2Zm107-348h224l48-172H419l-47 172Zm-56 200h225l47-172H364l-48 172Z"/>
    </Icon>
  );
});

IconMaterialToolsLadderW100.displayName = 'OnesyIconMaterialToolsLadderW100';

export default IconMaterialToolsLadderW100;

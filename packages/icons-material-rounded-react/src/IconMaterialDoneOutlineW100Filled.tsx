import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDoneOutlineW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoneOutlineW100Filled'

      short_name='DoneOutline'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m381-277 386-386-20-20-366 366-169-169-20 20 189 189Zm-21 19L173-445q-5-5-7-10t-2-11q0-6 2-11t7-10l18-18q5-5 10-7t11-2q6 0 11 2t10 7l148 148 346-346q5-5 10-7t11-2q6 0 11 2t10 7l18 18q5 5 7 10t2 11q0 6-2 11t-7 10L402-258q-5 5-10 7t-11 2q-6 0-11-2t-10-7Z"/>
    </Icon>
  );
});

IconMaterialDoneOutlineW100Filled.displayName = 'OnesyIconMaterialDoneOutlineW100Filled';

export default IconMaterialDoneOutlineW100Filled;

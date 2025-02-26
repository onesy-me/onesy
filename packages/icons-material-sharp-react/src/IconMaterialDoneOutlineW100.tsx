import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDoneOutlineW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoneOutlineW100'

      short_name='DoneOutline'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m381-277 386-386-20-20-366 366-169-169-20 20 189 189Zm0 40L152-466l60-60 169 169 367-367 60 60-427 427Z"/>
    </Icon>
  );
});

IconMaterialDoneOutlineW100.displayName = 'OnesyIconMaterialDoneOutlineW100';

export default IconMaterialDoneOutlineW100;

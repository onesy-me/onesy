import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMoveItemW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoveItemW100'

      short_name='MoveItem'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M829-466H380v-28h449l-90-90 20-20 124 124-124 124-20-20 90-90ZM621-614v-146H200v560h421v-146h28v174H172v-616h477v174h-28Z"/>
    </Icon>
  );
});

IconMaterialMoveItemW100.displayName = 'OnesyIconMaterialMoveItemW100';

export default IconMaterialMoveItemW100;

import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCards = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Cards'

      short_name='Cards'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-500v-220h220v220H240Zm0 260v-220h220v220H240Zm260-260v-220h220v220H500Zm0 260v-220h220v220H500ZM320-580h60v-60h-60v60Zm260 0h60v-60h-60v60ZM320-320h60v-60h-60v60Zm260 0h60v-60h-60v60ZM380-580Zm200 0Zm0 200Zm-200 0ZM120-120v-720h720v720H120Zm80-80h560v-560H200v560Z"/>
    </Icon>
  );
});

IconMaterialCards.displayName = 'OnesyIconMaterialCards';

export default IconMaterialCards;

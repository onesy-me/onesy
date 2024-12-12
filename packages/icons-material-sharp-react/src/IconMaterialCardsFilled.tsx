import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCardsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CardsFilled'

      short_name='Cards'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-500v-220h220v220H240Zm0 260v-220h220v220H240Zm260-260v-220h220v220H500Zm0 260v-220h220v220H500ZM120-120v-720h720v720H120Zm80-80h560v-560H200v560Z"/>
    </Icon>
  );
});

IconMaterialCardsFilled.displayName = 'OnesyIconMaterialCardsFilled';

export default IconMaterialCardsFilled;

import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSquareW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SquareW100'

      short_name='Square'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-172q-25 0-42.5-17.5T172-232v-496q0-25 17.5-42.5T232-788h496q25 0 42.5 17.5T788-728v496q0 25-17.5 42.5T728-172H232Zm0-28h496q14 0 23-9t9-23v-496q0-14-9-23t-23-9H232q-14 0-23 9t-9 23v496q0 14 9 23t23 9Zm-32 0v-560 560Z"/>
    </Icon>
  );
});

IconMaterialSquareW100.displayName = 'OnesyIconMaterialSquareW100';

export default IconMaterialSquareW100;

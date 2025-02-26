import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewStreamFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewStreamFilled'

      short_name='ViewStream'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-200v-240h720v240H120Zm0-320v-240h720v240H120Z"/>
    </Icon>
  );
});

IconMaterialViewStreamFilled.displayName = 'OnesyIconMaterialViewStreamFilled';

export default IconMaterialViewStreamFilled;

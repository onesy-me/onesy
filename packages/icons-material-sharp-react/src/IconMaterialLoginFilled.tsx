import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLoginFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LoginFilled'

      short_name='Login'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-120v-80h280v-560H480v-80h360v720H480Zm-80-160-55-58 102-102H120v-80h327L345-622l55-58 200 200-200 200Z"/>
    </Icon>
  );
});

IconMaterialLoginFilled.displayName = 'OnesyIconMaterialLoginFilled';

export default IconMaterialLoginFilled;

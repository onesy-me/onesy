import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWbSunnyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WbSunnyFilled'

      short_name='WbSunny'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-800v-120h80v120h-80Zm0 760v-120h80v120h-80Zm360-400v-80h120v80H800Zm-760 0v-80h120v80H40Zm708-252-56-56 70-72 58 58-72 70ZM198-140l-58-58 72-70 56 56-70 72Zm564 0-70-72 56-56 72 70-58 58ZM212-692l-72-70 58-58 70 72-56 56Zm268 452q-100 0-170-70t-70-170q0-100 70-170t170-70q100 0 170 70t70 170q0 100-70 170t-170 70Z"/>
    </Icon>
  );
});

IconMaterialWbSunnyFilled.displayName = 'OnesyIconMaterialWbSunnyFilled';

export default IconMaterialWbSunnyFilled;

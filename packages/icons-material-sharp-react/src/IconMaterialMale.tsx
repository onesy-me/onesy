import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMale = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Male'

      short_name='Male'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M800-800v240h-80v-103L561-505q19 28 29 59.5t10 65.5q0 92-64 156t-156 64q-92 0-156-64t-64-156q0-92 64-156t156-64q33 0 65 9.5t59 29.5l159-159H560v-80h240ZM380-520q-58 0-99 41t-41 99q0 58 41 99t99 41q58 0 99-41t41-99q0-58-41-99t-99-41Z"/>
    </Icon>
  );
});

IconMaterialMale.displayName = 'OnesyIconMaterialMale';

export default IconMaterialMale;

import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCountertopsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CountertopsW100'

      short_name='Countertops'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-212v-296h-80v-28h135q-22.69 0-38.84-16.45Q212-568.9 212-592v-156h194v156q0 23.1-16.45 39.55Q373.1-536 350-536h342v-113q0-29-19.77-50t-49-21q-29.23 0-49.73 21-20.5 21-20.5 50h-29q2-42 30-70.5t69-28.5q41 0 69 28.87 28 28.88 28 70.13v113h108v28h-80v296H212Zm28-352h138v-156H240v156Zm0 324h226v-268H240v268Zm254 0h226v-268H494v268ZM240-564h138-138Zm0 324h480-480Z"/>
    </Icon>
  );
});

IconMaterialCountertopsW100.displayName = 'OnesyIconMaterialCountertopsW100';

export default IconMaterialCountertopsW100;

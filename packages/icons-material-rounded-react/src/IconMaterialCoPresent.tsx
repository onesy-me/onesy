import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCoPresent = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CoPresent'

      short_name='CoPresent'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M840-120v-640H120v280q0 17-11.5 28.5T80-440q-17 0-28.5-11.5T40-480v-280q0-33 23.5-56.5T120-840h720q33 0 56.5 23.5T920-760v560q0 33-23.5 56.5T840-120ZM360-400q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T440-560q0-33-23.5-56.5T360-640q-33 0-56.5 23.5T280-560q0 33 23.5 56.5T360-480ZM120-80q-33 0-56.5-23.5T40-160v-32q0-34 17.5-62.5T104-298q62-31 126-46.5T360-360q66 0 130 15.5T616-298q29 15 46.5 43.5T680-192v32q0 33-23.5 56.5T600-80H120Zm0-80h480v-32q0-11-5.5-20T580-226q-54-27-109-40.5T360-280q-56 0-111 13.5T140-226q-9 5-14.5 14t-5.5 20v32Zm240-400Zm0 400Z"/>
    </Icon>
  );
});

IconMaterialCoPresent.displayName = 'OnesyIconMaterialCoPresent';

export default IconMaterialCoPresent;

import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCoPresentFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CoPresentFilled'

      short_name='CoPresent'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M840-120v-640H120v280q0 17-11.5 28.5T80-440q-17 0-28.5-11.5T40-480v-280q0-33 23.5-56.5T120-840h720q33 0 56.5 23.5T920-760v560q0 33-23.5 56.5T840-120ZM360-400q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM120-80q-33 0-56.5-23.5T40-160v-32q0-34 17.5-62.5T104-298q62-31 126-46.5T360-360q66 0 130 15.5T616-298q29 15 46.5 43.5T680-192v32q0 33-23.5 56.5T600-80H120Z"/>
    </Icon>
  );
});

IconMaterialCoPresentFilled.displayName = 'OnesyIconMaterialCoPresentFilled';

export default IconMaterialCoPresentFilled;

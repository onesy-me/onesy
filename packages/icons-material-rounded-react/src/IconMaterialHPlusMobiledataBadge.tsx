import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHPlusMobiledataBadge = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HPlusMobiledataBadge'

      short_name='HPlusMobiledataBadge'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120q-33 0-56.5-23.5T40-200v-560q0-33 23.5-56.5T120-840h720q33 0 56.5 23.5T920-760v560q0 33-23.5 56.5T840-120H120Zm0-80h720v-560H120v560Zm0 0v-560 560Zm140-240h160v120q0 17 11.5 28.5T460-280q17 0 28.5-11.5T500-320v-320q0-17-11.5-28.5T460-680q-17 0-28.5 11.5T420-640v120H260v-120q0-17-11.5-28.5T220-680q-17 0-28.5 11.5T180-640v320q0 17 11.5 28.5T220-280q17 0 28.5-11.5T260-320v-120Zm360 0v40q0 17 11.5 28.5T660-360q17 0 28.5-11.5T700-400v-40h40q17 0 28.5-11.5T780-480q0-17-11.5-28.5T740-520h-40v-40q0-17-11.5-28.5T660-600q-17 0-28.5 11.5T620-560v40h-40q-17 0-28.5 11.5T540-480q0 17 11.5 28.5T580-440h40Z"/>
    </Icon>
  );
});

IconMaterialHPlusMobiledataBadge.displayName = 'OnesyIconMaterialHPlusMobiledataBadge';

export default IconMaterialHPlusMobiledataBadge;

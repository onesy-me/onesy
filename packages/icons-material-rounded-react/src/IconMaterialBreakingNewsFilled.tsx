import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBreakingNewsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BreakingNewsFilled'

      short_name='BreakingNews'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-280q17 0 28.5-11.5T320-320q0-17-11.5-28.5T280-360q-17 0-28.5 11.5T240-320q0 17 11.5 28.5T280-280Zm0-400q-17 0-28.5 11.5T240-640v160q0 17 11.5 28.5T280-440q17 0 28.5-11.5T320-480v-160q0-17-11.5-28.5T280-680Zm400 400q17 0 28.5-11.5T720-320q0-17-11.5-28.5T680-360H480q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280h200Zm0-160q17 0 28.5-11.5T720-480q0-17-11.5-28.5T680-520H480q-17 0-28.5 11.5T440-480q0 17 11.5 28.5T480-440h200Zm0-160q17 0 28.5-11.5T720-640q0-17-11.5-28.5T680-680H480q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600h200ZM160-120q-33 0-56.5-23.5T80-200v-560q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v560q0 33-23.5 56.5T800-120H160Z"/>
    </Icon>
  );
});

IconMaterialBreakingNewsFilled.displayName = 'OnesyIconMaterialBreakingNewsFilled';

export default IconMaterialBreakingNewsFilled;

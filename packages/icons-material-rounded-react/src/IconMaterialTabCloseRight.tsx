import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTabCloseRight = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabCloseRight'

      short_name='TabCloseRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-424 86 86q11 11 28 11t28-11q11-11 11-28t-11-28l-86-86 86-86q11-11 11-28t-11-28q-11-11-28-11t-28 11l-86 86-86-86q-11-11-28-11t-28 11q-11 11-11 28t11 28l86 86-86 86q-11 11-11 28t11 28q11 11 28 11t28-11l86-86Zm287 264H640q-17 0-28.5-11.5T600-200q0-17 11.5-28.5T640-240h127l-36-36q-11-11-11-27.5t12-28.5q11-11 28-11t28 11l104 104q12 12 12 28t-12 28L788-68q-11 11-27.5 11.5T732-68q-11-11-11-28t11-28l35-36Zm-567-40v-560 560-1 1Zm0 80q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v280q0 17-11.5 28.5T800-440q-17 0-28.5-11.5T760-480v-280H200v560h280q17 0 28.5 11.5T520-160q0 17-11.5 28.5T480-120H200Z"/>
    </Icon>
  );
});

IconMaterialTabCloseRight.displayName = 'OnesyIconMaterialTabCloseRight';

export default IconMaterialTabCloseRight;

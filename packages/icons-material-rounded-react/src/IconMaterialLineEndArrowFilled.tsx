import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLineEndArrowFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineEndArrowFilled'

      short_name='LineEndArrow'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M501-239q-20 13-40.5 1.5T440-273v-167H120q-17 0-28.5-11.5T80-480q0-17 11.5-28.5T120-520h320v-167q0-24 20.5-35.5T501-721l326 207q19 12 19 34t-19 34L501-239Z"/>
    </Icon>
  );
});

IconMaterialLineEndArrowFilled.displayName = 'OnesyIconMaterialLineEndArrowFilled';

export default IconMaterialLineEndArrowFilled;

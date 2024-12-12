import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial10kFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='10kFilled'

      short_name='10k'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-360h60v-240H200v60h40v180Zm100 0h180v-240H340v240Zm60-60v-120h60v120h-60Zm160 60h60v-90l70 90h70l-90-120 90-120h-70l-70 90v-90h-60v240ZM120-120v-720h720v720H120Z"/>
    </Icon>
  );
});

IconMaterial10kFilled.displayName = 'OnesyIconMaterial10kFilled';

export default IconMaterial10kFilled;

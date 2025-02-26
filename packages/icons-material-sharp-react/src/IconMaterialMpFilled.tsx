import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMpFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MpFilled'

      short_name='Mp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-360h60v-180h40v120h60v-120h40v180h60v-240H240v240Zm300 0h60v-60h120v-180H540v240Zm60-120v-60h60v60h-60ZM120-120v-720h720v720H120Z"/>
    </Icon>
  );
});

IconMaterialMpFilled.displayName = 'OnesyIconMaterialMpFilled';

export default IconMaterialMpFilled;

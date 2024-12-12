import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTvGenFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TvGenFilled'

      short_name='TvGen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m227-200-22 66q-2 6-7 10t-12 4h-6q-8 0-14-6t-6-14v-60q-33 0-56.5-23.5T80-280v-440q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v440q0 33-23.5 56.5T800-200v61q0 8-5.5 13.5T781-120h-7q-6 0-11-3.5t-7-9.5l-22-67H227Z"/>
    </Icon>
  );
});

IconMaterialTvGenFilled.displayName = 'OnesyIconMaterialTvGenFilled';

export default IconMaterialTvGenFilled;

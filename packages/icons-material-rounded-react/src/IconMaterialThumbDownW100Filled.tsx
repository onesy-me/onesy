import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialThumbDownW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThumbDownW100Filled'

      short_name='ThumbDown'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M152-372q-23 0-41.5-18.5T92-432v-40q0-5 1-11t3-11l106-252q8-18 27-30t39-12h330q25 0 42.5 17.5T658-728v331q0 12-5 23.5T640-354L437-153q-7 7-15 9t-15-1q-7-3-10-11t-1-19l40-197H152Zm616-416q25 0 42.5 17.5T828-728v296q0 25-17.5 42.5T768-372h-22q-25 0-42.5-17.5T686-432v-297q0-25 17.5-42t42.5-17h22Z"/>
    </Icon>
  );
});

IconMaterialThumbDownW100Filled.displayName = 'OnesyIconMaterialThumbDownW100Filled';

export default IconMaterialThumbDownW100Filled;

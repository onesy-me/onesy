import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFeaturedVideoFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FeaturedVideoFilled'

      short_name='FeaturedVideo'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-400h360v-280H200v280ZM80-160v-640h800v640H80Z"/>
    </Icon>
  );
});

IconMaterialFeaturedVideoFilled.displayName = 'OnesyIconMaterialFeaturedVideoFilled';

export default IconMaterialFeaturedVideoFilled;

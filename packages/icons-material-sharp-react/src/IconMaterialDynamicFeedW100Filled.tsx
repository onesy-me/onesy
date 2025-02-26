import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDynamicFeedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DynamicFeedW100Filled'

      short_name='DynamicFeed'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M144-184v-268h28v240h320v28H144Zm148-148v-268h28v240h320v28H292Zm148-148v-296h376v296H440Zm28-28h320v-160H468v160Z"/>
    </Icon>
  );
});

IconMaterialDynamicFeedW100Filled.displayName = 'OnesyIconMaterialDynamicFeedW100Filled';

export default IconMaterialDynamicFeedW100Filled;

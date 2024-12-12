import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRepeatOneW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RepeatOneW100'

      short_name='RepeatOne'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M476-376v-180h-44v-28h72v208h-28ZM296-132 172-256l124-124 20 20-90 90h470v-160h28v188H226l90 90-20 20Zm-60-398v-188h498l-90-90 20-20 124 124-124 124-20-20 90-90H264v160h-28Z"/>
    </Icon>
  );
});

IconMaterialRepeatOneW100.displayName = 'OnesyIconMaterialRepeatOneW100';

export default IconMaterialRepeatOneW100;

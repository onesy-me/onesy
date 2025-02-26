import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSegmentW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SegmentW100'

      short_name='Segment'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M412-278v-28h376v28H412Zm0-188v-28h376v28H412ZM172-654v-28h616v28H172Z"/>
    </Icon>
  );
});

IconMaterialSegmentW100.displayName = 'OnesyIconMaterialSegmentW100';

export default IconMaterialSegmentW100;

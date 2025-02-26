import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKeyVisualizerW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyVisualizerW100'

      short_name='KeyVisualizer'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-28h68v28h-68Zm0-147v-28h251v28H172Zm0-147v-28h616v28H172Zm0-147v-28h251v28H172Zm0-147v-28h68v28h-68Zm183 588v-28h68v28h-68Zm0-588v-28h68v28h-68Zm182 588v-28h68v28h-68Zm0-147v-28h251v28H537Zm0-294v-28h251v28H537Zm0-147v-28h68v28h-68Zm183 588v-28h68v28h-68Zm0-588v-28h68v28h-68Z"/>
    </Icon>
  );
});

IconMaterialKeyVisualizerW100.displayName = 'OnesyIconMaterialKeyVisualizerW100';

export default IconMaterialKeyVisualizerW100;

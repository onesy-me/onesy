import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLightbulb2W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Lightbulb2W100Filled'

      short_name='Lightbulb2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M359-260v-146q-50-32-78.5-83T252-599q0-95 66.5-162T480-828q95 0 161.5 66.5T708-600q0 60-28.5 111T601-406v146H359Zm36 128v-28h170v28H395Z"/>
    </Icon>
  );
});

IconMaterialLightbulb2W100Filled.displayName = 'OnesyIconMaterialLightbulb2W100Filled';

export default IconMaterialLightbulb2W100Filled;

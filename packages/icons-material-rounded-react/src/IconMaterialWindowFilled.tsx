import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWindowFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WindowFilled'

      short_name='Window'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M520-440h320v240q0 33-23.5 56.5T760-120H520v-320Zm0-80v-320h240q33 0 56.5 23.5T840-760v240H520Zm-80 0H120v-240q0-33 23.5-56.5T200-840h240v320Zm0 80v320H200q-33 0-56.5-23.5T120-200v-240h320Z"/>
    </Icon>
  );
});

IconMaterialWindowFilled.displayName = 'OnesyIconMaterialWindowFilled';

export default IconMaterialWindowFilled;

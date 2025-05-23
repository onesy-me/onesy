import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTrainW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TrainW100Filled'

      short_name='Train'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-360v-360q0-35 21-56.5t57.5-33q36.5-11.5 85.5-15t104-3.5q56 0 104.5 3.5t85.01 14.84q36.52 11.35 57.5 33Q748-755 748-720v360q0 45-31.5 76.5T640-252l60 60v20h-20l-80-80H360l-80 80h-20v-20l60-60q-45 0-76.5-31.5T212-360Zm28-148h226v-196H240v196Zm254 0h226v-196H494v196ZM339.77-340q17.23 0 28.73-11.27 11.5-11.26 11.5-28.5 0-17.23-11.27-28.73-11.26-11.5-28.5-11.5-17.23 0-28.73 11.27-11.5 11.26-11.5 28.5 0 17.23 11.27 28.73 11.26 11.5 28.5 11.5Zm280 0q17.23 0 28.73-11.27 11.5-11.26 11.5-28.5 0-17.23-11.27-28.73-11.26-11.5-28.5-11.5-17.23 0-28.73 11.27-11.5 11.26-11.5 28.5 0 17.23 11.27 28.73 11.26 11.5 28.5 11.5Z"/>
    </Icon>
  );
});

IconMaterialTrainW100Filled.displayName = 'OnesyIconMaterialTrainW100Filled';

export default IconMaterialTrainW100Filled;

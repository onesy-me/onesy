import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTrainW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TrainW100'

      short_name='Train'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-360v-360q0-35 21-56.5t57.5-33q36.5-11.5 85.5-15t104-3.5q56 0 104.5 3.5t85 15q36.5 11.5 57.5 33t21 56.5v360q0 45-31.5 76.5T640-252l60 60v20h-20l-80-80H360l-80 80h-20v-20l60-60q-45 0-76.5-31.5T212-360Zm268-440q-121 0-176 16.5T240-732h480q-9-35-64-51.5T480-800ZM240-508h226v-196H240v196Zm400 28H240h480-80Zm-146-28h226v-196H494v196ZM340-340q17 0 28.5-11.5T380-380q0-17-11.5-28.5T340-420q-17 0-28.5 11.5T300-380q0 17 11.5 28.5T340-340Zm280 0q17 0 28.5-11.5T660-380q0-17-11.5-28.5T620-420q-17 0-28.5 11.5T580-380q0 17 11.5 28.5T620-340Zm-300 60h320q33 0 56.5-23.5T720-360v-120H240v120q0 33 23.5 56.5T320-280Zm160-452h240-480 240Z"/>
    </Icon>
  );
});

IconMaterialTrainW100.displayName = 'OnesyIconMaterialTrainW100';

export default IconMaterialTrainW100;

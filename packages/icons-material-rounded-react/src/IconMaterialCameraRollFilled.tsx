import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCameraRollFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CameraRollFilled'

      short_name='CameraRoll'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-80q-33 0-56.5-23.5T80-160v-600q0-33 23.5-56.5T160-840h40v-40q0-17 11.5-28.5T240-920h160q17 0 28.5 11.5T440-880v40h40q33 0 56.5 23.5T560-760h240q33 0 56.5 23.5T880-680v440q0 33-23.5 56.5T800-160H560q0 33-23.5 56.5T480-80H160Zm240-480q17 0 28.5-11.5T440-600q0-17-11.5-28.5T400-640q-17 0-28.5 11.5T360-600q0 17 11.5 28.5T400-560Zm160 0q17 0 28.5-11.5T600-600q0-17-11.5-28.5T560-640q-17 0-28.5 11.5T520-600q0 17 11.5 28.5T560-560Zm160 0q17 0 28.5-11.5T760-600q0-17-11.5-28.5T720-640q-17 0-28.5 11.5T680-600q0 17 11.5 28.5T720-560ZM400-280q17 0 28.5-11.5T440-320q0-17-11.5-28.5T400-360q-17 0-28.5 11.5T360-320q0 17 11.5 28.5T400-280Zm160 0q17 0 28.5-11.5T600-320q0-17-11.5-28.5T560-360q-17 0-28.5 11.5T520-320q0 17 11.5 28.5T560-280Zm160 0q17 0 28.5-11.5T760-320q0-17-11.5-28.5T720-360q-17 0-28.5 11.5T680-320q0 17 11.5 28.5T720-280Z"/>
    </Icon>
  );
});

IconMaterialCameraRollFilled.displayName = 'OnesyIconMaterialCameraRollFilled';

export default IconMaterialCameraRollFilled;

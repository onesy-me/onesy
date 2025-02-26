import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEyeTrackingFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EyeTrackingFilled'

      short_name='EyeTracking'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-40q-33 0-56.5-23.5T40-120v-80q0-17 11.5-28.5T80-240q17 0 28.5 11.5T120-200v80h80q17 0 28.5 11.5T240-80q0 17-11.5 28.5T200-40h-80Zm720 0h-80q-17 0-28.5-11.5T720-80q0-17 11.5-28.5T760-120h80v-80q0-17 11.5-28.5T880-240q17 0 28.5 11.5T920-200v80q0 33-23.5 56.5T840-40ZM480-220q-106 0-196-56T143-429q-6-12-9-24.5t-3-25.5q0-14 3-27t9-25q51-97 141-153t196-56q106 0 196 56t141 153q6 12 9 24.5t3 26.5q0 14-3 26.5t-9 24.5q-51 97-141 153t-196 56Zm0-120q58 0 99-41t41-99q0-58-41-99t-99-41q-58 0-99 41t-41 99q0 58 41 99t99 41Zm0-80q-25 0-42.5-17.5T420-480q0-25 17.5-42.5T480-540q25 0 42.5 17.5T540-480q0 25-17.5 42.5T480-420ZM200-840h-80v120H40v-120q0-33 23.5-56.5T120-920h80q17 0 28.5 11.5T240-880q0 17-11.5 28.5T200-840Zm720 0v80q0 17-11.5 28.5T880-720q-17 0-28.5-11.5T840-760v-80h-80q-17 0-28.5-11.5T720-880q0-17 11.5-28.5T760-920h80q33 0 56.5 23.5T920-840Z"/>
    </Icon>
  );
});

IconMaterialEyeTrackingFilled.displayName = 'OnesyIconMaterialEyeTrackingFilled';

export default IconMaterialEyeTrackingFilled;

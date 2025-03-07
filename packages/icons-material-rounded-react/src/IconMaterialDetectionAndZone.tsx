import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDetectionAndZone = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DetectionAndZone'

      short_name='DetectionAndZone'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-720v-80q0-33 23.5-56.5T160-880h80q17 0 28.5 11.5T280-840q0 17-11.5 28.5T240-800h-80v80q0 17-11.5 28.5T120-680q-17 0-28.5-11.5T80-720Zm80 640q-33 0-56.5-23.5T80-160v-80q0-17 11.5-28.5T120-280q17 0 28.5 11.5T160-240v80h80q17 0 28.5 11.5T280-120q0 17-11.5 28.5T240-80h-80Zm640 0h-80q-17 0-28.5-11.5T680-120q0-17 11.5-28.5T720-160h80v-80q0-17 11.5-28.5T840-280q17 0 28.5 11.5T880-240v80q0 33-23.5 56.5T800-80Zm0-640v-80h-80q-17 0-28.5-11.5T680-840q0-17 11.5-28.5T720-880h80q33 0 56.5 23.5T880-800v80q0 17-11.5 28.5T840-680q-17 0-28.5-11.5T800-720ZM540-580q-33 0-56.5-23.5T460-660q0-33 23.5-56.5T540-740q33 0 56.5 23.5T620-660q0 33-23.5 56.5T540-580Zm-28 340H352l40-204-72 28v96q0 17-11.5 28.5T280-280q-17 0-28.5-11.5T240-320v-122q0-12 6.5-21.5T264-478l134-58q35-15 51.5-19.5T480-560q21 0 39 11t29 29l40 64q21 34 54.5 59t77.5 33q17 3 28.5 15t11.5 29q0 17-11.5 28t-27.5 9q-54-8-101-33.5T540-380l-28 140Z"/>
    </Icon>
  );
});

IconMaterialDetectionAndZone.displayName = 'OnesyIconMaterialDetectionAndZone';

export default IconMaterialDetectionAndZone;

import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDeleteSweepFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeleteSweepFilled'

      short_name='DeleteSweep'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-200q-33 0-56.5-23.5T120-280v-360q-17 0-28.5-11.5T80-680q0-17 11.5-28.5T120-720h120v-20q0-17 11.5-28.5T280-780h80q17 0 28.5 11.5T400-740v20h120q17 0 28.5 11.5T560-680q0 17-11.5 28.5T520-640v360q0 33-23.5 56.5T440-200H200Zm440-40q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320h80q17 0 28.5 11.5T760-280q0 17-11.5 28.5T720-240h-80Zm0-160q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480h160q17 0 28.5 11.5T840-440q0 17-11.5 28.5T800-400H640Zm0-160q-17 0-28.5-11.5T600-600q0-17 11.5-28.5T640-640h200q17 0 28.5 11.5T880-600q0 17-11.5 28.5T840-560H640Z"/>
    </Icon>
  );
});

IconMaterialDeleteSweepFilled.displayName = 'OnesyIconMaterialDeleteSweepFilled';

export default IconMaterialDeleteSweepFilled;

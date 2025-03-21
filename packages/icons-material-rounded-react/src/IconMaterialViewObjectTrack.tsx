import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewObjectTrack = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewObjectTrack'

      short_name='ViewObjectTrack'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M300-160q-58 0-99-41t-41-99q0-58 41-99t99-41h440q58 0 99 41t41 99q0 58-41 99t-99 41H300Zm0-80h440q25 0 42.5-17.5T800-300q0-25-17.5-42.5T740-360H300q-25 0-42.5 17.5T240-300q0 25 17.5 42.5T300-240Zm-80-280q-58 0-99-41t-41-99q0-58 41-99t99-41h440q58 0 99 41t41 99q0 58-41 99t-99 41H220Zm0-80h440q25 0 42.5-17.5T720-660q0-25-17.5-42.5T660-720H220q-25 0-42.5 17.5T160-660q0 25 17.5 42.5T220-600Zm300 300Zm-80-360Z"/>
    </Icon>
  );
});

IconMaterialViewObjectTrack.displayName = 'OnesyIconMaterialViewObjectTrack';

export default IconMaterialViewObjectTrack;

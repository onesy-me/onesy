import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLibraryMusicFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LibraryMusicFilled'

      short_name='LibraryMusic'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M500-360q42 0 71-29t29-71v-220h80q17 0 28.5-11.5T720-720q0-17-11.5-28.5T680-760h-80q-17 0-28.5 11.5T560-720v180q-13-10-28-15t-32-5q-42 0-71 29t-29 71q0 42 29 71t71 29ZM320-240q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320ZM160-80q-33 0-56.5-23.5T80-160v-520q0-17 11.5-28.5T120-720q17 0 28.5 11.5T160-680v520h520q17 0 28.5 11.5T720-120q0 17-11.5 28.5T680-80H160Z"/>
    </Icon>
  );
});

IconMaterialLibraryMusicFilled.displayName = 'OnesyIconMaterialLibraryMusicFilled';

export default IconMaterialLibraryMusicFilled;

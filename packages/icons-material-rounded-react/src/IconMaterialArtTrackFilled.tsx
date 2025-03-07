import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArtTrackFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArtTrackFilled'

      short_name='ArtTrack'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-200q-33 0-56.5-23.5T40-280v-400q0-33 23.5-56.5T120-760h400q33 0 56.5 23.5T600-680v400q0 33-23.5 56.5T520-200H120Zm180-200-40-53q-6-8-16-7.5t-16 8.5l-45 60q-8 10-1.5 21t18.5 11h240q12 0 18-11t-2-21l-64-87q-6-8-16-8t-16 8l-60 79Zm420 200q-17 0-28.5-11.5T680-240v-480q0-17 11.5-28.5T720-760q17 0 28.5 11.5T760-720v480q0 17-11.5 28.5T720-200Zm160 0q-17 0-28.5-11.5T840-240v-480q0-17 11.5-28.5T880-760q17 0 28.5 11.5T920-720v480q0 17-11.5 28.5T880-200Z"/>
    </Icon>
  );
});

IconMaterialArtTrackFilled.displayName = 'OnesyIconMaterialArtTrackFilled';

export default IconMaterialArtTrackFilled;

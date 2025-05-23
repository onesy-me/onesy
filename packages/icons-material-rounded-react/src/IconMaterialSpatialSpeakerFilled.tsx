import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSpatialSpeakerFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpatialSpeakerFilled'

      short_name='SpatialSpeaker'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-360q-33 0-56.5-23.5T320-440v-320q0-33 23.5-56.5T400-840h160q33 0 56.5 23.5T640-760v320q0 33-23.5 56.5T560-360H400ZM319-80q-116-1-197-82T40-359q0-17 11.5-29T80-400q17 0 28.5 11.5T120-360q0 83 58.5 141.5T320-160q17 0 28.5 11.5T360-120q0 17-12 28.5T319-80Zm322 0q-17 0-29-11.5T600-120q0-17 11.5-28.5T640-160q83 0 141.5-58.5T840-360q0-17 11.5-28.5T880-400q17 0 28.5 11.5T920-360q-1 116-82 197.5T641-80ZM319-220q-57-1-97.5-41.5T180-359q0-17 11.5-29t28.5-12q17 0 28.5 11.5T260-360q0 12 4.5 23t13 19.5q8.5 8.5 19.5 13t23 4.5q17 0 28.5 11.5T360-260q0 17-12 28.5T319-220Zm322 0q-17 0-29-11.5T600-260q0-17 11.5-28.5T640-300q12 0 23-4.5t19.5-13q8.5-8.5 13-19.5t4.5-23q0-17 11.5-28.5T740-400q17 0 28.5 11.5T780-360q-1 58-41 98.5T641-220Z"/>
    </Icon>
  );
});

IconMaterialSpatialSpeakerFilled.displayName = 'OnesyIconMaterialSpatialSpeakerFilled';

export default IconMaterialSpatialSpeakerFilled;

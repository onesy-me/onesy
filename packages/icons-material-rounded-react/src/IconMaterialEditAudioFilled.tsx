import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEditAudioFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditAudioFilled'

      short_name='EditAudio'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m233-200 35 36q11 11 11.5 27.5T268-108q-11 11-28 11t-28-11L108-212q-6-6-8.5-13T97-240q0-8 2.5-15t8.5-13l104-104q11-11 27.5-11t28.5 11q12 12 12 28.5T268-315l-35 35h494l-35-36q-11-11-11.5-27.5T692-372q11-11 28-11t28 11l104 104q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L748-108q-11 11-27.5 11T692-108q-12-12-12-28.5t12-28.5l35-35H233Zm207-280v-400q0-17 11.5-28.5T480-920q17 0 28.5 11.5T520-880v400q0 17-11.5 28.5T480-440q-17 0-28.5-11.5T440-480Zm-160-80v-240q0-17 11.5-28.5T320-840q17 0 28.5 11.5T360-800v240q0 17-11.5 28.5T320-520q-17 0-28.5-11.5T280-560Zm320 0v-240q0-17 11.5-28.5T640-840q17 0 28.5 11.5T680-800v240q0 17-11.5 28.5T640-520q-17 0-28.5-11.5T600-560ZM120-660v-40q0-17 11.5-28.5T160-740q17 0 28.5 11.5T200-700v40q0 17-11.5 28.5T160-620q-17 0-28.5-11.5T120-660Zm640 0v-40q0-17 11.5-28.5T800-740q17 0 28.5 11.5T840-700v40q0 17-11.5 28.5T800-620q-17 0-28.5-11.5T760-660Z"/>
    </Icon>
  );
});

IconMaterialEditAudioFilled.displayName = 'OnesyIconMaterialEditAudioFilled';

export default IconMaterialEditAudioFilled;

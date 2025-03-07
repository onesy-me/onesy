import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTrackpadInputW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TrackpadInputW100'

      short_name='TrackpadInput'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M584.85-132q-18.85 0-35.35-7t-30.51-20.85L374-304q-8-8-8-20t8-21q8-8 18-9.5t21 1.5l85 18v-278q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v277q0 14-11.5 23.5T489-307l-102-25 151 153q10 10 21.5 14.5T585-160h131q43.72 0 74.86-31.14Q822-222.27 822-266v-117q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98v117q0 56-39 95t-95 39H584.85Zm35.11-250q-5.96 0-9.96-4.02-4-4.03-4-9.98v-147q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v147q0 5.95-4.04 9.98-4.03 4.02-10 4.02Zm108 0q-5.96 0-9.96-4.02-4-4.03-4-9.98v-87q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98v87q0 5.95-4.04 9.98-4.03 4.02-10 4.02ZM716-160H538h178Zm-524-92q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h536q26 0 43 17t17 43v117q0 5.95-4.04 9.97-4.03 4.03-10 4.03-5.96 0-9.96-4.03-4-4.02-4-9.97v-117q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v416q0 12 10 22t22 10h72q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4h-72Z"/>
    </Icon>
  );
});

IconMaterialTrackpadInputW100.displayName = 'OnesyIconMaterialTrackpadInputW100';

export default IconMaterialTrackpadInputW100;

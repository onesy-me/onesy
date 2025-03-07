import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial1xMobiledataBadge = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='1xMobiledataBadge'

      short_name='1xMobiledataBadge'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120q-33 0-56.5-23.5T40-200v-560q0-33 23.5-56.5T120-840h720q33 0 56.5 23.5T920-760v560q0 33-23.5 56.5T840-120H120Zm0-80h720v-560H120v560Zm0 0v-560 560Zm160-400v280q0 17 11.5 28.5T320-280q17 0 28.5-11.5T360-320v-320q0-17-11.5-28.5T320-680h-80q-17 0-28.5 11.5T200-640q0 17 11.5 28.5T240-600h40Zm330 193 60 109q5 8 13 13t18 5q20 0 30-17.5t0-34.5l-81-148 82-148q10-17-.5-34.5T701-680q-10 0-18 5t-13 13l-60 109-60-109q-5-8-13-13t-18-5q-20 0-30 17.5t0 34.5l81 148-82 148q-10 17 .5 34.5T519-280q10 0 18-5t13-13l60-109Z"/>
    </Icon>
  );
});

IconMaterial1xMobiledataBadge.displayName = 'OnesyIconMaterial1xMobiledataBadge';

export default IconMaterial1xMobiledataBadge;

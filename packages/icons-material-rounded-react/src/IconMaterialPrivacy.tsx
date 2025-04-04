import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPrivacy = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Privacy'

      short_name='Privacy'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M394-679q2 0 3-.5t3-.5q33 0 56.5 23.5T480-600v7l-86-86Zm452 385L720-420v67l-80-80v-287H353l-80-80h367q33 0 56.5 23.5T720-720v180l126-126q10-10 22-5t12 19v344q0 14-12 19t-22-5ZM640-160H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800l80 80h-80v480h212v-42q-69-10-116-58.5T201-456q-2-11 7-17.5t20-6.5q11 0 20 6t11 17q8 51 47.5 85.5T400-337q33 0 62.5-14.5T512-392l41 41q-24 29-56 46.5T428-282v42h212v-80l80 80q0 33-23.5 56.5T640-160ZM794-54 437-411q-9 5-18 8t-19 3q-33 0-56.5-23.5T320-480v-48L54-794q-11-11-11-28t11-28q11-11 28-11t28 11l740 740q11 11 11 28t-11 28q-11 11-28 11t-28-11ZM384-464Zm113-113ZM372-240h56-56Z"/>
    </Icon>
  );
});

IconMaterialPrivacy.displayName = 'OnesyIconMaterialPrivacy';

export default IconMaterialPrivacy;

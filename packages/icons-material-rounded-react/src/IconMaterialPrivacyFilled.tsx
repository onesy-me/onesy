import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPrivacyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrivacyFilled'

      short_name='Privacy'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M794-54 54-794q-11-11-11-28t11-28q11-11 28-11t28 11l740 740q11 11 11 28t-11 28q-11 11-28 11t-28-11Zm52-240L720-420v67L480-593v-7q0-33-23.5-56.5T400-680q-2 0-3 .5t-3 .5L273-800h367q33 0 56.5 23.5T720-720v180l126-126q10-10 22-5t12 19v344q0 14-12 19t-22-5ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800l560 560q0 33-23.5 56.5T640-160H428v-122q37-5 69-22.5t56-46.5l-41-41q-20 26-49.5 40.5T400-337q-53 0-92.5-33.5T259-455q-2-11-11-18t-20-7q-12 0-20 8t-6 19q9 66 55.5 113.5T372-282v122H160Zm160-368v48q0 33 23.5 56.5T400-400q10 0 19-3t18-8L320-528Z"/>
    </Icon>
  );
});

IconMaterialPrivacyFilled.displayName = 'OnesyIconMaterialPrivacyFilled';

export default IconMaterialPrivacyFilled;

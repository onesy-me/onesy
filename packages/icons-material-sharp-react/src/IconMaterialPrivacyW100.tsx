import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPrivacyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrivacyW100'

      short_name='Privacy'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M405-661q5-2 11-2.5t12-.5q26 0 45 19t19 45v26l-87-87Zm401 311L696-460v90l-28-28v-322H346l-28-28h378v248l110-110v260ZM694-212H160v-534h46l26 26h-44v480h228v-68q-63-5-108-49t-51-107h28q5 55 46 91.5t97 36.5q33 0 63.5-14t50.5-40l19 19q-23 28-54.5 44T440-308v68h228v-44l26 26v46Zm88 42-20 20-286-286q-9 11-21.5 15.5T428-416q-26 0-45-19t-19-45v-68L118-794l20-20 644 644ZM436-476Zm71-83Zm-91 319h24-24Z"/>
    </Icon>
  );
});

IconMaterialPrivacyW100.displayName = 'OnesyIconMaterialPrivacyW100';

export default IconMaterialPrivacyW100;

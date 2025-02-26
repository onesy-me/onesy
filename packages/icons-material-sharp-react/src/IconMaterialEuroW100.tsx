import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEuroW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EuroW100'

      short_name='Euro'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M602-172q-115 0-194.5-63.5T298-396H158v-28h135q-5-23-4.5-55.5T293-536H158v-28h142q29-97 108-160.5T602-788q57 0 108 18t93 50l-20 19q-38-28-84-43.5T602-760q-104 0-174.5 57T329-564h267v28H322q-5 23-5 56t5 56h274v28H328q29 82 99.5 139T602-200q51 0 97-15.5t84-43.5l20 19q-42 32-93 50t-108 18Z"/>
    </Icon>
  );
});

IconMaterialEuroW100.displayName = 'OnesyIconMaterialEuroW100';

export default IconMaterialEuroW100;

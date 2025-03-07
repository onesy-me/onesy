import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAdsClickFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AdsClickFilled'

      short_name='AdsClick'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-640q-66 0-113 47t-47 113q0 45 22.5 83t62.5 59q16 8 22.5 23.5T427-283q-7 14-21 21t-28 0q-63-30-100.5-89T240-480q0-100 70-170t170-70q71 0 130.5 37.5T699-580q6 14-.5 28T678-532q-16 7-32 0t-24-23q-21-40-59-62.5T480-640Zm0-160q-134 0-227 93t-93 227q0 126 83 216t208 102q17 2 29.5 15t11.5 30q-1 17-12.5 28T451-79q-78-5-145.5-39t-118-88.5q-50.5-54.5-79-125T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q157 0 273.5 107T881-509q2 16-9.5 27.5T843-469q-17 1-30.5-11T797-509q-15-120-104.5-205.5T480-800Zm302 700L650-231l-30 91q-5 14-19 13.5T582-141l-91-303q-4-11 5-20t20-5l303 91q14 5 14.5 19T820-340l-91 30 132 132q17 17 17 39t-17 39q-17 17-39.5 17T782-100Z"/>
    </Icon>
  );
});

IconMaterialAdsClickFilled.displayName = 'OnesyIconMaterialAdsClickFilled';

export default IconMaterialAdsClickFilled;

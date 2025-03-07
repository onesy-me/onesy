import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSceneW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SceneW100'

      short_name='Scene'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M826-106v-574q0-43.72-31.14-74.86T720-786h-66v52q0 12-8 20t-20 8H468q-17 0-23.5-13.5T444-747l57-124q6-13 14.5-18t24.5-5h86q12 0 20 8t8 20v52h66q56 0 95 39t39 95v574h-28ZM468-734h158v-132h-99l-59 132ZM200-106q-39.95 0-66.98-27.02Q106-160.05 106-200v-100q0-30 21-52t59-22v-100q0-24.75 17.63-42.38Q221.25-534 246-534h308q24.75 0 42.38 17.62Q614-498.75 614-474v100q38 0 59 21t21 53v100q0 39.95-27.03 66.98Q639.95-106 600-106H200Zm14-368v106q18 9 29 29.5t11 38.5v46h292v-46q0-18 11-38.5t29-29.5v-106q0-14-9-23t-23-9H246q-14 0-23 9t-9 23Zm-14 340h400q29.7 0 47.85-20.63Q666-175.25 666-200v-100q0-20.7-12.71-33.35-12.7-12.65-33.5-12.65-20.79 0-33.29 12.65T574-300v74H226v-74q0-20.7-12.71-33.35-12.7-12.65-33.5-12.65-20.79 0-33.29 12.65T134-300v100q0 24.75 18.15 45.37Q170.3-134 200-134Zm346-120H254h292ZM214-506h372-372Zm12 372h348-348Z"/>
    </Icon>
  );
});

IconMaterialSceneW100.displayName = 'OnesyIconMaterialSceneW100';

export default IconMaterialSceneW100;

import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWaterW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterW100'

      short_name='Water'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M106-280v-30q29-5 46-20.5t62-15.5q48 0 69.5 20t63.5 20q42 0 63.5-20t69.5-20q48 0 69.5 20t63.5 20q42 0 63.5-20t69.5-20q45 0 62 15.5t46 20.5v30q-30-6-51.5-22T746-318q-41 0-63 20t-70 20q-48 0-69.5-20T480-318q-42 0-63.5 20T347-278q-48 0-70-20t-63-20q-36 0-56 16t-52 22Zm0-148v-30q29-5 46-20.5t62-15.5q48 0 69.5 20t63.5 20q42 0 63.5-20t69.5-20q48 0 69.5 20t63.5 20q42 0 63.5-20t69.5-20q45 0 62 15.5t46 20.5v30q-30-6-51.5-22T746-466q-41 0-63 20t-70 20q-48 0-69.5-20T480-466q-42 0-63.5 20T347-426q-48 0-70-20t-63-20q-36 0-56 16t-52 22Zm0-148v-30q29-5 46-20.5t62-15.5q48 0 69.5 20t63.5 20q42 0 63.5-20t69.5-20q48 0 69.5 20t63.5 20q42 0 63.5-20t69.5-20q45 0 62 15.5t46 20.5v30q-30-6-51.5-22T746-614q-41 0-63 20t-70 20q-48 0-69.5-20T480-614q-42 0-63.5 20T347-574q-48 0-70-20t-63-20q-36 0-57 16t-51 22Z"/>
    </Icon>
  );
});

IconMaterialWaterW100.displayName = 'OnesyIconMaterialWaterW100';

export default IconMaterialWaterW100;

import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFamiliarFaceAndZoneW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FamiliarFaceAndZoneW100Filled'

      short_name='FamiliarFaceAndZone'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480.16-212Q368-212 290-289.84t-78-190Q212-592 289.84-670t190-78Q592-748 670-670.16t78 190Q748-368 670.16-290t-190 78Zm-.16-28q100 0 170-70t70-170q0-17.52-2.5-34.52-2.5-17-7.5-33.48-16 4-32.25 6t-32.5 2Q577-540 516.5-569.5T413-651q-24 58-68.5 101.5T240-485q0 100 70 172.5T480-240Zm-89.81-173q-15.8 0-26.5-10.69-10.69-10.7-10.69-26.5 0-15.81 10.69-27.31 10.7-11.5 26.5-11.5 15.81 0 27.31 11.5Q429-466 429-450.19q0 15.8-11.5 26.5Q406-413 390.19-413Zm180 0q-15.8 0-26.5-10.69-10.69-10.7-10.69-26.5 0-15.81 10.69-27.31 10.7-11.5 26.5-11.5 15.81 0 27.31 11.5Q609-466 609-450.19q0 15.8-11.5 26.5Q586-413 570.19-413ZM92-720v-148h148v28H120v120H92Zm0 628v-148h28v120h120v28H92Zm628 0v-28h120v-120h28v148H720Zm120-628v-120H720v-28h148v148h-28Z"/>
    </Icon>
  );
});

IconMaterialFamiliarFaceAndZoneW100Filled.displayName = 'OnesyIconMaterialFamiliarFaceAndZoneW100Filled';

export default IconMaterialFamiliarFaceAndZoneW100Filled;

import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialActivityZoneW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ActivityZoneW100'

      short_name='ActivityZone'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-172q-28.33 0-48.17-19.83Q172-211.67 172-240q0-25 15.5-43.5T226-307v-346q-23-5-38.5-23.5T172-720q0-28.33 19.83-48.17Q211.67-788 240-788q25 0 43.5 15.5T307-734h346q5-23 23.72-38.5Q695.45-788 720-788q28.33 0 48.17 19.83Q788-748.33 788-720q0 24.55-15.5 43.28Q757-658 734-653v346q23 5 38.5 23.5T788-240q0 28.33-19.83 48.17Q748.33-172 720-172q-25 0-43.5-15.5T653-226H307q-5 23-23.5 38.5T240-172Zm0-508q17 0 28.5-11.5T280-720q0-17-11.5-28.5T240-760q-17 0-28.5 11.5T200-720q0 17 11.5 28.5T240-680Zm480 0q17 0 28.5-11.5T760-720q0-17-11.5-28.5T720-760q-17 0-28.5 11.5T680-720q0 17 11.5 28.5T720-680ZM307-254h346q5-20 19-34t34-19v-346q-20-4-34.5-18.5T653-706H307q-5 20-19 34t-34 19v346q20 5 34 19t19 34Zm413 54q17 0 28.5-11.5T760-240q0-17-11.5-28.5T720-280q-17 0-28.5 11.5T680-240q0 17 11.5 28.5T720-200Zm-480 0q17 0 28.5-11.5T280-240q0-17-11.5-28.5T240-280q-17 0-28.5 11.5T200-240q0 17 11.5 28.5T240-200Zm0-520Zm480 0Zm0 480Zm-480 0Z"/>
    </Icon>
  );
});

IconMaterialActivityZoneW100.displayName = 'OnesyIconMaterialActivityZoneW100';

export default IconMaterialActivityZoneW100;

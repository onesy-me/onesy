import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialParagliding = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Paragliding'

      short_name='Paragliding'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-280q-33 0-56.5-23.5T400-360q0-33 23.5-56.5T480-440q33 0 56.5 23.5T560-360q0 33-23.5 56.5T480-280ZM360 0v-144q-77-26-114.5-86T201-366q-2-15 10.5-24.5T240-400q16 0 28 10t14 25q8 84 58.5 124.5T480-200q88 0 138-40.5T678-362q2-17 13.5-27.5T720-400q17 0 28.5 11t9.5 27q-7 75-44.5 133.5T600-144V0H360ZM190-462l-70-166q-5 3-17 10.5T80-610q-17 0-28.5-11.5T40-650v-140q0-71 129-120.5T480-960q182 0 311 49.5T920-790v140q0 17-11.5 28.5T880-610q-11 0-23-7.5T840-628l-70 164q-5 11-14.5 17.5T734-440h-23q-14 0-24.5-8T673-470l-53-221q-33-5-68-7t-72-2q-37 0-72 2t-68 7l-53 223q-3 13-13 20.5t-23 7.5h-27q-11 0-20-5.5T190-462Zm45-48 41-171q-28 6-53 13t-48 16l60 142Zm490-1 60-141q-23-9-48-16t-53-13l41 170ZM120-717q71-30 163.5-46.5T480-780q104 0 196.5 16.5T840-717v-71q-5-10-30.5-25.5t-71-30.5q-45.5-15-110-25.5T480-880q-84 0-148.5 10.5t-110 25.5q-45.5 15-71 30.5T120-788v71Zm360-163Z"/>
    </Icon>
  );
});

IconMaterialParagliding.displayName = 'OnesyIconMaterialParagliding';

export default IconMaterialParagliding;

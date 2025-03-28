import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOphthalmology = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Ophthalmology'

      short_name='Ophthalmology'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-840q12-12 28.5-12t28.5 12l21 21q12 12 15.5 28.5T492-758q-5 17-18 28t-30 13q-69 11-121.5 56.5T250-548q-4 13-14 20.5t-24 7.5h-52q-17 0-28.5-11.5T120-560q0-17 11.5-28.5T160-600h23q29-69 84.5-119T395-789q-8-12-7-26t12-25Zm200 360q0-44 16.5-84t53.5-62q-17-23-38.5-40.5T585-696q-15-8-22.5-22t-2.5-30q5-16 20-24t30-1q48 22 86 58.5t64 84.5q42 20 61 61.5t19 88.5q0 47-19 88.5T760-330q-25 47-63 83.5T611-188q-16 7-31 0t-20-24q-5-16 3-30.5t23-22.5q25-12 46-29.5t38-39.5q-37-22-53.5-62T600-480Zm120 80q15 0 27.5-24.5T760-480q0-31-12.5-55.5T720-560q-15 0-27.5 24.5T680-480q0 31 12.5 55.5T720-400ZM395-115q-11-11-11-28t11-29q-72-20-128-69.5T183-360h-23q-17 0-28.5-11.5T120-400q0-17 11.5-28.5T160-440h52q14 0 24 7.5t14 20.5q20 67 72.5 112.5T444-243q17 2 30 13.5t18 27.5q5 16 1.5 32T478-142l-27 27q-12 12-28 12t-28-12Zm325-365Z"/>
    </Icon>
  );
});

IconMaterialOphthalmology.displayName = 'OnesyIconMaterialOphthalmology';

export default IconMaterialOphthalmology;

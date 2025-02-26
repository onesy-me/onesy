import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRotate90DegreesCwW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Rotate90DegreesCwW100'

      short_name='Rotate90DegreesCw'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-106q-139 0-236.5-97.5T106-440q0-140 97.5-237T441-774h70l-81-81q-4-4-3.5-9.5t4.5-9.5q4-4 9.5-4t9.5 4l92 93q5 5 7 10t2 11q0 6-2 11t-7 10l-93 93q-4 4-9 3.5t-9-4.5q-4-4-4-9.5t4-9.5l80-80h-70q-128 0-217.5 89T134-440q0 128 89 217t217 89q42 0 81.5-9t74.5-30q5-3 11-1t9 7q3 5 1.5 10.5T611-148q-39 23-82.5 32.5T440-106Zm230-189L546-419q-5-5-7-10t-2-11q0-6 2-11t7-10l124-124q5-5 10-7t11-2q6 0 11 2t10 7l124 124q5 5 7 10t2 11q0 6-2 11t-7 10L712-295q-5 5-10 7t-11 2q-6 0-11-2t-10-7Zm21-19 126-126-126-126-126 126 126 126Zm0-126Z"/>
    </Icon>
  );
});

IconMaterialRotate90DegreesCwW100.displayName = 'OnesyIconMaterialRotate90DegreesCwW100';

export default IconMaterialRotate90DegreesCwW100;

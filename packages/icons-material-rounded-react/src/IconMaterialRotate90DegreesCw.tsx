import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRotate90DegreesCw = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Rotate90DegreesCw'

      short_name='Rotate90DegreesCw'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-80q-150 0-255-105T80-440q0-150 105.5-255T441-800h7l-36-36q-11-11-11-28t11-28q11-11 28-11t28 11l104 104q5 5 8 12.5t3 15.5q0 8-3 15.5t-8 12.5L468-628q-11 11-28 11t-28-11q-11-11-11-28t11-28l36-36h-7q-117 0-199 81.5T160-440q0 117 81.5 198.5T440-160q29 0 56.5-5.5T550-182q15-7 30-.5t21 21.5q6 15 1 30.5T582-109q-34 14-69.5 21.5T440-80Zm212-148L468-412q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l184-184q6-6 13-8.5t15-2.5q8 0 15 2.5t13 8.5l184 184q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L708-228q-6 6-13 8.5t-15 2.5q-8 0-15-2.5t-13-8.5Zm28-86 126-126-126-126-126 126 126 126Zm0-126Z"/>
    </Icon>
  );
});

IconMaterialRotate90DegreesCw.displayName = 'OnesyIconMaterialRotate90DegreesCw';

export default IconMaterialRotate90DegreesCw;

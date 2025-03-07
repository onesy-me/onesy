import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAccountCircleOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AccountCircleOffW100'

      short_name='AccountCircleOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M460-460Zm20 300q57 0 110.5-19t95.5-57q-44-35-96.5-52.5T480-306q-57 0-110.5 16.5T274-236q42 38 95.5 57T480-160Zm81-501q29 29 32.5 69.5T575-517q-5 8-11 9t-11-1q-6-4-7-10t3-11q19-26 16.5-57.5T541-641q-23-23-53.5-24.5T431-650q-4 2-10 1t-9-7q-2-5-.5-11t9.5-11q32-20 72.5-15t67.5 32Zm-81 529q-72 0-135.5-27.5T234-234q-47-47-74.5-110.5T132-480q0-62 20.5-120T214-705L100-820q-4-4-4.5-9.5T100-840q5-5 10-5t10 5L862-98q4 4 4.5 9.5T862-78q-5 5-10 5t-10-5L234-685q-36 44-55 96t-19 109q0 63 23.5 121T252-256q51-35 108.5-56.5T480-334q58 0 112.5 19T695-264l31 31q-49 50-113 75.5T480-132Zm79-427ZM312-785q38-23 80.5-33t87.5-10q69 0 133 26.5T726-726q49 49 75.5 113T828-480q0 44-10.5 85.5T787-315q-3 5-9 6.5t-11-1.5q-5-3-6.5-9t1.5-11q19-35 28.5-73t9.5-77q0-134-93-227t-227-93q-39 0-77 9.5T330-762q-5 3-11 2t-10-6q-4-5-3-10.5t6-8.5Z"/>
    </Icon>
  );
});

IconMaterialAccountCircleOffW100.displayName = 'OnesyIconMaterialAccountCircleOffW100';

export default IconMaterialAccountCircleOffW100;

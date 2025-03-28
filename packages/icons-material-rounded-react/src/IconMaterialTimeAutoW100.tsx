import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTimeAutoW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TimeAutoW100'

      short_name='TimeAuto'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M412-386h133l28 81q2 5 5 7t8 2q8 0 11.5-6t1.5-13l-97-281q-2-5-6.5-8.5T485-608h-13q-6 0-10.5 3.5T455-596l-98 281q-2 7 2 13t12 6q5 0 8-2.5t5-7.5l28-80Zm10-28 57-164 56 164H422Zm-28-452q-6 0-10-4t-4-10q0-6 4-10t10-4h172q6 0 10 4t4 10q0 6-4 10t-10 4H394Zm86 734q-64 0-120-24t-98-66q-42-42-66-98t-24-120q0-64 24-120t66-98q42-42 98-66t120-24q57 0 110.5 21t97.5 59l30-30q4-4 9.5-4.5T738-698q5 5 5 10t-5 10l-30 30q38 44 59 97.5T788-440q0 64-24 120t-66 98q-42 42-98 66t-120 24Zm0-28q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 116 82 198t198 82Zm0-280Z"/>
    </Icon>
  );
});

IconMaterialTimeAutoW100.displayName = 'OnesyIconMaterialTimeAutoW100';

export default IconMaterialTimeAutoW100;

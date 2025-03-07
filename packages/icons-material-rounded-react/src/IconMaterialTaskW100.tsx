import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTaskW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TaskW100'

      short_name='Task'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m438-339-76-76q-2-2-4.5-3t-5-1q-2.5 0-5.5 1t-5 3q-5 5-5 10t5 10l75 75q5 5 10 7t11 2q6 0 11-2t10-7l159-159q4-4 4.5-9.5T618-499q-5-5-10-5t-10 5L438-339ZM272-132q-26 0-43-17t-17-43v-576q0-26 17-43t43-17h289q12 0 23.5 5t19.5 13l126 126q8 8 13 19.5t5 23.5v449q0 26-17 43t-43 17H272Zm300-550v-118H272q-12 0-22 10t-10 22v576q0 12 10 22t22 10h416q12 0 22-10t10-22v-460H602q-13 0-21.5-8.5T572-682ZM240-800v148-148 640-640Z"/>
    </Icon>
  );
});

IconMaterialTaskW100.displayName = 'OnesyIconMaterialTaskW100';

export default IconMaterialTaskW100;

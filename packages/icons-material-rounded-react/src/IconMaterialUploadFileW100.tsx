import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialUploadFileW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UploadFileW100'

      short_name='UploadFile'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-458v180q0 6 4 10t10 4q6 0 10-4t4-10v-180l80 80q2 2 4.5 3t5 1q2.5 0 5.5-1t5-3q5-5 5-10t-5-10l-93-93q-5-5-10-7t-11-2q-6 0-11 2t-10 7l-93 93q-4 4-4.5 9.5T366-378q5 5 10 5t10-5l80-80ZM272-132q-26 0-43-17t-17-43v-576q0-26 17-43t43-17h289q12 0 23.5 5t19.5 13l126 126q8 8 13 19.5t5 23.5v449q0 26-17 43t-43 17H272Zm300-550v-118H272q-12 0-22 10t-10 22v576q0 12 10 22t22 10h416q12 0 22-10t10-22v-460H602q-13 0-21.5-8.5T572-682ZM240-800v148-148 640-640Z"/>
    </Icon>
  );
});

IconMaterialUploadFileW100.displayName = 'OnesyIconMaterialUploadFileW100';

export default IconMaterialUploadFileW100;

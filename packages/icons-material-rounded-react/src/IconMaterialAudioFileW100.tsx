import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAudioFileW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AudioFileW100'

      short_name='AudioFile'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M430-216q31 0 52.5-21.5T504-290v-162h78q11 0 19.5-8t8.5-20q0-11-8.5-19.5T582-508h-78q-11 0-19.5 8.5T476-480v138q-9-11-20.5-16.5T430-364q-31 0-52.5 21.5T356-290q0 31 21.5 52.5T430-216Zm-158 84q-26 0-43-17t-17-43v-576q0-26 17-43t43-17h289q12 0 23.5 5t19.5 13l126 126q8 8 13 19.5t5 23.5v449q0 26-17 43t-43 17H272Zm300-550v-118H272q-12 0-22 10t-10 22v576q0 12 10 22t22 10h416q12 0 22-10t10-22v-460H602q-13 0-21.5-8.5T572-682ZM240-800v148-148 640-640Z"/>
    </Icon>
  );
});

IconMaterialAudioFileW100.displayName = 'OnesyIconMaterialAudioFileW100';

export default IconMaterialAudioFileW100;

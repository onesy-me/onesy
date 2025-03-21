import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMpFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MpFilled'

      short_name='Mp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M300-540h40v90q0 13 8.5 21.5T370-420q13 0 21.5-8.5T400-450v-90h40v150q0 13 8.5 21.5T470-360q13 0 21.5-8.5T500-390v-170q0-17-11.5-28.5T460-600H280q-17 0-28.5 11.5T240-560v170q0 13 8.5 21.5T270-360q13 0 21.5-8.5T300-390v-150Zm300 120h80q17 0 28.5-11.5T720-460v-100q0-17-11.5-28.5T680-600H580q-17 0-28.5 11.5T540-560v170q0 13 8.5 21.5T570-360q13 0 21.5-8.5T600-390v-30Zm0-60v-60h60v60h-60ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Z"/>
    </Icon>
  );
});

IconMaterialMpFilled.displayName = 'OnesyIconMaterialMpFilled';

export default IconMaterialMpFilled;

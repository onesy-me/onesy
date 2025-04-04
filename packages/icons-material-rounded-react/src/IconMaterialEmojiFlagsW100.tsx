import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEmojiFlagsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmojiFlagsW100'

      short_name='EmojiFlags'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-452v292q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-558q0-12.75 8.63-21.38Q269.25-748 282-748h211q10.89 0 19.44 6.5Q521-735 523-724l11 56h184q12.75 0 21.38 8.51 8.62 8.51 8.62 21.09v236.82q0 12.58-8.62 21.08-8.63 8.5-21.38 8.5H587q-10.89 0-19.44-6.5Q559-385 557-396l-11-56H280Zm306 52h134v-240H535q-10.89 0-19.44-6.5Q507-653 505-664l-11-56H280v240h265q10.89 0 19.44 6.5Q573-467 575-456l11 56Zm-86-160Z"/>
    </Icon>
  );
});

IconMaterialEmojiFlagsW100.displayName = 'OnesyIconMaterialEmojiFlagsW100';

export default IconMaterialEmojiFlagsW100;

import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCountertopsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CountertopsW100'

      short_name='Countertops'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M272-564h74q14 0 23-9t9-23v-124H240v124q0 14 9 23t23 9Zm0 324h194v-268H240v236q0 14 9 23t23 9Zm222 0h194q14 0 23-9t9-23v-236H494v268Zm-222 0h416q14 0 23-9t9-23v-236H240v236q0 14 9 23t23 9Zm266.74-395q-6.27 0-10.5-4.31Q524-643.63 524-650q2-41 30-69.5t69-28.5q41 0 69 28.87 28 28.88 28 70.13v113h94q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4h-66v236q0 24.75-17.62 42.37Q712.75-212 688-212H272q-24.75 0-42.37-17.63Q212-247.25 212-272v-236h-66q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h121q-22.69 0-38.84-16.45Q212-568.9 212-592v-126q0-12.75 8.63-21.38Q229.25-748 242-748h134q12.75 0 21.38 8.62Q406-730.75 406-718v126q0 23.1-16.45 39.55Q373.1-536 350-536h342v-113q0-29-19.77-50t-49-21q-29.23 0-49.73 21-20.5 21-20.5 50 0 5.95-4 9.97-4 4.03-10.26 4.03ZM272-564h-32 138-106Z"/>
    </Icon>
  );
});

IconMaterialCountertopsW100.displayName = 'OnesyIconMaterialCountertopsW100';

export default IconMaterialCountertopsW100;

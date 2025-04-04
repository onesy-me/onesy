import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTranscribeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TranscribeW100Filled'

      short_name='Transcribe'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M857-694q1.88-1.85 4.55-2.92 2.67-1.08 5.49-1.08 5.96 0 9.96 4.09 4 4.1 4 10.08 0 2.83-1.08 5.42-1.07 2.58-2.92 4.41-15 15-23.5 32.79Q845-623.43 845-600q0 21 8.5 40t23.5 34q2.13 2.11 3.07 4.68.93 2.57.93 5.58 0 5.74-4.09 9.74-4.1 4-10.08 4-2.83 0-5.42-1.08-2.58-1.07-4.41-2.92-18-18-29-42.5T817-600q0-29 11-52.5t29-41.5ZM723-828q1.92-1.85 4.48-2.92 2.56-1.08 5.44-1.08 6.08 0 10.08 4.02t4 9.89q0 3.09-1.07 5.68-1.06 2.58-2.93 4.41-41 41-64.5 94.5T655-600q0 60 23.5 113.5T743-392q1.87 1.88 2.93 4.55 1.07 2.67 1.07 5.8 0 5.65-4.17 9.65t-9.94 4q-2.89 0-5.44-1.08-2.54-1.07-4.45-2.92-44.07-43.58-70.03-102.79Q627-534 627-600.18q0-66.17 26-125Q679-784 723-828ZM345-492q-44.55 0-76.27-31.72Q237-555.45 237-600t31.73-76.28Q300.45-708 345-708t76.27 31.72Q453-644.55 453-600t-31.73 76.28Q389.55-492 345-492ZM77-242v-22q0-26 13-43.5t37-28.5q48-23 106-37.5T345-388q54 0 112 14.5T563-336q24 11 37 28.5t13 43.5v22q0 13-8.5 21.5T583-212H107q-13 0-21.5-8.5T77-242Z"/>
    </Icon>
  );
});

IconMaterialTranscribeW100Filled.displayName = 'OnesyIconMaterialTranscribeW100Filled';

export default IconMaterialTranscribeW100Filled;

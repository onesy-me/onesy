import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTranscribeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TranscribeW100'

      short_name='Transcribe'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M723-372q-44.07-43.58-70.03-102.79Q627-534 627-600.18q0-66.17 26-125Q679-784 723-828l20 20q-41 41-64.5 94.5T655-599.91q0 60.09 23.5 113.5T743-392l-20 20Zm134-134q-18-18-29-42.5T817-600q0-29 11-52.5t29-41.5l20 20q-15 15-23.5 33t-8.5 41q0 21 8.5 40t23.5 34l-20 20Zm-512 14q-44.55 0-76.27-31.72Q237-555.45 237-600t31.73-76.28Q300.45-708 345-708t76.27 31.72Q453-644.55 453-600t-31.73 76.28Q389.55-492 345-492ZM77-212v-52q0-26 13-43.5t37-28.5q48-23 106-37.5T345-388q54 0 112 14.5T563-336q24 11 37 28.5t13 43.5v52H77Zm28-28h480v-24q0-18-10.5-29T549-312q-38-20-94.5-34T345-360q-53 0-109.5 14T141-312q-15 8-25.5 19T105-264v24Zm240-280q33 0 56.5-23.5T425-600q0-33-23.5-56.5T345-680q-33 0-56.5 23.5T265-600q0 33 23.5 56.5T345-520Zm0-80Zm0 360Z"/>
    </Icon>
  );
});

IconMaterialTranscribeW100.displayName = 'OnesyIconMaterialTranscribeW100';

export default IconMaterialTranscribeW100;

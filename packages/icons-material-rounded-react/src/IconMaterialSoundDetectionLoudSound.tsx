import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSoundDetectionLoudSound = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SoundDetectionLoudSound'

      short_name='SoundDetectionLoudSound'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M482-255 369-142q-23 23-56.5 23T256-142L143-255q-23-23-23-57t23-57l112-112v-131q0-27 24.5-37t43.5 9l318 317q19 19 8.5 43.5T612-255H482Zm34-80L335-516v68L199-312l113 113 136-136h68Zm162-344q-59-59-138.5-76T384-744q-15 5-30.5-.5T333-765q-6-17 1-32.5t24-21.5q97-36 199-14.5T735-736q76 76 97.5 179.5T817-355q-6 16-22 22.5t-32-.5q-15-6-20.5-21t.5-31q28-76 11-155.5T678-679Zm-56 57q21 21 34 47.5t18 55.5q3 17-8.5 30T637-476q-16 0-27.5-11T594-514q-4-14-10.5-27T566-565q-11-11-25-18.5T512-595q-16-4-27.5-15T471-638q-2-17 13-28t34-8q29 5 56 18t48 34ZM358-358Z"/>
    </Icon>
  );
});

IconMaterialSoundDetectionLoudSound.displayName = 'OnesyIconMaterialSoundDetectionLoudSound';

export default IconMaterialSoundDetectionLoudSound;

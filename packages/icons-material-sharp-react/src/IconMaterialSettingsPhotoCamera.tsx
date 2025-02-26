import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSettingsPhotoCamera = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsPhotoCamera'

      short_name='SettingsPhotoCamera'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M520-80v-320h120l40-40h80l40 40h120v320H520Zm200-80q33 0 56.5-23.5T800-240q0-33-23.5-56.5T720-320q-33 0-56.5 23.5T640-240q0 33 23.5 56.5T720-160ZM480-480Zm2-140q-58 0-99 41t-41 99q0 48 27 84t71 50v-90q-8-8-13-20.5t-5-23.5q0-25 17.5-42.5T482-540q14 0 25 5.5t19 14.5h90q-13-44-49.5-72T482-620ZM370-80l-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-85 65H696q-1-5-2-10.5t-3-10.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q24 25 54 42t65 22v184h-70Z"/>
    </Icon>
  );
});

IconMaterialSettingsPhotoCamera.displayName = 'OnesyIconMaterialSettingsPhotoCamera';

export default IconMaterialSettingsPhotoCamera;

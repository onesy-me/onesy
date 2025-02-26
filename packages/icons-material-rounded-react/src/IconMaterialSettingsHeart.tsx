import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSettingsHeart = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsHeart'

      short_name='SettingsHeart'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M482-337q8 0 15-2.5t13-8.5l112-112q17-17 22-41.5t-5-47.5q-10-23-30-37t-45-14q-25 0-45 15.5T482-552q-18-17-37.5-32.5T400-600q-25 0-45.5 13.5T324-550q-10 23-4.5 47.5T342-460l111 112q6 6 13.5 8.5T482-337ZM433-80q-27 0-46.5-18T363-142l-9-66q-13-5-24.5-12T307-235l-62 26q-25 11-50 2t-39-32l-47-82q-14-23-8-49t27-43l53-40q-1-7-1-13.5v-27q0-6.5 1-13.5l-53-40q-21-17-27-43t8-49l47-82q14-23 39-32t50 2l62 26q11-8 23-15t24-12l9-66q4-26 23.5-44t46.5-18h94q27 0 46.5 18t23.5 44l9 66q13 5 24.5 12t22.5 15l62-26q25-11 50-2t39 32l47 82q14 23 8 49t-27 43l-53 40q1 7 1 13.5v27q0 6.5-2 13.5l53 40q21 17 27 43t-8 49l-48 82q-14 23-39 32t-50-2l-60-26q-11 8-23 15t-24 12l-9 66q-4 26-23.5 44T527-80h-94Zm7-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm40-320Z"/>
    </Icon>
  );
});

IconMaterialSettingsHeart.displayName = 'OnesyIconMaterialSettingsHeart';

export default IconMaterialSettingsHeart;

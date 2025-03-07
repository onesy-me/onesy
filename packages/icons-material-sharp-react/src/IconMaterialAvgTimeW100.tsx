import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAvgTimeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AvgTimeW100'

      short_name='AvgTime'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-132q-64 0-120-24t-98-66q-42-42-66-98t-24-120h28q0 116 82 198t198 82q116 0 198-82t82-198h28q0 64-24 120t-66 98q-42 42-98 66t-120 24ZM172-440q0-64 24-120t66-98q42-42 98-66t120-24q57 0 110.5 21t97.5 59l40-40 20 20-40 40q38 44 59 97.5T788-440h-28q0-116-82-198t-198-82q-116 0-198 82t-82 198h-28Zm208-426v-28h200v28H380Zm100 146q-112 0-193.5 77T200-454h129l71 143 160-320 89 177h111q-5-112-86.5-189T480-720Zm0 560q112 0 193.5-77T760-426H631l-71-143-160 320-89-177H200q5 112 86.5 189T480-160Zm0 0q-116 0-198-82t-82-198q0-116 82-198t198-82q116 0 198 82t82 198q0 116-82 198t-198 82Zm0-280Z"/>
    </Icon>
  );
});

IconMaterialAvgTimeW100.displayName = 'OnesyIconMaterialAvgTimeW100';

export default IconMaterialAvgTimeW100;

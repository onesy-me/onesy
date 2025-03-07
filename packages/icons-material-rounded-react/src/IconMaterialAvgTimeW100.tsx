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
      <path d="M200-454h120q4 0 7 2t5 6l68 134 148-294q4-8 12.5-8t12.5 8l76 152h111q-5-112-86.5-189T480-720q-112 0-193.5 77T200-454Zm280 294q112 0 193.5-77T760-426H640q-4 0-7-2t-5-6l-68-134-148 295q-4 8-12.5 7.5T387-274l-76-152H200q5 112 86.5 189T480-160Zm0 28q-64 0-120-24t-98-66q-42-42-66-98t-24-120h28q0 116 82 198t198 82q116 0 198-82t82-198h28q0 64-24 120t-66 98q-42 42-98 66t-120 24ZM172-440q0-64 24-120t66-98q42-42 98-66t120-24q57 0 110.5 21t97.5 59l30-30q4-4 9.5-4.5T738-698q5 5 5 10t-5 10l-30 30q38 44 59 97.5T788-440h-28q0-116-82-198t-198-82q-116 0-198 82t-82 198h-28Zm222-426q-6 0-10-4t-4-10q0-6 4-10t10-4h172q6 0 10 4t4 10q0 6-4 10t-10 4H394Zm86 706q-116 0-198-82t-82-198q0-116 82-198t198-82q116 0 198 82t82 198q0 116-82 198t-198 82Zm0-280Z"/>
    </Icon>
  );
});

IconMaterialAvgTimeW100.displayName = 'OnesyIconMaterialAvgTimeW100';

export default IconMaterialAvgTimeW100;

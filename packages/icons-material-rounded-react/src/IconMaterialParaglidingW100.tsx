import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialParaglidingW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ParaglidingW100'

      short_name='Paragliding'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-296q-26 0-45-19t-19-45q0-26 19-45t45-19q26 0 45 19t19 45q0 26-19 45t-45 19ZM386-26v-131q-77-21-113.5-75.5T228-359q-1-6 3-10.5t10-4.5q6 0 10 4.5t5 11.5q10 94 67 139t157 45q100 0 157-45t67-139q1-7 5-11.5t10-4.5q6 0 10 4.5t3 10.5q-7 72-43.5 126.5T574-157v131H386ZM210-458l-83-204q-17 7-29.5 13T80-643q-5 0-9.5-4T66-657v-133q0-57 117-100.5T480-934q180 0 297 43.5T894-790v133q0 6-4.5 10t-9.5 4q-5 0-17.5-6T833-662l-83 203q-2 6-7.5 9.5T731-446h-12q-8 0-13.5-4t-7.5-12l-57-252q-43-6-83-9t-78-3q-38 0-78 3t-83 9l-57 253q-2 7-7.5 11t-12.5 4h-14q-6 0-11-3.5t-7-8.5Zm25-12 53-239q-39 8-68 15.5T154-671l81 201Zm490 0 81-201q-38-14-66.5-22T672-709l53 239ZM94-678q86-39 185-57.5T480-754q102 0 201 18.5T866-678v-116q-6-20-34.5-39.5t-77-36Q706-886 637-896t-157-10q-88 0-157 10t-117.5 26.5q-48.5 16.5-77 36T94-794v116Zm386-228Z"/>
    </Icon>
  );
});

IconMaterialParaglidingW100.displayName = 'OnesyIconMaterialParaglidingW100';

export default IconMaterialParaglidingW100;

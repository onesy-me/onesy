import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAllergyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AllergyFilled'

      short_name='Allergy'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M760-60q-15 0-28-7t-21-19q-121-22-213.5-108T368-406q-86 40-140.5 116T162-121q-2 17-13.5 29T120-80q-17 0-28.5-12.5T82-122q11-121 83-218.5T350-486q-21-115-3.5-207.5T420-843q2-24 19-40.5t41-16.5q25 0 42.5 17.5T540-840q0 25-17.5 42.5T480-780h-4q-2 0-5-1-22 25-35 61.5T419-638q20-20 46.5-34.5T524-695q30-8 64.5-10.5t72.5.5q8-8 18-11.5t21-3.5q25 0 42.5 17.5T760-660q0 25-17.5 42.5T700-600q-14 0-27.5-6.5T651-625q-33-2-63.5.5T533-614q-39 13-61.5 38T443-512q28-5 47.5-6.5T576-520q8-10 19.5-15t24.5-5q25 0 42.5 17.5T680-480q0 25-17.5 42.5T620-420q-13 0-24.5-5T576-440q-63 0-83 1.5t-45 6.5q13 34 51 52t99 20q29 2 62.5-1t67.5-9q8-14 22-22t30-8q25 0 42.5 17.5T840-340q0 25-17.5 42.5T780-280q-10 0-18.5-3t-16.5-9q-34 6-66.5 9.5T617-279q-29 0-55-3t-49-9q38 49 92.5 82.5T720-164q8-8 18.5-12t21.5-4q25 0 42.5 17.5T820-120q0 25-17.5 42.5T760-60Z"/>
    </Icon>
  );
});

IconMaterialAllergyFilled.displayName = 'OnesyIconMaterialAllergyFilled';

export default IconMaterialAllergyFilled;

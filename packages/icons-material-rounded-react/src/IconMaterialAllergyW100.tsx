import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAllergyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AllergyW100'

      short_name='Allergy'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M738-93q-11 0-19-5.5T707-114q-116-20-202-105.5T384-436q-104 41-169 123.5T137-124q-1 7-5 12.5t-11 5.5q-7 0-10.5-6t-2.5-14q11-118 82-207.5T378-465q-21-101-10-191t53-147q-2-4-3.5-8t-1.5-9q0-14 10-24t24-10q14 0 24 10t10 24q0 14-10 24t-24 10h-3.5q-1.5 0-3.5-1-32 45-44 102t-5 137q11-37 35-63t60-43q29-13 65-19.5t80-6.5q5-8 12.5-13.5T664-699q14 0 24 10t10 24q0 14-10 24t-24 10q-11 0-19-5.5T633-652q-42 0-75.5 6T498-628q-45 20-65.5 58T414-477q32-9 66.5-13.5T550-495q5-8 12.5-13.5T580-514q14 0 24 10t10 24q0 14-10 24t-24 10q-11 0-19-5.5T549-467q-34 0-66.5 4.5T418-448q11 57 58 85.5T608-334q22 0 47.5-2t52.5-6q4-10 12.5-16t19.5-6q14 0 24 10t10 24q0 14-10 24t-24 10q-9 0-16.5-4.5T711-313q-29 4-54.5 6t-47.5 2q-52 0-92.5-11T447-350q42 86 109.5 139.5T708-142q5-9 12.5-14t17.5-5q14 0 24 10t10 24q0 14-10 24t-24 10Z"/>
    </Icon>
  );
});

IconMaterialAllergyW100.displayName = 'OnesyIconMaterialAllergyW100';

export default IconMaterialAllergyW100;

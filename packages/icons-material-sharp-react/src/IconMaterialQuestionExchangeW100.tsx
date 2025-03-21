import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialQuestionExchangeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QuestionExchangeW100'

      short_name='QuestionExchange'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-92q-125 0-222.5-69T115-347v139H87v-188h188v28H138q36 112 131 180t211 68q71 0 133.5-25T724-214.5q48-44.5 78.5-106T839-454h28q-5 76-37.5 142t-84 115q-51.5 49-120 77T480-92ZM93-506q7-81 40.5-147.5t86-114.5Q272-816 339-842t141-26q122 0 222.5 69.5T845-609v-143h28v188H685v-28h137q-33-108-128.5-178T480-840q-67 0-129 24t-111 67.5q-49 43.5-81 105T121-506H93Zm389 221q11 0 18.5-7.5T508-311q0-11-7.5-18.5T482-337q-11 0-18.5 7.5T456-311q0 11 7.5 18.5T482-285Zm-16-126h28q2-24 10.5-39.5T536-489q27-27 39.5-47.5T588-583q0-45-29.5-72.5T484-683q-37 0-65 18.5T374-613l28 12q11-24 32.5-39t47.5-15q33 0 55.5 20t22.5 52q0 21-11 37t-29 33q-32 30-43 53t-11 49Z"/>
    </Icon>
  );
});

IconMaterialQuestionExchangeW100.displayName = 'OnesyIconMaterialQuestionExchangeW100';

export default IconMaterialQuestionExchangeW100;

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAreaChartFilled = (props: IIcon) => {

  return (
    <Icon
      name='AreaChartFilled'

      short_name='AreaChart'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M840-320 464-614 305-395 120-540v-140l160 120 200-280 200 160h160v360ZM120-160v-280l200 160 160-220 360 281v59H120Z"/>
    </Icon>
  );
};

IconMaterialAreaChartFilled.displayName = 'OnesyIconMaterialAreaChartFilled';

export default IconMaterialAreaChartFilled;

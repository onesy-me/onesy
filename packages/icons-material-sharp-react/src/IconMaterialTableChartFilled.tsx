import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTableChartFilled = (props: IIcon) => {

  return (
    <Icon
      name='TableChartFilled'

      short_name='TableChart'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-640v-200h720v200H120Zm0 520v-440h180v440H120Zm540 0v-440h180v440H660Zm-280 0v-440h200v440H380Z"/>
    </Icon>
  );
};

IconMaterialTableChartFilled.displayName = 'OnesyIconMaterialTableChartFilled';

export default IconMaterialTableChartFilled;

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCandlestickChart = (props: IIcon) => {

  return (
    <Icon
      name='CandlestickChart'

      short_name='CandlestickChart'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-160v-80h-80v-480h80v-80h80v80h80v480h-80v80h-80Zm0-160h80v-320h-80v320Zm320 160v-200h-80v-280h80v-160h80v160h80v280h-80v200h-80Zm0-280h80v-120h-80v120Zm-280-40Zm320-20Z"/>
    </Icon>
  );
};

IconMaterialCandlestickChart.displayName = 'OnesyIconMaterialCandlestickChart';

export default IconMaterialCandlestickChart;

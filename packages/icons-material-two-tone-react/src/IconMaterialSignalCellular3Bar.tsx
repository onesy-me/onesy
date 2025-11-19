import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSignalCellular3Bar = (props: IIcon) => {

  return (
    <Icon
      name='SignalCellular3Bar'

      short_name='SignalCellular3Bar'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M2 22h20V2L2 22z" fillOpacity=".3"/><path d="M17 7L2 22h15V7z"/>
    </Icon>
  );
};

IconMaterialSignalCellular3Bar.displayName = 'OnesyIconMaterialSignalCellular3Bar';

export default IconMaterialSignalCellular3Bar;

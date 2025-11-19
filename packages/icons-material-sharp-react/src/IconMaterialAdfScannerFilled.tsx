import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAdfScannerFilled = (props: IIcon) => {

  return (
    <Icon
      name='AdfScannerFilled'

      short_name='AdfScanner'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-320h160v-320h480v320h160v320H80Zm240-320h320v-240H320v240Zm400 200q17 0 28.5-11.5T760-320q0-17-11.5-28.5T720-360q-17 0-28.5 11.5T680-320q0 17 11.5 28.5T720-280Z"/>
    </Icon>
  );
};

IconMaterialAdfScannerFilled.displayName = 'OnesyIconMaterialAdfScannerFilled';

export default IconMaterialAdfScannerFilled;

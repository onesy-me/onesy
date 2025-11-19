import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBrightnessHigh = (props: IIcon) => {

  return (
    <Icon
      name='BrightnessHigh'

      short_name='BrightnessHigh'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-28 346-160H160v-186L28-480l132-134v-186h186l134-132 134 132h186v186l132 134-132 134v186H614L480-28Zm0-252q83 0 141.5-58.5T680-480q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480q0 83 58.5 141.5T480-280Zm0-200Zm0 340 100-100h140v-140l100-100-100-100v-140H580L480-820 380-720H240v140L140-480l100 100v140h140l100 100Zm0-340Z"/>
    </Icon>
  );
};

IconMaterialBrightnessHigh.displayName = 'OnesyIconMaterialBrightnessHigh';

export default IconMaterialBrightnessHigh;

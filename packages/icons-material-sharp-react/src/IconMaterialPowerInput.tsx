import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPowerInput = (props: IIcon) => {

  return (
    <Icon
      name='PowerInput'

      short_name='PowerInput'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-360v-80h200v80H80Zm0-160v-80h760v80H80Zm280 160v-80h200v80H360Zm280 0v-80h200v80H640Z"/>
    </Icon>
  );
};

IconMaterialPowerInput.displayName = 'OnesyIconMaterialPowerInput';

export default IconMaterialPowerInput;

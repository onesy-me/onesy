import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTerminal = (props: IIcon) => {

  return (
    <Icon
      name='Terminal'

      short_name='Terminal'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-640h800v640H80Zm80-80h640v-400H160v400Zm140-40-56-56 103-104-104-104 57-56 160 160-160 160Zm180 0v-80h240v80H480Z"/>
    </Icon>
  );
};

IconMaterialTerminal.displayName = 'OnesyIconMaterialTerminal';

export default IconMaterialTerminal;

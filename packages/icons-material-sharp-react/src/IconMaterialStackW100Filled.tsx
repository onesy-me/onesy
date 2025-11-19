import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStackW100Filled = (props: IIcon) => {

  return (
    <Icon
      name='StackW100Filled'

      short_name='Stack'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M272-400v28H132v-456h456v140h-28v-112H160v400h112Zm100 268v-456h456v456H372Z"/>
    </Icon>
  );
};

IconMaterialStackW100Filled.displayName = 'OnesyIconMaterialStackW100Filled';

export default IconMaterialStackW100Filled;

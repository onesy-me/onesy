import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTimer1Filled = (props: IIcon) => {

  return (
    <Icon
      name='Timer1Filled'

      short_name='Timer1'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-200v-440H320v-120h280v560H480Z"/>
    </Icon>
  );
};

IconMaterialTimer1Filled.displayName = 'OnesyIconMaterialTimer1Filled';

export default IconMaterialTimer1Filled;
